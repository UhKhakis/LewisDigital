// Forwarding of messages the bot cannot answer from verified facts.
// Unanswerable items are queued in KV (never lost) and, if a webhook is
// configured, POSTed there so they can be emailed to the business.
//
// Keys:
//   forward_queue:<client_id>           -> newline-delimited JSONL history
//   forward_queue:<client_id>:<ts>      -> a timestamped copy of each item

import type { KVLike, ClientRecord, ForwardPayload } from '../types';
import type { Env } from '../env';

const PREFIX = 'forward_queue:';

export async function recordForward(kv: KVLike, payload: ForwardPayload): Promise<void> {
  const queueKey = `${PREFIX}${payload.client_id}`;
  const itemKey = `${PREFIX}${payload.client_id}:${Date.now()}`;
  const line = JSON.stringify(payload) + '\n';
  const existing = await kv.get(queueKey, 'text');
  await kv.put(queueKey, (typeof existing === 'string' ? existing : '') + line);
  await kv.put(itemKey, JSON.stringify(payload));
}

export async function readForwardQueue(kv: KVLike, clientId: string): Promise<string> {
  const raw = await kv.get(`${PREFIX}${clientId}`, 'text');
  return typeof raw === 'string' ? raw : '';
}

/** POST a forwarded item to the client-specific or global webhook (best effort). */
export async function notifyForward(
  env: Env,
  record: ClientRecord,
  payload: ForwardPayload,
): Promise<void> {
  const url = record.forwarding?.webhook_url ?? env.FORWARD_WEBHOOK_URL;
  if (!url) return;
  const body = {
    ...payload,
    business_name: record.business_name,
    email: record.forwarding?.email,
  };
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    // Non-fatal: the item remains in the KV queue for later retrieval.
  }
}