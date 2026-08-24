// Shared test fixtures — a deterministic client record with VERIFIED facts.

import type { ClientRecord } from '../src/types';
import type { ClientInput, ChannelInput } from '../src/store/clientStore';

export const TEST_MASTER_SECRET = 'test-master-secret-0123456789abcdef';
export const TEST_ADMIN_TOKEN = 'test-admin-token';

export const sampleFacts = {
  business_name: 'Bos Garage',
  category: 'Auto repair',
  address: '123 Main St, Bryan, TX',
  phone: '(979) 555-0123',
  hours: ['Mon–Fri: 8 AM–5 PM', 'Sat: 9 AM–12 PM'],
  services: ['Oil changes', 'Brake repair', 'Diagnostics'],
};

export const sampleInput: ClientInput = {
  client_id: 'bos-garage',
  business_name: 'Bos Garage',
  provider: 'stub',
  model: 'stub',
  api_key: 'sk-test-client-key-123',
  facts: sampleFacts,
  active: true,
};

export const sampleRecord: ClientRecord = {
  client_id: 'bos-garage',
  business_name: 'Bos Garage',
  provider: 'stub',
  model: 'stub',
  encrypted_api_key: 'encrypted-placeholder-not-a-real-key',
  facts: sampleFacts,
  active: true,
  created_at: '2026-08-23T00:00:00.000Z',
  updated_at: '2026-08-23T00:00:00.000Z',
};

/** Channel wiring used by the channel-handler tests. */
export const sampleChannels: ChannelInput = {
  twilio_phone_number: '+19795550123',
  meta_page_id: '112233445566',
  meta_instagram_id: '17841400000000001',
  meta_page_access_token: 'EAAG-secret-page-token',
};
