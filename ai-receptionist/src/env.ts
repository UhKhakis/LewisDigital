// Environment bindings + config helpers. All secrets are read from `env`
// bindings (Cloudflare secrets) — nothing is hardcoded or committed.

export interface Env {
  RECEPTIONIST_KV: KVNamespace;
  /** Optional D1 database — reserved for an atomic metering upgrade path. */
  RECEPTIONIST_DB?: D1Database;
  /** Decryption key for client LLM keys at rest (AES-256-GCM). */
  RECEPTIONIST_MASTER_SECRET: string;
  /** Bearer token required to call /admin/* routes. */
  ADMIN_TOKEN: string;
  /** Optional webhook that receives forwarded (unanswerable) messages. */
  FORWARD_WEBHOOK_URL?: string;

  // --- Twilio (SMS + voice channels) ---------------------------------------
  TWILIO_ACCOUNT_SID?: string;
  /** Signs/verifies inbound webhooks and authenticates outbound API calls. */
  TWILIO_AUTH_TOKEN?: string;
  /** Fallback outbound From number (E.164) when a client has no own number. */
  TWILIO_PHONE_NUMBER?: string;
  /** Optional global Messaging Service SID for outbound SMS. */
  TWILIO_MESSAGING_SERVICE_SID?: string;
  /** Fallback outbound caller ID for voice callbacks. */
  VOICE_FROM_NUMBER?: string;

  // --- Meta (social DM channel) --------------------------------------------
  META_APP_ID?: string;
  /** Signs/verifies the Meta webhook (X-Hub-Signature-256). */
  META_APP_SECRET?: string;
  /** Fallback page access token (a per-client token in KV takes precedence). */
  META_PAGE_ACCESS_TOKEN?: string;
  /** Matches hub.verify_token on webhook subscription. */
  META_WEBHOOK_VERIFY_TOKEN?: string;
}

export function getMasterSecret(env: Env): string {
  const s = env.RECEPTIONIST_MASTER_SECRET;
  if (!s) {
    throw new Error(
      'RECEPTIONIST_MASTER_SECRET is not set. Set it via `wrangler secret put RECEPTIONIST_MASTER_SECRET` ' +
        '(production) or in .dev.vars (local `wrangler dev`).',
    );
  }
  return s;
}

export function isAdminAuthorized(env: Env, authHeader: string | null): boolean {
  if (!env.ADMIN_TOKEN) return false;
  return authHeader === `Bearer ${env.ADMIN_TOKEN}`;
}