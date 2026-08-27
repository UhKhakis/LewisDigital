# DEPLOY-CPANEL.md — Putting a Client Live on GoDaddy cPanel

This is the runbook the team follows when a client's site moves from
"demo confirmed + paid" to **live on the owner's GoDaddy cPanel server**.

Two scenarios, in order of how we normally ship:

- **A. Subdomain on the owner's main domain** (fastest — e.g. `bosgarage.MAINDOMAIN.com`).
- **B. A full branded domain the owner buys for the client** (e.g. `bosgarage.com`).

Both use the same file upload step. Confirm the live PHP contact form sends to
the business inbox before treating either deployment as complete.

---

## 0. Before you start

1. Confirm the deal is **paid** (Payment Agent has the Stripe confirmation).
2. Have ready:
   - the per-client folder (the client-branded `index.html`, `styles.css`, and
     `contact.php` with `$to` set to the business's inbox),
   - the business's real inbox address (already set in `contact.php`).
3. Make sure no stray `preview.png` / `pitch-sheet.html` / demo README files get
   uploaded to production — only the live site files go up.

---

## A. Deploy to a subdomain (e.g. `bosgarage.MAINDOMAIN.com`)

### A1. Create the subdomain
1. Log in to GoDaddy → **Web Hosting** → **cPanel Admin** (opens cPanel).
2. In cPanel, go to **Domains → Subdomains**.
3. **Subdomain:** enter the client's slug (e.g. `bosgarage`).
4. **Domain:** select the owner's main domain from the dropdown.
5. The **Document Root** auto-fills to `public_html/bosgarage` — leave it
   (or set it to `public_html/bosgarage` if not auto-filled).
6. Click **Create**.

Result: `bosgarage.MAINDOMAIN.com` now maps to the folder
`public_html/bosgarage` on the server.

### A2. Upload the site files
1. In cPanel, open **Files → File Manager**.
2. Navigate to **`public_html`** → open (or create) the **`bosgarage`** folder.
3. Upload these three files into it (and only these):
   - `index.html`
   - `styles.css`
   - `contact.php`
4. Confirm there are no leftover demo files.

### A3. Point the document root correctly
- The subdomain is already pointed at `public_html/bosgarage` from A1. Skip to
  A4 unless you created a *different* folder name.

### A4. Verify
1. Visit `https://bosgarage.MAINDOMAIN.com/` (and `http://` if SSL isn't active
   yet) — the client's site should render.
2. **Test the contact form:** submit a message and confirm it lands in the
   business's inbox (check spam too). If it does NOT arrive, see "Mail not
   arriving?" below.

---

## B. Deploy to a full branded domain (e.g. `bosgarage.com`)

Use this when the owner buys a domain specifically for the client.

### B1. Point the domain at the owner's hosting
The domain must resolve to the cPanel server. Pick ONE of these two methods:

**Method 1 — Addon domain (recommended; keeps it under the owner's cPanel).**
1. In cPanel: **Domains → Addon Domains**.
2. **New Domain Name:** `bosgarage.com` (the client's domain).
3. Leave "Subdomain" and "Document Root" as auto-filled (`public_html/bosgarage.com`).
4. Click **Create**. cPanel now hosts this domain.

**Method 2 — Point DNS at the server.**
If you prefer to manage DNS at the registrar (GoDaddy's domain control panel):
1. In GoDaddy's **DNS Management** for `bosgarage.com`, add an **A record**:
   - **Host:** `@` → **Points to:** the cPanel server's IP (find it in cPanel
     under **General Information → Shared IP Address**).
   - **Host:** `www` → same IP (a CNAME to `@` also works).
2. Optionally change the **nameservers** to the owner's hosting nameservers
   (shown in the cPanel "General Information" box, e.g. `ns1.hostingprovider.com`
   / `ns2...`). If you change nameservers you don't need the A records — the
   host's nameservers handle it.
3. In cPanel, **Domains → Addon Domains** and add `bosgarage.com` anyway so
   Apache knows to serve it (if it isn't auto-detected).

DNS propagation can take up to ~24–48 hours (usually minutes to a couple hours
for A records).

### B2. Upload the site files
1. **File Manager** → `public_html` → the addon domain's folder (usually
   `public_html/bosgarage.com`).
2. Upload `index.html`, `styles.css`, `contact.php` (and only those).

### B3. (Optional) enable SSL for the new domain
1. cPanel → **Security → SSL/TLS Status** (or "Let's Encrypt" / "AutoSSL").
2. Run AutoSSL for `bosgarage.com` so the site serves over `https://`.
   GoDaddy cPanel typically enables AutoSSL automatically — just confirm the
   cert appears after propagation.

### B4. Verify
1. Visit `https://bosgarage.com/` — client site renders.
2. **Test the contact form** — submit and confirm delivery to the business inbox.

---

## C. Mail not arriving? (contact form troubleshooting)

1. **Check spam** in the business's inbox first.
2. **Check the PHP error log** — cPanel → **Metrics → Errors** (or
   `error_log` in the site folder). Our handler logs a `mail() failed` line
   there, including the `To`/`From` it tried.
3. **From address:** GoDaddy cPanel's `mail()` often rejects a `From` that
   isn't a mailbox/domain on the account. In `contact.php`, set `$from_email`
   to a real address on the account (e.g. `info@MAINDOMAIN.com` or a mailbox
   created under cPanel → **Email → Email Accounts**). Retest.
4. **Recipient:** make sure `$to` is the business's real address and there are
   no typos.
5. **PHP version:** cPanel → **Software → Select PHP Version** — confirm a
   currently supported PHP 8.x version is selected for the domain. Submit the
   form again after any PHP-version change and verify delivery.

---

## Quick reference

| Task | cPanel location |
|------|-----------------|
| Create a subdomain | Domains → Subdomains |
| Add a full domain | Domains → Addon Domains |
| Upload files | Files → File Manager → `public_html/<folder>` |
| Server IP address | General Information (right sidebar) → Shared IP |
| PHP version | Software → Select PHP Version |
| SSL | Security → SSL/TLS Status (AutoSSL) |
| PHP error log | Metrics → Errors |

---

## Hand-off notes for the team

- Upload **only** `index.html`, `styles.css`, `contact.php` — never demo-only
  files (`preview.png`, `pitch-sheet.html`, demo `README.md`).
- Always end a deploy by submitting the contact form once and confirming the
  email arrives — a site with a silently-broken form is not "live".
- Record the live URL and the business's inbox back to the lead so the
  Negotiator/Payment Agent can confirm delivery to the client.
