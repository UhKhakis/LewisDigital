// Tests for the SMS, voice, and social-DM channel connectors. They use the
// network-free `stub` provider, an in-memory KV, and no real Twilio/Meta creds
// (signature verification is skipped when the relevant secret is absent, which
// is exactly the documented local-dev behaviour).

import { describe, it, expect, vi, afterEach } from 'vitest';
import { MemoryKV } from './kvMock';
import { handleSms, handleVoice, handleSocial } from '../src/routes/channels';
import { registerClient } from '../src/store/clientStore';
import { getLedger } from '../src/store/ledger';
import { readForwardQueue } from '../src/store/forward';
import { verifyTwilioSignature, sendTwilioSms } from '../src/channels/twilio';
import { verifyMetaSignature, sendMetaMessage } from '../src/channels/meta';
import type { Env } from '../src/env';
import { TEST_MASTER_SECRET, sampleInput, sampleChannels } from './fixtures';

function makeEnv(kv: MemoryKV, overrides: Partial<Env> = {}): Env {
  return {
    RECEPTIONIST_KV: kv,
    RECEPTIONIST_MASTER_SECRET: TEST_MASTER_SECRET,
    ADMIN_TOKEN: 'admin',
    ...overrides,
  } as unknown as Env;
}

function formPost(url: string, fields: Record<string, string>): Request {
  return new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fields).toString(),
  });
}

function jsonPost(url: string, body: unknown): Request {
  return new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('Twilio signature verification', () => {
  it('skips when no auth token is configured', async () => {
    expect(await verifyTwilioSignature('http://x/sms', { Body: 'hi' }, '', null)).toBe(true);
  });

  it('rejects a missing signature when a token is configured', async () => {
    expect(await verifyTwilioSignature('http://x/sms', { Body: 'hi' }, 'secret', null)).toBe(false);
  });

  it('accepts a correctly-signed request (known answer)', async () => {
    const url = 'https://example.com/channels/sms';
    const params = { To: '+19795550123', From: '+15551234567', Body: 'Hi there' };
    const expected = 'iHh7Wb2Gm4LpgAwnQyIoNULbbJE=';
    expect(await verifyTwilioSignature(url, params, 'my-auth-token', expected)).toBe(true);
    expect(await verifyTwilioSignature(url, params, 'my-auth-token', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')).toBe(false);
  });
});

describe('Meta signature verification', () => {
  it('skips when no app secret is configured', async () => {
    expect(await verifyMetaSignature('{}', '', null)).toBe(true);
  });

  it('accepts a correctly-signed body (known answer)', async () => {
    const expected = 'ae958d6f00b134dd32b95a9a76bedaaeb068c0949769358355023f7d1a0c580b';
    expect(await verifyMetaSignature('{"object":"page"}', 'app-secret', `sha256=${expected}`)).toBe(true);
  });
});

describe('handleSms', () => {
  it('answers an in-scope SMS via a TwiML <Message> fallback (no outbound creds)', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const env = makeEnv(kv);

    const res = await handleSms(
      formPost('http://localhost/channels/sms', {
        From: '+15551234567',
        To: '+19795550123',
        Body: 'What are your hours?',
      }),
      env,
    );
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/xml');
    const body = await res.text();
    expect(body).toContain('<Message>');
    expect(body).toContain('hours');

    const ledger = await getLedger(kv, 'bos-garage');
    expect(ledger.requests).toBe(1);
  });

  it('replies with the forward fallback and queues an out-of-scope message', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const env = makeEnv(kv);

    const res = await handleSms(
      formPost('http://localhost/channels/sms', {
        From: '+15551234567',
        To: '+19795550123',
        Body: 'How much is an oil change?',
      }),
      env,
    );
    const body = await res.text();
    expect(body).toContain('get back to you.');
    expect(await readForwardQueue(kv, 'bos-garage')).toContain('How much is an oil change?');
  });

  it('ignores an unknown Twilio number (acks silently)', async () => {
    const kv = new MemoryKV();
    const env = makeEnv(kv);
    const res = await handleSms(
      formPost('http://localhost/channels/sms', {
        From: '+15551234567',
        To: '+19998887777',
        Body: 'Hello?',
      }),
      env,
    );
    expect(await res.text()).toBe('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
  });

  it('uses the Messages API when Twilio creds are present', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const fetchMock = vi.fn(async (_input: unknown, _init?: unknown) => new Response('', { status: 201 }));
    vi.stubGlobal('fetch', fetchMock);
    const env = makeEnv(kv, { TWILIO_ACCOUNT_SID: 'AC123', TWILIO_AUTH_TOKEN: 'tok' });

    // A valid Twilio signature for this URL + params + token 'tok'.
    const res = await handleSms(
      new Request('http://localhost/channels/sms', {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'x-twilio-signature': 'Jrj5QLkP5Kgu9fhjDiUkMeo/1OQ=',
        },
        body: new URLSearchParams({ From: '+15551234567', To: '+19795550123', Body: 'What are your hours?' }).toString(),
      }),
      env,
    );
    expect(await res.text()).toContain('<Response></Response>');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { body?: unknown }];
    expect(url).toContain('api.twilio.com');
    expect(url).toContain('/Accounts/AC123/Messages.json');
    expect(String(init.body)).toContain('To=%2B15551234567');
  });
});

