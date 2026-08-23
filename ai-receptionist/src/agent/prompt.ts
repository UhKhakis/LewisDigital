// System-prompt construction. This is the HONESTY GUARD at the prompt layer:
// the model may only answer from the client's verified facts, and must emit a
// structured JSON object so we can detect and forward anything ungrounded.

import type { ClientRecord, ChatMessage } from '../types';

export const FORWARD_PHRASE = "I'll have someone get back to you.";

export function buildSystemPrompt(record: ClientRecord): string {
  const f = record.facts;
  const lines: string[] = [];

  lines.push(`You are the friendly automated receptionist for "${f.business_name}".`);
  lines.push('You answer customer questions using ONLY the verified FACTS below.');
  lines.push('');
  lines.push('FACTS:');
  if (f.category) lines.push(`- Category: ${f.category}`);
  if (f.address) lines.push(`- Address: ${f.address}`);
  if (f.phone) lines.push(`- Phone: ${f.phone}`);
  if (f.hours && f.hours.length) lines.push(`- Hours: ${f.hours.join('; ')}`);
  if (f.services && f.services.length) lines.push(`- Services: ${f.services.join(', ')}`);
  if (f.prices && f.prices.length) lines.push(`- Prices: ${f.prices.join('; ')}`);
  if (f.booking?.url) lines.push(`- Booking link: ${f.booking.url}`);
  if (f.booking?.note) lines.push(`- Booking note: ${f.booking.note}`);
  for (const faq of f.faqs ?? []) lines.push(`- FAQ — Q: ${faq.q} A: ${faq.a}`);
  for (const n of f.notes ?? []) lines.push(`- Note: ${n}`);
  if (!f.hours?.length && !f.address && !f.phone && !f.services?.length && !f.prices?.length && !f.faqs?.length) {
    lines.push('- (No facts have been provided yet.)');
  }

  lines.push('');
  lines.push('RULES (non-negotiable):');
  lines.push('1. Answer ONLY from the FACTS above. Never infer, guess, or invent hours, prices, services, addresses, phone numbers, ratings, reviews, or policies.');
  lines.push(`2. If the question cannot be fully answered from the FACTS, set "forward": true and answer with exactly "${FORWARD_PHRASE}".`);
  lines.push('3. If a fact is missing, out of date, or uncertain, do not answer that part — forward it.');
  lines.push('4. Be warm, plain-spoken, and brief. No hype, no urgency, no fake claims.');
  lines.push('5. Reply with a single JSON object only, in this exact shape:');
  lines.push('   {"answer": "<string>", "grounded": <true|false>, "forward": <true|false>}');
  lines.push('   "grounded" must be true ONLY if every claim in "answer" comes directly from the FACTS.');

  return lines.join('\n');
}

export function buildUserMessage(message: string, history?: ChatMessage[]): string {
  // The caller passes `history` separately to the provider; here we frame the
  // latest customer turn clearly.
  void history;
  return `Customer message: ${message}`;
}