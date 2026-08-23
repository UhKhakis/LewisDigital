// LLM provider adapters. Each client brings their OWN API key (Model A — we
// never pay for client LLM usage). The key is used SERVER-SIDE only and is
// never exposed to any browser.
//
// All adapters return a normalized { text, usage } result. Token counts come
// from each provider's usage metadata so the ledger can meter real usage.

import type { ProviderName, LLMResult, ChatMessage } from '../types';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';

export interface LLMCallInput {
  provider: ProviderName;
  model: string;
  apiKey: string;
  systemPrompt: string;
  userMessage: string;
  history?: ChatMessage[];
  /** Request a JSON-only response where the provider supports it. */
  jsonMode?: boolean;
}

export async function callLLM(input: LLMCallInput): Promise<LLMResult> {
  switch (input.provider) {
    case 'openai':
      return openai(input);
    case 'anthropic':
      return anthropic(input);
    case 'gemini':
      return gemini(input);
    case 'stub':
      return stub(input);
    default: {
      const exhaustive: never = input.provider;
      throw new Error(`Unsupported provider: ${String(exhaustive)}`);
    }
  }
}

async function safeText(res: Response): Promise<string> {
  try {
    return (await res.text()).slice(0, 500);
  } catch {
    return '';
  }
}

async function openai(i: LLMCallInput): Promise<LLMResult> {
  const messages = [
    { role: 'system', content: i.systemPrompt },
    ...(i.history ?? []).map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: i.userMessage },
  ];
  const body: Record<string, unknown> = {
    model: i.model,
    messages,
    temperature: 0,
    max_tokens: 500,
  };
  if (i.jsonMode) body.response_format = { type: 'json_object' };

  const res = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${i.apiKey}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`OpenAI API error ${res.status}: ${await safeText(res)}`);
  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
    usage?: { prompt_tokens?: number; completion_tokens?: number };
  };
  const text = data.choices?.[0]?.message?.content ?? '';
  return {
    text,
    usage: {
      promptTokens: data.usage?.prompt_tokens ?? 0,
      completionTokens: data.usage?.completion_tokens ?? 0,
    },
  };
}

async function anthropic(i: LLMCallInput): Promise<LLMResult> {
  const messages = [
    ...(i.history ?? []).map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: i.userMessage },
  ];
  const body = {
    model: i.model,
    max_tokens: 500,
    temperature: 0,
    system: i.systemPrompt,
    messages,
  };
  const res = await fetch(ANTHROPIC_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': i.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Anthropic API error ${res.status}: ${await safeText(res)}`);
  const data = (await res.json()) as {
    content?: { type: string; text?: string }[];
    usage?: { input_tokens?: number; output_tokens?: number };
  };
  const text = (data.content ?? [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text ?? '')
    .join('\n');
  return {
    text,
    usage: {
      promptTokens: data.usage?.input_tokens ?? 0,
      completionTokens: data.usage?.output_tokens ?? 0,
    },
  };
}

async function gemini(i: LLMCallInput): Promise<LLMResult> {
  const url =
    'https://generativelanguage.googleapis.com/v1beta/models/' +
    encodeURIComponent(i.model) +
    ':generateContent?key=' +
    encodeURIComponent(i.apiKey);
  const contents = [
    ...(i.history ?? []).map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    })),
    { role: 'user', parts: [{ text: i.userMessage }] },
  ];
  const body: Record<string, unknown> = {
    system_instruction: { parts: [{ text: i.systemPrompt }] },
    contents,
    generationConfig: {
      temperature: 0,
      maxOutputTokens: 500,
      ...(i.jsonMode ? { responseMimeType: 'application/json' } : {}),
    },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Gemini API error ${res.status}: ${await safeText(res)}`);
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
    usageMetadata?: { promptTokenCount?: number; candidatesTokenCount?: number };
  };
  const text =
    data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('\n') ?? '';
  return {
    text,
    usage: {
      promptTokens: data.usageMetadata?.promptTokenCount ?? 0,
      completionTokens: data.usageMetadata?.candidatesTokenCount ?? 0,
    },
  };
}

/**
 * Deterministic, network-free provider for local dev and tests. It is a
 * stand-in that mirrors the guard contract (grounded / forward) using simple
 * keyword detection against the customer message. Real deployments use a
 * client's own OpenAI/Anthropic/Gemini key.
 */
async function stub(i: LLMCallInput): Promise<LLMResult> {
  const msg = i.userMessage.toLowerCase();
  const grounded = (answer: string) => ({ answer, grounded: true, forward: false });
  const forward = () => ({ answer: "I'll have someone get back to you.", grounded: false, forward: true });

  let obj: { answer: string; grounded: boolean; forward: boolean };
  if (/\b(hours|open|close|when are you|what time)\b/.test(msg)) {
    obj = grounded('Our hours are listed in our details — please call to confirm today.');
  } else if (/\b(address|where|located|location|directions)\b/.test(msg)) {
    obj = grounded('You can find our address and directions on our website or Google listing.');
  } else if (/\b(phone|number|call|contact)\b/.test(msg)) {
    obj = grounded('Our phone number is on our website and Google listing — feel free to call.');
  } else if (/\b(services|do you|offer|provide)\b/.test(msg)) {
    obj = grounded('Our services are listed on our website and Google listing.');
  } else {
    obj = forward();
  }

  const text = JSON.stringify(obj);
  return {
    text,
    usage: {
      promptTokens: estimateTokens(i.systemPrompt + i.userMessage),
      completionTokens: estimateTokens(text),
    },
  };
}

function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}