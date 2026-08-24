// Per-client record storage in Cloudflare KV.
// Key: `client:<client_id>` -> JSON ClientRecord.
// The client LLM key (and the Meta page access token) are stored ENCRYPTED
// (see crypto.ts); the raw secrets are never written to KV or returned to any
// browser.
//
// Reverse-index keys (written on register, removed on delete) let inbound
// channel webhooks resolve a phone number / page id back to a client in O(1):
//   twilio:<digits>   -> client_id   (from channels.twilio_phone_number)
//   meta_page:<id>    -> client_id   (from channels.meta_page_id)
//   meta_ig:<id>      -> client_id   (from channels.meta_instagram_id)

import type {
  KVLike,
  ClientRecord,
  VerifiedFacts,
  Forwarding,
  ClientLimits,
  ClientTheme,
  ChannelConfig,
} from '../types';
import { encryptSecret, decryptSecret } from './crypto';
import { deleteLedger } from './ledger';
import { deleteForwardQueue } from './forward';

const PREFIX = 'client:';
const TWILIO_IDX = 'twilio:';
const META_PAGE_IDX = 'meta_page:';
const META_IG_IDX = 'meta_ig:';

function clientKey(clientId: string): string {
  return `${PREFIX}${clientId}`;
}

/** Normalize any phone number to a bare digit string for reverse lookup. */
export function normalizePhone(number: string): string {
  return number.replace(/\D/g, '');
}

function twilioIndexKey(number: string): string {
  return `${TWILIO_IDX}${normalizePhone(number)}`;
}
function metaPageIndexKey(pageId: string): string {
  return `${META_PAGE_IDX}${pageId}`;
}
function metaIgIndexKey(igId: string): string {
  return `${META_IG_IDX}${igId}`;
}

export async function getClient(kv: KVLike, clientId: string): Promise<ClientRecord | null> {
  const raw = await kv.get(clientKey(clientId), 'json');
  return (raw as ClientRecord | null) ?? null;
}

async function getByIndex(kv: KVLike, indexKey: string): Promise<ClientRecord | null> {
  const id = await kv.get(indexKey, 'text');
  if (typeof id !== 'string' || !id) return null;
  return getClient(kv, id);
}

/** Resolve a client from the Twilio number an SMS/call arrived at. */
export async function findClientByTwilio(kv: KVLike, number: string): Promise<ClientRecord | null> {
  return getByIndex(kv, twilioIndexKey(number));
}

/** Resolve a client from a Meta page ID (Messenger DM). */
export async function findClientByMetaPage(kv: KVLike, pageId: string): Promise<ClientRecord | null> {
  return getByIndex(kv, metaPageIndexKey(pageId));
}

/** Resolve a client from an Instagram business account ID (Instagram DM). */
export async function findClientByMetaIg(kv: KVLike, igId: string): Promise<ClientRecord | null> {
  return getByIndex(kv, metaIgIndexKey(igId));
}

/**
 * Delete a client AND everything attached to it — the encrypted record, the
 * usage ledger, the forward queue (including every timestamped copy), and the
 * reverse-index keys. Idempotent; safe to call for a client that no longer
 * exists.
 */
export async function deleteClient(kv: KVLike, clientId: string): Promise<void> {
  const record = await getClient(kv, clientId);
  const keys: string[] = [clientKey(clientId)];

  if (record?.channels?.twilio_phone_number) {
    keys.push(twilioIndexKey(record.channels.twilio_phone_number));
  }
  if (record?.channels?.meta_page_id) {
    keys.push(metaPageIndexKey(record.channels.meta_page_id));
  }
  if (record?.channels?.meta_instagram_id) {
    keys.push(metaIgIndexKey(record.channels.meta_instagram_id));
  }

  await Promise.all(keys.map((k) => kv.delete(k)));
  // Ledger + forward queue (incl. `forward_queue:<id>:<ts>` copies) live in
  // their own modules so each owns its key format.
  await deleteLedger(kv, clientId);
  await deleteForwardQueue(kv, clientId);
}

/** A client record as submitted via the admin route (contains PLAINTEXT secrets). */
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
  channels?: ChannelInput;
  active?: boolean;
}

