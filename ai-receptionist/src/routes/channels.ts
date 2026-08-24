// Channel connectors for SMS, voice, and social DMs.
//
// All four channels (website chat, SMS, voice, social) share ONE brain:
//   src/agent/core.ts -> answerQuestion(record, apiKey, message, history)
// and ONE channel glue:
//   src/channels/shared.ts -> runChannelTurn(env, clientId, message, sessionId)
// which reuses the same grounded/forward guard, usage ledger, and forward
// queue as the /chat widget channel.
//
// Wiring is env/secrets based (no hardcoded credentials). See README for the
// exact env var names and the Twilio/Meta setup steps; live delivery requires
// real provider credentials that have not been provisioned yet.

import { json } from '../http';
import { getMasterSecret } from '../env';
import {
  findClientByTwilio,
  findClientByMetaPage,
  findClientByMetaIg,
  decryptMetaPageToken,
} from '../store/clientStore';
import { recordForward, notifyForward } from '../store/forward';
import { runChannelTurn } from '../channels/shared';
import {
  verifyTwilioSignature,
  sendTwilioSms,
  smsReplyTwiml,
  sayTwiml,
  gatherSpeechTwiml,
  emptyTwiml,
} from '../channels/twilio';
import { verifyMetaSignature, sendMetaMessage } from '../channels/meta';
import type { Env } from '../env';
import type { ForwardPayload } from '../types';

// --- form helpers -----------------------------------------------------------

async function readForm(request: Request): Promise<Record<string, string>> {
  const params: Record<string, string> = {};
  try {
    const form = await request.formData();
    for (const [k, v] of form.entries()) params[k] = typeof v === 'string' ? v : '';
  } catch {
    // Not form-encoded — leave params empty.
  }
  return params;
}

// --- SMS channel ------------------------------------------------------------

/**
 * Twilio SMS webhook (`POST /channels/sms`). Twilio posts form-encoded fields
 * (From = customer, To = our/client number, Body = message text). We verify the
 * signature, resolve the client from the To number, run the shared core, and
 * reply as an SMS (Messages API with a TwiML fallback).
 */
export async function handleSms(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const params = await readForm(request);
  const signature = request.headers.get('x-twilio-signature');
  if (!(await verifyTwilioSignature(request.url, params, env.TWILIO_AUTH_TOKEN ?? '', signature))) {
    return new Response('Invalid signature', { status: 403 });
  }

  const from = params.From;
  const to = params.To;
  const body = (params.Body ?? '').trim();
  if (!from || !to || !body) return emptyTwiml();

  const record = await findClientByTwilio(env.RECEPTIONIST_KV, to);
  if (!record) return emptyTwiml();

  const turn = await runChannelTurn(env, record.client_id, body, params.MessageSid);

  // Primary reply: outbound Messages API. Fall back to a synchronous TwiML
  // `<Message>` so the customer still gets a reply when outbound creds are
  // missing (e.g. local dev / tests).
  const sent = await sendTwilioSms(env, {
    to: from,
    from: record.channels?.twilio_phone_number,
    messagingServiceSid: record.channels?.twilio_messaging_service_sid,
    body: turn.answer,
  });
  if (sent) return emptyTwiml();
  return smsReplyTwiml(turn.answer);
}

// --- Voice channel ----------------------------------------------------------

/**
 * Twilio Voice webhook (`/channels/voice`). A small state machine driven by
 * TwiML: greet + `<Gather speech>` -> send the transcript through the shared
 * core -> `<Say>` the grounded answer (or, for out-of-scope, collect a callback
 * name/number and forward it). Every `answerQuestion` call is ledged; Twilio
 * speech-to-text + telephony are metered on Twilio's side (pass-through).
 */
export async function handleVoice(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const step = url.searchParams.get('step') ?? 'greet';

  // Twilio validates the webhook URL with a GET before routing calls to it.
  if (request.method === 'GET') return emptyTwiml();
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const params = await readForm(request);
  if (!(await verifyTwilioSignature(request.url, params, env.TWILIO_AUTH_TOKEN ?? '', request.headers.get('x-twilio-signature')))) {
    return new Response('Invalid signature', { status: 403 });
  }

  if (step === 'answer') {
    const callbackUrl = new URL(url);
    callbackUrl.searchParams.set('step', 'callback');
    return voiceAnswer(env, params, callbackUrl.toString());
  }
  if (step === 'callback') return voiceCallback(env, params);

  const answerUrl = new URL(url);
  answerUrl.searchParams.set('step', 'answer');
  return gatherSpeechTwiml('Thanks for calling. How can I help you today?', answerUrl.toString());
}