describe('handleVoice', () => {
  it('greets with a <Gather> on the initial POST', async () => {
    const kv = new MemoryKV();
    const env = makeEnv(kv);
    const res = await handleVoice(
      formPost('http://localhost/channels/voice', { From: '+15551234567', To: '+19795550123' }),
      env,
    );
    const body = await res.text();
    expect(body).toContain('<Gather input="speech"');
    expect(body).toContain('step=answer');
  });

  it('answers a spoken question via the shared core and ledges it', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const env = makeEnv(kv);

    const res = await handleVoice(
      formPost('http://localhost/channels/voice?step=answer', {
        From: '+15551234567',
        To: '+19795550123',
        CallSid: 'CA123',
        SpeechResult: 'What are your hours?',
      }),
      env,
    );
    const body = await res.text();
    expect(body).toContain('<Say>');
    expect(body).toContain('hours');
    expect(await getLedger(kv, 'bos-garage')).toMatchObject({ requests: 1 });
  });

  it('forwards an out-of-scope call by collecting a callback number', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const env = makeEnv(kv);

    const res = await handleVoice(
      formPost('http://localhost/channels/voice?step=answer', {
        From: '+15551234567',
        To: '+19795550123',
        CallSid: 'CA123',
        SpeechResult: 'How much does an oil change cost?',
      }),
      env,
    );
    const body = await res.text();
    expect(body).toContain('get back to you.');
    expect(body).toContain('<Gather input="speech"');
    expect(body).toContain('step=callback');
  });

  it('records a callback request in the forward queue', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const env = makeEnv(kv);

    await handleVoice(
      formPost('http://localhost/channels/voice?step=callback', {
        From: '+15551234567',
        To: '+19795550123',
        CallSid: 'CA123',
        SpeechResult: 'Jake at 555 0123',
      }),
      env,
    );
    expect(await readForwardQueue(kv, 'bos-garage')).toContain('Voice callback requested: Jake at 555 0123');
  });
});

describe('handleSocial', () => {
  it('verifies the webhook with hub.challenge', async () => {
    const kv = new MemoryKV();
    const env = makeEnv(kv, { META_WEBHOOK_VERIFY_TOKEN: 'verify-me' });
    const res = await handleSocial(
      new Request('http://localhost/channels/social?hub.mode=subscribe&hub.verify_token=verify-me&hub.challenge=42'),
      env,
    );
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('42');
  });

  it('rejects a bad verify token', async () => {
    const kv = new MemoryKV();
    const env = makeEnv(kv, { META_WEBHOOK_VERIFY_TOKEN: 'verify-me' });
    const res = await handleSocial(
      new Request('http://localhost/channels/social?hub.mode=subscribe&hub.verify_token=wrong&hub.challenge=42'),
      env,
    );
    expect(res.status).toBe(403);
  });

  it('answers a Messenger DM via the Send API and ledges it', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const fetchMock = vi.fn(async (_input: unknown, _init?: unknown) => new Response('{"message_id":"mid.1"}', { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    const env = makeEnv(kv, { META_PAGE_ACCESS_TOKEN: 'global-token' });

    const res = await handleSocial(
      jsonPost('http://localhost/channels/social', {
        object: 'page',
        entry: [
          {
            id: '112233445566',
            messaging: [{ sender: { id: 'psid-1' }, message: { text: 'What are your hours?' } }],
          },
        ],
      }),
      env,
    );
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('EVENT_RECEIVED');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, { body?: unknown }];
    expect(url).toContain('graph.facebook.com');
    expect(url).toContain('/me/messages');
    expect(JSON.parse(String(init.body))).toMatchObject({
      recipient: { id: 'psid-1' },
      message: { text: expect.stringContaining('hours') },
    });
    expect(await getLedger(kv, 'bos-garage')).toMatchObject({ requests: 1 });
  });

  it('queues the reply when no Meta token is available', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const env = makeEnv(kv); // no META_PAGE_ACCESS_TOKEN

    const res = await handleSocial(
      jsonPost('http://localhost/channels/social', {
        object: 'page',
        entry: [
          {
            id: '112233445566',
            messaging: [{ sender: { id: 'psid-1' }, message: { text: 'What are your hours?' } }],
          },
        ],
      }),
      env,
    );
    expect(res.status).toBe(200);
    const queue = await readForwardQueue(kv, 'bos-garage');
    expect(queue).toContain('reply queued');
    expect(queue).toContain('delivery_pending');
  });

  it('ignores our own echoed messages', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);
    const env = makeEnv(kv, { META_PAGE_ACCESS_TOKEN: 't' });

    await handleSocial(
      jsonPost('http://localhost/channels/social', {
        object: 'page',
        entry: [
          {
            id: '112233445566',
            messaging: [{ sender: { id: 'psid-1' }, message: { text: 'echo', is_echo: true } }],
          },
        ],
      }),
      env,
    );
    expect(await getLedger(kv, 'bos-garage')).toMatchObject({ requests: 0 });
  });
});

describe('sendTwilioSms / sendMetaMessage', () => {
  it('sendTwilioSms returns false without creds', async () => {
    expect(await sendTwilioSms(makeEnv(new MemoryKV()), { to: '+15551234567', body: 'hi' })).toBe(false);
  });

  it('sendMetaMessage returns false without a token', async () => {
    expect(await sendMetaMessage('', 'psid', 'hi')).toBe(false);
  });
});
