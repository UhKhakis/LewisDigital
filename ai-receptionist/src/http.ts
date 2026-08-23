// Small HTTP helpers shared across route modules.

export function json(
  data: unknown,
  status = 200,
  extraHeaders: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...extraHeaders },
  });
}

/** Public, cross-origin CORS for the chat widget + widget assets. */
export function corsHeaders(): Record<string, string> {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type, authorization',
  };
}

/** Input validation helpers. */
const CLIENT_ID_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;

export function validateClientId(id: unknown): string | null {
  if (typeof id !== 'string') return null;
  const v = id.trim().toLowerCase();
  return CLIENT_ID_RE.test(v) ? v : null;
}

export function validateMessage(message: unknown): string | null {
  if (typeof message !== 'string') return null;
  const v = message.trim();
  if (v.length < 1 || v.length > 2000) return null;
  return v;
}