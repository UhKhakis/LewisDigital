// Lewis Digital AI Receptionist — Cloudflare Worker entry point.
// A thin router over the shared agent core. Routes:
//   GET  /                health check
//   GET  /widget.js       embeddable chat widget (brand-agnostic)
//   GET  /widget.css      optional standalone widget stylesheet
//   POST /chat            website chat channel
//   /admin/*              per-client config + ledger (ADMIN_TOKEN protected)
//   /channels/{sms,voice,social}  scaffolded channel connectors

import { WIDGET_JS, WIDGET_CSS } from './widget/constants';
import { handleChat } from './routes/chat';
import { handleAdmin } from './routes/admin';
import { handleSms, handleVoice, handleSocial } from './routes/channels';
import { json, corsHeaders } from './http';
import type { Env } from './env';

const worker: ExportedHandler<Env> = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'GET' && (path === '/' || path === '/health')) {
      return json({ ok: true, service: 'lewis-digital-receptionist' });
    }
    if (request.method === 'GET' && path === '/widget.js') {
      return new Response(WIDGET_JS, {
        headers: {
          'content-type': 'text/javascript; charset=utf-8',
          'cache-control': 'public, max-age=300',
          ...corsHeaders(),
        },
      });
    }
    if (request.method === 'GET' && path === '/widget.css') {
      return new Response(WIDGET_CSS, {
        headers: {
          'content-type': 'text/css; charset=utf-8',
          'cache-control': 'public, max-age=300',
          ...corsHeaders(),
        },
      });
    }
    if (path === '/chat') return handleChat(request, env);
    if (path.startsWith('/admin/')) return handleAdmin(request, env, url);
    if (path === '/channels/sms') return handleSms(request, env);
    if (path === '/channels/voice') return handleVoice(request, env);
    if (path === '/channels/social') return handleSocial(request, env);

    return json({ error: 'Not found' }, 404);
  },
};

export default worker;
