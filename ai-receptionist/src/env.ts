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