# Lewis Digital — Live-Client Delivery Kit

The production harness a paying client goes live on. This is **internal
tooling** (not a client demo, not the agency site) — it holds the reusable
one-page site template and the contact-form mail handler we deploy to the
owner's **GoDaddy cPanel server** when a client signs.

> **Important:** the demo-confirmation policy does **not** apply to this kit.
> This kit is the "after the client says yes" machinery. No client site is
> deployed from it until the deal is closed and paid.

## What's in this kit

| File | Purpose |
|------|---------|
| `index.html` | Production one-page site template — hero, services, about/hours, Google reviews, contact + **working form**. Neutral generic theme (slate + blue), deliberately NOT the Lewis gold brand and NOT any client brand. |
| `styles.css` | All styling for the template (same neutral theme). |
| `contact.php` | The **working PHP mail handler** — receives the form POST, sanitizes, validates, blocks bots, and emails the business via `mail()`. Recipient is configured at the top. |
| `DEPLOY-CPANEL.md` | Exact cPanel steps to put a client's subdomain/domain live. |
| `README.md` | This file — setup instructions + the delivery checklist. |

There is no build step and no framework. Everything is plain HTML/CSS + one
self-contained PHP file. Upload the folder as-is to cPanel and it works.

## Setting the recipient email (the one required change)

Open `contact.php` and edit the **CONFIG** block at the very top:

```php
$to             = "owner@example.com";      // <-- set to the business's real inbox
$business_name  = "Your Business Name";     // <-- shown on the thank-you page + subject
$subject_prefix = "New website inquiry";    // optional
$from_email     = "noreply@example.com";    // optional — see note below
```

- `$to` is the only strictly required value. It can be comma-separated for
  multiple recipients: `"owner@example.com, bookkeeper@example.com"`.
- `$from_email` should ideally be a real mailbox on the cPanel account
  (e.g. `info@theclientdomain.com`). If it's left as a placeholder, the handler
  falls back to `noreply@<the site's hostname>`. On GoDaddy cPanel, `mail()`
  may reject a From address that isn't a domain/mailbox on the account — if a
  test send doesn't arrive, set `$from_email` to a real address on the account.

## PHP requirements

- **PHP 7.0+** (use a currently supported PHP 8.x version on production
  hosting). The handler uses only core functions plus the null-coalescing `??`
  operator, with no external libraries.
- **Working form mail** — before launch, submit the live form and confirm that
  the business receives the message. If delivery fails, follow the cPanel
  troubleshooting steps in `DEPLOY-CPANEL.md`; do not call the site live until
  the test message arrives.
- No Composer, no libraries, no `.env`, no external form service.

## The contact form (what it does, how it's protected)

The form in `index.html` posts to `contact.php` with `method="post"` and the
correct `name` attributes (`name`, `email`, `phone`, `message`). The handler:

1. **Only accepts POST** — a plain GET redirects back to `index.html`.
2. **Honeypot** — a hidden `company` field humans never see; if a bot fills it,
   the handler pretends success and sends nothing.
3. **Time-trap** — a hidden `form_time` timestamp set by a tiny inline script;
   submissions completed in under ~3 seconds are treated as bots and silently
   dropped. A missing timestamp (JS disabled) is allowed through so a real
   person is never silently lost.
4. **Validation** — `name`, `email`, and `message` are required; `email` must be
   a valid address; `phone` is optional.
5. **Sanitization** — all fields are trimmed and tag-stripped; CR/LF/NUL are
   stripped from single-line fields so no header injection is possible.
6. **Safe headers** — `From` uses a controlled sender, `Reply-To` uses the
   visitor's sanitized name + validated email so the business can reply
   directly.
7. **Safe errors** — on `mail()` failure the visitor sees a generic "something
   went wrong" page; the real cause is written to the PHP error log (for us),
   never to the visitor.

## Delivery checklist (the pipeline hand-off)

When a demo is confirmed and the deal is paid, run through this in order:

1. **Demo confirmed** — the lead/negotiator has the client's "yes" and payment
   is handled by the Payment Agent.
2. **Build the client-branded site** — copy `index.html` + `styles.css` into a
   per-client folder and override the neutral theme with the client's **own**
   brand (colors/typography/imagery from their real branding — see the
   `client-demo-site` skill for the brand rules). The neutral slate+blue here is
   only the starting point. Replace every `TODO` (name, tagline, phone, address,
   hours, city, Maps links, services, rating, about copy).
3. **Set the recipient email** — edit the `$to` (and `$business_name`) in
   `contact.php` to the business's real inbox.
4. **Deploy** — follow `DEPLOY-CPANEL.md` to create the client's subdomain (or
   point their full domain) and upload the folder to the right document root.
5. **Verify the form actually emails** — submit a test message on the live URL
   and confirm it lands in the business's inbox (and, if set up, in our own
   test inbox). Check the spam folder too.

**Do not deploy until the deal is paid** — this kit is only for live,
paying clients.

## Local preview (no PHP needed for the layout)

```bash
cd /home/team/shared/live-kit
python3 -m http.server 8090 --bind 127.0.0.1   # preview layout at localhost:8090
```

The form **will not send** under Python's static server (no PHP there) — that's
expected. To test `contact.php` end-to-end you need a PHP runtime:

```bash
# if PHP is available locally:
cd /home/team/shared/live-kit && php -S 127.0.0.1:8091
# then submit the form; mail() may or may not deliver depending on local MTA
```

Real delivery verification happens on cPanel after deploy.
