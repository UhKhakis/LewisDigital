// Channel connectors for SMS, voice, and social DMs.
//
// All four channels (website chat, SMS, voice, social) share ONE brain:
//   src/agent/core.ts -> answerQuestion(record, apiKey, message, history)
//
// These are intentionally scaffolds — the chat widget channel is the only one
// built in this slice. Each stub documents exactly what remains.

import { json } from '../http';
import type { Env } from '../env';

export async function handleSms(request: Request, env: Env): Promise<Response> {
  // TODO(channel/sms): Twilio webhook.
  //   1. Verify the Twilio request signature (X-Twilio-Signature) using the
  //      client's Twilio auth token (stored per-client like the LLM key).
  //   2. Parse form fields: From (customer phone), To (our number), Body.
  //   3. Resolve client_id from the To number (map number -> client in KV).
  //   4. answerQuestion(...) -> reply as TwiML <Message>.
  //   5. On forward: reply "I'll have someone get back to you." and email the
  //      business (reuse src/store/forward.ts).
  void request;
  void env;
  return json({ error: 'SMS channel not yet implemented' }, 501);
}

export async function handleVoice(request: Request, env: Env): Promise<Response> {
  // TODO(channel/voice): Twilio voice + speech-to-text.
  //   1. Verify Twilio signature (same as SMS).
  //   2. TwiML <Gather input="speech"> to capture the caller's question.
  //   3. Transcribe (Twilio speech or STT), then answerQuestion(...).
  //   4. Respond with TwiML <Say> of the answer.
  //   5. Meter per-minute via the ledger; forward unanswerable calls to email.
  void request;
  void env;
  return json({ error: 'Voice channel not yet implemented' }, 501);
}

export async function handleSocial(request: Request, env: Env): Promise<Response> {
  // TODO(channel/social): Meta Messenger / Instagram DMs.
  //   1. Handle Meta webhook verification (hub.challenge) and signature.
  //   2. On message: resolve client_id from the page/IG id -> answerQuestion(...).
  //   3. Reply via the Meta Send API (page access token stored per-client).
  //   4. Forward unanswerable DMs to email. Note: requires a Meta app +
  //      business verification (slowest, gated by Meta policy).
  void request;
  void env;
  return json({ error: 'Social DM channel not yet implemented' }, 501);
}