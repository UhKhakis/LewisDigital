// Shared agent core — the ONE brain all four channels (website chat, SMS,
// voice, social DMs) call into.
//
// Honesty guard is layered:
//   1. Prompt layer: strict system prompt that only permits facts.
//   2. Structured output: the model must return {"answer","grounded","forward"}.
//   3. Safe default: any parse failure, LLM error, ungrounded flag, or forward
//      flag results in "I'll have someone get back to you." — never an invented
//      answer.
//   4. Deterministic backstop (guardAnswer): an answer asserting a price or
//      time that isn't in the facts is treated as ungrounded and forwarded.

import { callLLM } from './providers';
import type { LLMCallInput } from './providers';
import { buildSystemPrompt, buildUserMessage, FORWARD_PHRASE } from './prompt';
import type { ClientRecord, AgentReply, LLMResult, ChatMessage } from '../types';

export interface CoreDeps {
  /** Injectable for tests — defaults to the real provider adapters. */
  llm?: (input: LLMCallInput) => Promise<LLMResult>;
}

interface ParsedAgent {
  answer: string;
  grounded: boolean;
  forward: boolean;
}

export async function answerQuestion(
  record: ClientRecord,
  apiKey: string,
  message: string,
  history?: ChatMessage[],
  deps: CoreDeps = {},
): Promise<AgentReply> {
  const llm = deps.llm ?? callLLM;
  const systemPrompt = buildSystemPrompt(record);
  const userMessage = buildUserMessage(message, history);

  let result: LLMResult;
  try {
    result = await llm({
      provider: record.provider,
      model: record.model,
      apiKey,
      systemPrompt,
      userMessage,
      history,
      jsonMode: true,
    });
  } catch {
    // Never invent on failure — escalate to a human.
    return {
      answer: FORWARD_PHRASE,
      forward: true,
      grounded: false,
      usage: { promptTokens: 0, completionTokens: 0 },
    };
  }

  const parsed = parseAgentJson(result.text);
  if (!parsed || parsed.forward === true || parsed.grounded !== true) {
    return { answer: FORWARD_PHRASE, forward: true, grounded: false, usage: result.usage };
  }

  const answer = cleanAnswer(parsed.answer);
  if (!answer || !guardAnswer(answer, record)) {
    return { answer: FORWARD_PHRASE, forward: true, grounded: false, usage: result.usage };
  }

  return { answer, forward: false, grounded: true, usage: result.usage };
}

function parseAgentJson(text: string): ParsedAgent | null {
  if (!text) return null;
  let json = text.trim();
  const fence = json.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) json = fence[1].trim();
  const start = json.indexOf('{');
  const end = json.lastIndexOf('}');
  if (start >= 0 && end > start) json = json.slice(start, end + 1);
  try {
    const obj = JSON.parse(json) as {
      answer?: unknown;
      grounded?: unknown;
      forward?: unknown;
    };
    return {
      answer: typeof obj.answer === 'string' ? obj.answer : '',
      grounded: obj.grounded === true,
      forward: obj.forward === true || obj.forward === 'true',
    };
  } catch {
    return null;
  }
}

function cleanAnswer(answer: string): string {
  const v = answer.trim();
  if (v.toLowerCase() === FORWARD_PHRASE.toLowerCase()) return FORWARD_PHRASE;
  return v;
}

/**
 * Deterministic backstop against the two most common hallucination types.
 * Returns false (unsafe → forward) if the answer asserts a price or a time
 * that has no basis in the client's facts.
 */
export function guardAnswer(answer: string, record: ClientRecord): boolean {
  const a = answer.toLowerCase();
  const factsText = factsToText(record).toLowerCase();

  const hasPriceInAnswer = /\$\s?\d/.test(a);
  const hasPriceInFacts = /\$\s?\d/.test(factsText);
  if (hasPriceInAnswer && !hasPriceInFacts) return false;

  const hasTimeInAnswer =
    /\b\d{1,2}(:\d{2})?\s?(am|pm)\b/.test(a) || /\b\d{1,2}\s?o'?clock\b/.test(a);
  const hasHoursInFacts = (record.facts.hours?.length ?? 0) > 0;
  if (hasTimeInAnswer && !hasHoursInFacts) return false;

  return true;
}

export function factsToText(record: ClientRecord): string {
  const f = record.facts;
  const parts: string[] = [];
  if (f.business_name) parts.push(f.business_name);
  if (f.category) parts.push(f.category);
  if (f.address) parts.push(f.address);
  if (f.phone) parts.push(f.phone);
  if (f.hours?.length) parts.push(f.hours.join(' '));
  if (f.services?.length) parts.push(f.services.join(' '));
  if (f.prices?.length) parts.push(f.prices.join(' '));
  if (f.booking?.url) parts.push(f.booking.url);
  if (f.booking?.note) parts.push(f.booking.note);
  for (const faq of f.faqs ?? []) parts.push(faq.q, faq.a);
  for (const n of f.notes ?? []) parts.push(n);
  return parts.join(' ');
}