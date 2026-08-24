// Shared channel turn runner. Every non-widget channel (SMS, voice, social DM)
// funnels its inbound customer message through here so all four channels share
// ONE brain and the exact same grounded/forward + ledger behavior as /chat.
//
// This is thin glue over the shared agent core (src/agent/core.ts) and the
// same store modules /chat uses: per-client record + encrypted LLM key, the
// usage ledger, and the forward queue + webhook.

import { answerQuestion } from '../agent/core';
import { getClient, decryptClientKey } from '../store/clientStore';
import { getLedger, addUsage, isOverLimit } from '../store/ledger';
import { recordForward, notifyForward } from '../store/forward';
import { getMasterSecret } from '../env';
import type { Env } from '../env';
import type { ForwardPayload } from '../types';

export const FALLBACK = "I'll have someone get back to you.";

export type TurnReason = 'answered' | 'out_of_scope' | 'over_limit' | 'unknown_client' | 'key_error';

export interface TurnResult {
  /** False when no reply could be produced for the customer (unknown client). */
  ok: boolean;
  /** Text to send back to the customer on the channel. */
  answer: string;
  forward: boolean;
  reason: TurnReason;
}

/**
 * Run one customer message through the shared agent core: load + decrypt the
 * client key, enforce limits, answer, forward out-of-scope items, and ledger
 * usage. Returns a channel-agnostic result.
 */
export async function runChannelTurn(
  env: Env,
  clientId: string,
  message: string,
  sessionId?: string,
): Promise<TurnResult> {
  const masterSecret = getMasterSecret(env);
  const record = await getClient(env.RECEPTIONIST_KV, clientId);
  if (!record || !record.active) {
    return { ok: false, answer: FALLBACK, forward: true, reason: 'unknown_client' };
  }

  const ledger = await getLedger(env.RECEPTIONIST_KV, clientId);
  if (isOverLimit(record, ledger)) {
    const payload: ForwardPayload = {
      client_id: clientId,
      message,
      session_id: sessionId,
      reason: 'over_limit',
      at: new Date().toISOString(),
    };
    await recordForward(env.RECEPTIONIST_KV, payload);
    await notifyForward(env, record, payload);
    return { ok: true, answer: FALLBACK, forward: true, reason: 'over_limit' };
  }

  let apiKey: string;
  try {
    apiKey = await decryptClientKey(record, masterSecret);
  } catch {
    return { ok: false, answer: FALLBACK, forward: true, reason: 'key_error' };
  }

  const reply = await answerQuestion(record, apiKey, message);

  if (reply.forward) {
    const payload: ForwardPayload = {
      client_id: clientId,
      message,
      session_id: sessionId,
      reason: 'out_of_scope',
      at: new Date().toISOString(),
    };
    await recordForward(env.RECEPTIONIST_KV, payload);
    await notifyForward(env, record, payload);
  }

  await addUsage(env.RECEPTIONIST_KV, clientId, reply.usage);

  return {
    ok: true,
    answer: reply.answer,
    forward: reply.forward,
    reason: reply.forward ? 'out_of_scope' : 'answered',
  };
}
