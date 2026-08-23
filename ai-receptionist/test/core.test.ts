import { describe, it, expect } from 'vitest';
import { answerQuestion, guardAnswer } from '../src/agent/core';
import { buildSystemPrompt, FORWARD_PHRASE } from '../src/agent/prompt';
import type { LLMCallInput } from '../src/agent/providers';
import type { ClientRecord, LLMResult } from '../src/types';
import { sampleRecord } from './fixtures';

function fakeLLM(reply: { answer: string; grounded: boolean; forward: boolean }) {
  return async (_input: LLMCallInput): Promise<LLMResult> => ({
    text: JSON.stringify(reply),
    usage: { promptTokens: 10, completionTokens: 4 },
  });
}

describe('agent core (honesty guard)', () => {
  it('returns a grounded answer in scope', async () => {
    const reply = await answerQuestion(
      sampleRecord,
      'sk-x',
      'What are your hours?',
      undefined,
      { llm: fakeLLM({ answer: 'We are open Mon–Fri 8 AM–5 PM.', grounded: true, forward: false }) },
    );
    expect(reply.forward).toBe(false);
    expect(reply.answer).toBe('We are open Mon–Fri 8 AM–5 PM.');
  });

  it('forwards when the model sets forward:true', async () => {
    const reply = await answerQuestion(
      sampleRecord,
      'sk-x',
      'How much is an oil change?',
      undefined,
      { llm: fakeLLM({ answer: 'Not sure.', grounded: false, forward: true }) },
    );
    expect(reply.forward).toBe(true);
    expect(reply.answer).toBe(FORWARD_PHRASE);
  });

  it('forwards when grounded is false', async () => {
    const reply = await answerQuestion(sampleRecord, 'sk-x', 'hi', undefined, {
      llm: fakeLLM({ answer: 'We also do engine swaps!', grounded: false, forward: false }),
    });
    expect(reply.forward).toBe(true);
    expect(reply.answer).toBe(FORWARD_PHRASE);
  });

  it('forwards on unparseable LLM output (safe default)', async () => {
    const reply = await answerQuestion(sampleRecord, 'sk-x', 'hi', undefined, {
      llm: async () => ({ text: 'not json at all', usage: { promptTokens: 1, completionTokens: 1 } }),
    });
    expect(reply.forward).toBe(true);
    expect(reply.answer).toBe(FORWARD_PHRASE);
  });

  it('forwards when the LLM call throws (never invent on failure)', async () => {
    const reply = await answerQuestion(sampleRecord, 'sk-x', 'hi', undefined, {
      llm: async () => {
        throw new Error('upstream down');
      },
    });
    expect(reply.forward).toBe(true);
    expect(reply.answer).toBe(FORWARD_PHRASE);
  });

  it('forwards an answer that asserts a price not in the facts', async () => {
    const reply = await answerQuestion(
      sampleRecord,
      'sk-x',
      'How much?',
      undefined,
      { llm: fakeLLM({ answer: 'An oil change is $29.', grounded: true, forward: false }) },
    );
    expect(reply.forward).toBe(true);
  });

  it('forwards an answer that asserts a time when facts have no hours', async () => {
    const noHours: ClientRecord = {
      ...sampleRecord,
      facts: { ...sampleRecord.facts, hours: undefined },
    };
    const reply = await answerQuestion(
      noHours,
      'sk-x',
      'What time do you open?',
      undefined,
      { llm: fakeLLM({ answer: 'We open at 9 AM.', grounded: true, forward: false }) },
    );
    expect(reply.forward).toBe(true);
  });
});

describe('guardAnswer', () => {
  it('flags price hallucination', () => {
    expect(guardAnswer('An oil change is $29.', sampleRecord)).toBe(false);
  });
  it('allows a price when prices are in the facts', () => {
    const withPrices: ClientRecord = {
      ...sampleRecord,
      facts: { ...sampleRecord.facts, prices: ['Oil change $29'] },
    };
    expect(guardAnswer('An oil change is $29.', withPrices)).toBe(true);
  });
  it('allows a safe non-factual answer', () => {
    expect(guardAnswer('You can call us during business hours.', sampleRecord)).toBe(true);
  });
});

describe('buildSystemPrompt', () => {
  it('includes the verified facts and the forward phrase', () => {
    const p = buildSystemPrompt(sampleRecord);
    expect(p).toContain('Bos Garage');
    expect(p).toContain('Mon–Fri: 8 AM–5 PM');
    expect(p).toContain(FORWARD_PHRASE);
    expect(p).toContain('grounded');
  });
});
