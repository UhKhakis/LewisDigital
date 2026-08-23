// Per-client record storage in Cloudflare KV.
// Key: `client:<client_id>` -> JSON ClientRecord.
// The client LLM key is stored ENCRYPTED (see crypto.ts); the raw key is never
// written to KV or returned to any browser.

import type { KVLike, ClientRecord, VerifiedFacts, Forwarding, ClientLimits, ClientTheme } from '../types';
import { encryptSecret, decryptSecret } from './crypto';

const PREFIX = 'client:';

function clientKey(clientId: string): string {
  return `${PREFIX}${clientId}`;
}

export async function getClient(kv: KVLike, clientId: string): Promise<ClientRecord | null> {
  const raw = await kv.get(clientKey(clientId), 'json');
  return (raw as ClientRecord | null) ?? null;
}

export async function deleteClient(kv: KVLike, clientId: string): Promise<void> {
  await kv.delete(clientKey(clientId));
}

/** A client record as submitted via the admin route (contains a PLAINTEXT key). */
export interface ClientInput {
  client_id: string;
  business_name: string;
  provider: ClientRecord['provider'];
  model: string;
  /** Plaintext client LLM key — accepted at registration time only. */
  api_key: string;
  facts: VerifiedFacts;
  forwarding?: Forwarding;
  limits?: ClientLimits;
  theme?: ClientTheme;
  active?: boolean;
}

/** Upsert a client, encrypting its LLM key with the master secret. */
export async function registerClient(
  kv: KVLike,
  input: ClientInput,
  masterSecret: string,
): Promise<ClientRecord> {
  const now = new Date().toISOString();
  const existing = await getClient(kv, input.client_id);
  const record: ClientRecord = {
    client_id: input.client_id,
    business_name: input.business_name,
    provider: input.provider,
    model: input.model,
    encrypted_api_key: await encryptSecret(input.api_key, masterSecret),
    facts: input.facts,
    forwarding: input.forwarding,
    limits: input.limits,
    theme: input.theme,
    active: input.active ?? true,
    created_at: existing?.created_at ?? now,
    updated_at: now,
  };
  await kv.put(clientKey(input.client_id), JSON.stringify(record));
  return record;
}

/** Decrypt a client's LLM key using the master secret. */
export async function decryptClientKey(record: ClientRecord, masterSecret: string): Promise<string> {
  return decryptSecret(record.encrypted_api_key, masterSecret);
}

/** A safe, non-secret view of a client record for admin reads. */
export function sanitizeClient(record: ClientRecord): Omit<ClientRecord, 'encrypted_api_key'> & {
  has_api_key: boolean;
} {
  const { encrypted_api_key, ...rest } = record;
  return { ...rest, has_api_key: typeof encrypted_api_key === 'string' && encrypted_api_key.length > 0 };
}