/** Channel wiring as submitted via the admin route (page token is PLAINTEXT). */
export interface ChannelInput {
  twilio_phone_number?: string;
  twilio_messaging_service_sid?: string;
  meta_page_id?: string;
  meta_instagram_id?: string;
  /** Plaintext Meta page access token — encrypted at rest. */
  meta_page_access_token?: string;
}

/** Upsert a client, encrypting its LLM key (and page token) with the master secret. */
export async function registerClient(
  kv: KVLike,
  input: ClientInput,
  masterSecret: string,
): Promise<ClientRecord> {
  const now = new Date().toISOString();
  const existing = await getClient(kv, input.client_id);

  // Clear any stale reverse-index entries before writing new ones (e.g. the
  // client's phone number or page changed).
  if (existing?.channels) {
    if (existing.channels.twilio_phone_number) {
      await kv.delete(twilioIndexKey(existing.channels.twilio_phone_number));
    }
    if (existing.channels.meta_page_id) {
      await kv.delete(metaPageIndexKey(existing.channels.meta_page_id));
    }
    if (existing.channels.meta_instagram_id) {
      await kv.delete(metaIgIndexKey(existing.channels.meta_instagram_id));
    }
  }

  let encryptedPageToken: string | undefined;
  if (input.channels?.meta_page_access_token) {
    encryptedPageToken = await encryptSecret(input.channels.meta_page_access_token, masterSecret);
  } else if (existing?.channels?.meta_page_access_token) {
    // No new token supplied — preserve the existing encrypted one on update.
    encryptedPageToken = existing.channels.meta_page_access_token;
  }

  const channels: ChannelConfig | undefined = input.channels
    ? {
        twilio_phone_number: input.channels.twilio_phone_number,
        twilio_messaging_service_sid: input.channels.twilio_messaging_service_sid,
        meta_page_id: input.channels.meta_page_id,
        meta_instagram_id: input.channels.meta_instagram_id,
        meta_page_access_token: encryptedPageToken,
      }
    : undefined;

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
    channels,
    active: input.active ?? true,
    created_at: existing?.created_at ?? now,
    updated_at: now,
  };
  await kv.put(clientKey(input.client_id), JSON.stringify(record));

  // Maintain reverse-index keys for inbound channel webhooks.
  if (channels?.twilio_phone_number) {
    await kv.put(twilioIndexKey(channels.twilio_phone_number), input.client_id);
  }
  if (channels?.meta_page_id) {
    await kv.put(metaPageIndexKey(channels.meta_page_id), input.client_id);
  }
  if (channels?.meta_instagram_id) {
    await kv.put(metaIgIndexKey(channels.meta_instagram_id), input.client_id);
  }

  return record;
}

/** Decrypt a client's LLM key using the master secret. */
export async function decryptClientKey(record: ClientRecord, masterSecret: string): Promise<string> {
  return decryptSecret(record.encrypted_api_key, masterSecret);
}

/** Decrypt a client's Meta page access token (null when not configured). */
export async function decryptMetaPageToken(
  record: ClientRecord,
  masterSecret: string,
): Promise<string | null> {
  const token = record.channels?.meta_page_access_token;
  if (!token) return null;
  return decryptSecret(token, masterSecret);
}

/** A safe, non-secret view of a client record for admin reads. */
export function sanitizeClient(record: ClientRecord): Omit<ClientRecord, 'encrypted_api_key' | 'channels'> & {
  has_api_key: boolean;
  channels?: Omit<ChannelConfig, 'meta_page_access_token'> & { has_meta_page_access_token: boolean };
} {
  const { encrypted_api_key, channels, ...rest } = record;
  const safeChannels = channels
    ? {
        twilio_phone_number: channels.twilio_phone_number,
        twilio_messaging_service_sid: channels.twilio_messaging_service_sid,
        meta_page_id: channels.meta_page_id,
        meta_instagram_id: channels.meta_instagram_id,
        has_meta_page_access_token:
          typeof channels.meta_page_access_token === 'string' && channels.meta_page_access_token.length > 0,
      }
    : undefined;
  return {
    ...rest,
    has_api_key: typeof encrypted_api_key === 'string' && encrypted_api_key.length > 0,
    channels: safeChannels,
  };
}