async function voiceAnswer(env: Env, params: Record<string, string>, callbackUrl: string): Promise<Response> {
  const to = params.To;
  const speech = (params.SpeechResult ?? '').trim();
  const record = to ? await findClientByTwilio(env.RECEPTIONIST_KV, to) : null;
  if (!record || !speech) {
    return sayTwiml("I'm sorry, I didn't catch that. Please try again later.");
  }

  const turn = await runChannelTurn(env, record.client_id, speech, params.CallSid);
  if (!turn.forward) return sayTwiml(turn.answer);

  // Out-of-scope: ask for a callback name/number so the business can follow up.
  return gatherSpeechTwiml(
    "I'll have someone get back to you. Please say your name and a phone number, and we'll pass it along.",
    callbackUrl,
  );
}

async function voiceCallback(env: Env, params: Record<string, string>): Promise<Response> {
  const to = params.To;
  const details = (params.SpeechResult ?? '').trim();
  const record = to ? await findClientByTwilio(env.RECEPTIONIST_KV, to) : null;
  if (record && details) {
    const payload: ForwardPayload = {
      client_id: record.client_id,
      message: `Voice callback requested: ${details}`,
      session_id: params.CallSid,
      reason: 'out_of_scope',
      at: new Date().toISOString(),
    };
    await recordForward(env.RECEPTIONIST_KV, payload);
    await notifyForward(env, record, payload);
  }
  return sayTwiml("Thanks — we'll have someone reach out to you soon.");
}

// --- Social DM channel ------------------------------------------------------

interface MetaMessagingEvent {
  sender?: { id?: string };
  recipient?: { id?: string };
  message?: { mid?: string; text?: string; is_echo?: boolean };
}
interface MetaEntry {
  id?: string;
  messaging?: MetaMessagingEvent[];
  standby?: MetaMessagingEvent[];
}
interface MetaWebhookPayload {
  object?: 'page' | 'instagram';
  entry?: MetaEntry[];
}

/**
 * Meta Messenger / Instagram DM webhook (`/channels/social`).
 *   GET  — webhook verification (hub.mode / hub.verify_token / hub.challenge)
 *   POST — inbound message events. Resolve the client from the page (or IG
 *          business account) id, run the shared core, and reply via the Send
 *          API. Undeliverable replies are queued for later delivery.
 */
export async function handleSocial(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);

  if (request.method === 'GET') {
    const mode = url.searchParams.get('hub.mode');
    const verifyToken = url.searchParams.get('hub.verify_token');
    const challenge = url.searchParams.get('hub.challenge');
    const expected = env.META_WEBHOOK_VERIFY_TOKEN;
    if (mode === 'subscribe' && expected && verifyToken === expected && challenge) {
      return new Response(challenge, { status: 200, headers: { 'content-type': 'text/plain; charset=utf-8' } });
    }
    return new Response('Forbidden', { status: 403 });
  }

  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const rawBody = await request.text();
  if (!(await verifyMetaSignature(rawBody, env.META_APP_SECRET ?? '', request.headers.get('x-hub-signature-256')))) {
    return new Response('Invalid signature', { status: 403 });
  }

  let payload: MetaWebhookPayload;
  try {
    payload = JSON.parse(rawBody) as MetaWebhookPayload;
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  for (const entry of payload.entry ?? []) {
    const pageId = entry.id;
    const events = [...(entry.messaging ?? []), ...(entry.standby ?? [])];
    for (const evt of events) {
      if (evt.message?.is_echo) continue; // ignore our own outbound echoes
      const senderId = evt.sender?.id;
      const text = (evt.message?.text ?? '').trim();
      if (!pageId || !senderId || !text) continue;
      await handleSocialMessage(env, payload.object ?? 'page', pageId, senderId, text);
    }
  }

  // Acknowledge to Meta so it does not retry the webhook.
  return new Response('EVENT_RECEIVED', { status: 200 });
}

async function handleSocialMessage(
  env: Env,
  object: 'page' | 'instagram',
  pageId: string,
  senderId: string,
  text: string,
): Promise<void> {
  const record =
    object === 'instagram'
      ? await findClientByMetaIg(env.RECEPTIONIST_KV, pageId)
      : await findClientByMetaPage(env.RECEPTIONIST_KV, pageId);
  if (!record) return;

  const turn = await runChannelTurn(env, record.client_id, text, senderId);

  // Per-client (decrypted) page token takes precedence over the global fallback.
  let token = env.META_PAGE_ACCESS_TOKEN;
  try {
    token = (await decryptMetaPageToken(record, getMasterSecret(env))) ?? token;
  } catch {
    // Leave token as the global fallback; the reply is queued below if still absent.
  }

  const delivered = token ? await sendMetaMessage(token, senderId, turn.answer) : false;

  if (!delivered) {
    // No Send-API credentials yet (or the send failed): queue the grounded
    // answer so it is never lost and can be replayed once Meta creds exist.
    const payload: ForwardPayload = {
      client_id: record.client_id,
      message: `${object} DM from ${senderId}: "${text}" → reply queued: "${turn.answer}"`,
      session_id: senderId,
      reason: 'delivery_pending',
      at: new Date().toISOString(),
    };
    await recordForward(env.RECEPTIONIST_KV, payload);
    await notifyForward(env, record, payload);
  }
}
