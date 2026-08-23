/**
 * Lewis Digital AI Receptionist — chat widget (embed script).
 *
 * Brand-agnostic by default: a neutral slate/white theme. The client's OWN
 * brand colors are applied per-client via config (never a hardcoded vendor
 * palette — and never Lewis Digital gold on a client site).
 *
 * Embed on a client's site:
 *   <script src="https://<worker-host>/widget.js"
 *           data-client-id="<client_id>"
 *           data-primary="#0b3d2e"
 *           data-title="Chat with us"
 *           async></script>
 *
 * Config is read from data-* attributes on the script tag, or from
 * `window.LewisReceptionistConfig` set before this script loads.
 */
(function () {
  'use strict';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function getConfig(scriptEl) {
    var g = (typeof window !== 'undefined' && window.LewisReceptionistConfig) || {};
    var d = scriptEl ? scriptEl.dataset : {};
    var endpoint =
      g.endpoint ||
      d.endpoint ||
      (scriptEl ? scriptEl.src.replace(/\/widget\.js.*$/, '') : window.location.origin);
    return {
      clientId: g.clientId || d.clientId || g.client_id || d.client_id || null,
      endpoint: endpoint,
      primary: g.primary || d.primary || '#33475b', // neutral slate default
      accent: g.accent || d.accent || '#ffffff',
      position: g.position || d.position || 'bottom-right',
      title: g.title || d.title || 'How can we help?',
      greeting:
        g.greeting ||
        d.greeting ||
        'Hi! Ask us about hours, location, services, and more.',
      placeholder: g.placeholder || d.placeholder || 'Type your message\u2026',
      launcherLabel: g.launcherLabel || d.launcherLabel || d.launcher_label || 'Chat',
    };
  }

  function css(cfg) {
    var side = cfg.position === 'bottom-left' ? 'left:18px;' : 'right:18px;';
    return [
      '#lewis-receptionist-root{position:fixed;z-index:2147483000;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;' +
        side +
        'bottom:18px;}',
      '#lewis-receptionist-bubble{display:inline-flex;align-items:center;justify-content:center;height:48px;min-width:72px;padding:0 18px;border-radius:999px;background:' +
        cfg.primary +
        ';color:' +
        cfg.accent +
        ';cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.18);border:none;font-size:15px;font-weight:600;}',
      '#lewis-receptionist-panel{display:none;flex-direction:column;width:340px;max-width:calc(100vw - 36px);height:480px;max-height:calc(100vh - 120px);margin-bottom:12px;background:#fff;border:1px solid #e3e3e3;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.15);overflow:hidden;}',
      '#lewis-receptionist-panel.open{display:flex;}',
      '#lewis-receptionist-header{background:' +
        cfg.primary +
        ';color:' +
        cfg.accent +
        ';padding:14px 16px;font-weight:600;}',
      '#lewis-receptionist-messages{flex:1;overflow-y:auto;padding:14px;background:#f7f7f7;display:flex;flex-direction:column;}',
      '.ld-msg{margin:0 0 10px;max-width:85%;padding:10px 12px;border-radius:12px;font-size:14px;line-height:1.4;white-space:pre-wrap;word-wrap:break-word;}',
      '.ld-msg.assistant{background:#fff;border:1px solid #e3e3e3;color:#222;align-self:flex-start;border-bottom-left-radius:4px;}',
      '.ld-msg.user{background:' +
        cfg.primary +
        ';color:' +
        cfg.accent +
        ';align-self:flex-end;border-bottom-right-radius:4px;}',
      '#lewis-receptionist-form{display:flex;border-top:1px solid #e3e3e3;}',
      '#lewis-receptionist-input{flex:1;border:none;outline:none;padding:12px;font-size:14px;color:#222;}',
      '#lewis-receptionist-send{background:' +
        cfg.primary +
        ';color:' +
        cfg.accent +
        ';border:none;padding:0 16px;cursor:pointer;font-size:14px;font-weight:600;}',
    ].join('\n');
  }

  function init() {
    var me = document.currentScript;
    var cfg = getConfig(me);
    if (!cfg.clientId) {
      if (typeof console !== 'undefined') {
        console.warn('Lewis Digital Receptionist: missing data-client-id — widget not started.');
      }
      return;
    }
    if (document.getElementById('lewis-receptionist-root')) return;

    var style = document.createElement('style');
    style.textContent = css(cfg);
    document.head.appendChild(style);

    var root = document.createElement('div');
    root.id = 'lewis-receptionist-root';
    root.innerHTML =
      '<div id="lewis-receptionist-panel" role="dialog" aria-label="Chat">' +
      '<div id="lewis-receptionist-header">' +
      escapeHtml(cfg.title) +
      '</div>' +
      '<div id="lewis-receptionist-messages"></div>' +
      '<form id="lewis-receptionist-form">' +
      '<input id="lewis-receptionist-input" type="text" autocomplete="off" placeholder="' +
      escapeHtml(cfg.placeholder) +
      '" />' +
      '<button id="lewis-receptionist-send" type="submit">Send</button>' +
      '</form>' +
      '</div>' +
      '<button id="lewis-receptionist-bubble" aria-label="Open chat">' +
      escapeHtml(cfg.launcherLabel) +
      '</button>';
    document.body.appendChild(root);

    var sessionId =
      'ld-' + Math.random().toString(36).slice(2) + '-' + Date.now().toString(36);
    var panel = root.querySelector('#lewis-receptionist-panel');
    var bubble = root.querySelector('#lewis-receptionist-bubble');
    var messages = root.querySelector('#lewis-receptionist-messages');
    var form = root.querySelector('#lewis-receptionist-form');
    var input = root.querySelector('#lewis-receptionist-input');

    function appendMsg(text, who) {
      var el = document.createElement('div');
      el.className = 'ld-msg ' + who;
      el.textContent = text;
      messages.appendChild(el);
      messages.scrollTop = messages.scrollHeight;
      return el;
    }

    function setOpen(open) {
      panel.classList.toggle('open', open);
      bubble.textContent = open ? '\u2715' : cfg.launcherLabel;
    }

    bubble.addEventListener('click', function () {
      setOpen(!panel.classList.contains('open'));
    });

    appendMsg(cfg.greeting, 'assistant');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text) return;
      appendMsg(text, 'user');
      input.value = '';

      var pending = appendMsg('\u2026', 'assistant');
      try {
        var res = await fetch(cfg.endpoint + '/chat', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            client_id: cfg.clientId,
            message: text,
            session_id: sessionId,
          }),
        });
        var data = await res.json();
        pending.textContent =
          data.answer || "I\u2019ll have someone get back to you.";
      } catch (err) {
        pending.textContent = "I\u2019ll have someone get back to you.";
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
