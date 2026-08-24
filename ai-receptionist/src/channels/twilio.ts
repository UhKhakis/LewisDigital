// Twilio helpers: request-signature verification, TwiML builders, and the
// outbound Messages API call. Secrets come from env (Cloudflare secrets) —
// never hardcoded. See README for the exact env var names and setup steps.

import type { Env } from '../env';
import { bytesToBase64, timingSafeEqual, xmlEscape } from './util';

const MESSAGES_URL = 'https://api.twilio.com/2010-04-01/Accounts/{sid}/Messages.json';

// --- TwiML builders ---------------------------------------------------------

function twiml(inner: string): Response {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><Response>${inner}</Response>`,
    { status: 200, headers: { 'content-type': 'text/xml; charset=utf-8' } },
  );
}

/** Empty ack — Twilio sends nothing in reply. */
export function emptyTwiml(): Response {
  return twiml('');
}

/** Reply to an inbound SMS with `<Message>`. */
export function smsReplyTwiml(body: string): Response {
  return twiml(`<Message>${xmlEscape(body)}</Message>`);
}

/** Speak text back to a caller with `<Say>`. */
export function sayTwiml(text: string): Response {
  return twiml(`<Say>${xmlEscape(text)}</Say>`);
}

/** `<Gather input="speech">` that prompts the caller and POSTs the transcript
 *  to `actionUrl` with `SpeechResult`. */
export function gatherSpeechTwiml(prompt: string, actionUrl: string): Response {
  return twiml(
    `<Gather input="speech" speechTimeout="auto" action="${xmlEscape(actionUrl)}" method="POST">` +
      `<Say>${xmlEscape(prompt)}</Say>` +
      `</Gather>` +
      `<Say>I didn't catch that. Could you repeat it?</Say>`,
  );
}

// --- Signature verification -------------------------------------------------

/**
 * Verify a Twilio webhook signature (X-Twilio-Signature). Twilio signs the full
 * request URL + the form parameters (sorted by key, UTF-8, name+value
 * concatenated) with HMAC-SHA1 using the account auth token.
 *
 * When no auth token is configured (local dev / tests) verification is SKIPPED
 * and this returns true — the worker then runs with whatever creds it has. See
 * README ("Security").
 */
export async function verifyTwilioSignature(
  url: string,
  params: Record<string, string>,
  authToken: string,
  signature: string | null,
): Promise<boolean> {
  if (!authToken) return true;
  if (!signature) return false;

  let data = url;
  for (const k of Object.keys(params).sort()) data += k + params[k];

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(authToken),
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return timingSafeEqual(bytesToBase64(new Uint8Array(sig)), signature);
}

// --- Outbound Messages API ---------------------------------------------------

export interface TwilioSend {
  to: string;
  /** E.164 From number — defaults to the client's Twilio number. */
  from?: string;
  /** Messaging Service SID — takes precedence over a single From number. */
  messagingServiceSid?: string;
  body: string;
}

/**
 * Send an outbound SMS via the Twilio Messages API. Returns false when creds
 * are missing or the request fails — callers can fall back to a TwiML reply.
 */
export async function sendTwilioSms(env: Env, input: TwilioSend): Promise<boolean> {
  const sid = env.TWILIO_ACCOUNT_SID;
  const token = env.TWILIO_AUTH_TOKEN;
  if (!sid || !token) return false;

  const params = new URLSearchParams();
  params.set('To', input.to);
  if (input.messagingServiceSid) {
    params.set('MessagingServiceSid', input.messagingServiceSid);
  } else if (input.from) {
    params.set('From', input.from);
  } else if (env.TWILIO_MESSAGING_SERVICE_SID) {
    params.set('MessagingServiceSid', env.TWILIO_MESSAGING_SERVICE_SID);
  } else if (env.TWILIO_PHONE_NUMBER) {
    params.set('From', env.TWILIO_PHONE_NUMBER);
  } else {
    return false;
  }
  params.set('Body', input.body);

  try {
    const res = await fetch(MESSAGES_URL.replace('{sid}', sid), {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: 'Basic ' + btoa(`${sid}:${token}`),
      },
      body: params.toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}
