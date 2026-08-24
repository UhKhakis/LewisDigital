// Meta (Messenger / Instagram DM) helpers: webhook signature verification and
// the Send API reply. Secrets come from env (Cloudflare secrets) — never
// hardcoded. See README for the exact env var names and Meta app setup steps.

import { bytesToHex, timingSafeEqual } from './util';

/** Update to the current Graph API version when Meta deprecates this one. */
export const GRAPH_VERSION = 'v21.0';
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`;

// --- Signature verification -------------------------------------------------

/**
 * Verify the Meta webhook signature (X-Hub-Signature-256, `sha256=<hex>` of the
 * raw body using the app secret). When no app secret is configured (local dev /
 * tests) verification is SKIPPED and this returns true. See README.
 */
export async function verifyMetaSignature(
  rawBody: string,
  appSecret: string,
  signatureHeader: string | null,
): Promise<boolean> {
  if (!appSecret) return true;
  if (!signatureHeader) return false;

  const expected = signatureHeader.replace(/^sha256=/, '').toLowerCase();
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(appSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(rawBody));
  return timingSafeEqual(bytesToHex(new Uint8Array(sig)), expected);
}

// --- Send API ---------------------------------------------------------------

/**
 * Send a message via the Meta Send API (`POST /me/messages`). Works for both
 * Messenger (`recipient.id` = PSID) and Instagram (`recipient.id` = IGSID) with
 * the page's access token. Returns false on missing/invalid token or failure.
 */
export async function sendMetaMessage(
  pageAccessToken: string,
  recipientId: string,
  text: string,
): Promise<boolean> {
  if (!pageAccessToken || !recipientId || !text) return false;
  try {
    const res = await fetch(
      `${GRAPH_BASE}/me/messages?access_token=${encodeURIComponent(pageAccessToken)}`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          recipient: { id: recipientId },
          message: { text },
          messaging_type: 'RESPONSE',
        }),
      },
    );
    return res.ok;
  } catch {
    return false;
  }
}
