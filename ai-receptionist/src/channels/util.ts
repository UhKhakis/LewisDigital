// Small shared helpers for the channel connectors (signature comparison and
// Web-Crypto base64/hex). Kept dependency-free and worker-friendly.

/** Constant-time string comparison (length + char diff via OR). */
export function timingSafeEqual(a: string, b: string): boolean {
  const aLen = a.length;
  const bLen = b.length;
  let result = aLen === bLen ? 0 : 1;
  const len = Math.max(aLen, bLen);
  for (let i = 0; i < len; i++) {
    // charCodeAt returns NaN out of range -> 0 in bitwise ops; lengths already
    // differ in that case, so `result` is already non-zero.
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

export function bytesToHex(bytes: Uint8Array): string {
  return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** XML-escape a string for safe TwiML output. */
export function xmlEscape(s: string): string {
  return s.replace(/[<>&'"]/g, (c) =>
    c === '<' ? '&lt;'
      : c === '>' ? '&gt;'
      : c === '&' ? '&amp;'
      : c === "'" ? '&apos;'
      : '&quot;',
  );
}
