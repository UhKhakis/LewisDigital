# Neff's Majestic Hair Studio — Demo Site (Client #2)

One-page demo website for **Neff's Majestic Hair Studio** (Bryan, TX), built by
Lewis Digital (Builder agent) for the owner's in-person sales visit. Lightweight
static site: plain HTML + CSS, no frameworks, no build step — deployable as-is
to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about/hours, Google reviews, contact, footer) |
| `styles.css` | All styling — Lewis Digital brand (gold `#C9A227` on charcoal `#16130e` / cream `#fbf8f1`, Playfair Display + Inter) |
| `assets/hero-salon.jpg` | Hero background photo (AI-generated, illustrative only) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit |
| `preview.png` | Browser screenshot of the rendered page (QA check) |

## Preview

```bash
cd /home/team/shared/demos/neffs-majestic-hair-studio
python3 -m http.server 8091 --bind 127.0.0.1   # preview on localhost:8091
```

Do NOT use port 3000 — that serves the agency site.

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (Neff's row) + the business's public Google Maps
listing, re-checked by the Builder on **2026-08-19**
(https://www.google.com/maps/place/Neff%27s+Majestic+Hair+Studio):

- Business name: **Neff's Majestic Hair Studio**
- Category on Google: **Hair salon** (independent hair studio/salon)
- Address: **4341 Wellborn Rd, Bryan, TX 77801** (ZIP confirmed on listing)
- Phone: **(979) 260-0980**
- No website — the listing's only "website" link is **facebook.com**
  (https://www.facebook.com/Neffs.Majestic.Hair.Studio/) — confirmed on the
  place page. The page therefore does NOT claim any website exists.
- **Google rating: 4.6 stars** — shown on the public listing. NO review count is
  displayed on the listing, so the page does NOT claim a count.
- **LGBTQ+ friendly** and **Identifies as Latino-owned** — attributes shown on
  the public listing (page lists them under "Find us").
- Listing **only publishes one day of hours: Tuesday 11 AM – 5 PM** (the hours
  popup shows only "Tuesday 11 AM–5 PM" with a "Suggest new hours" prompt, and
  the listing status read "Closed · Opens 12 PM Wed"). Therefore the page shows
  **"Call or message for hours"** as primary and states the verified Tuesday
  11 AM–5 PM fact with an "as of August 2026" note. No other hours are
  fabricated.
- Directions links point to the real Google Maps listing URL.
- Facebook link in About/Contact is the real page URL from the listing.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (cuts, color, balayage, treatments, styling, waxing,
  extensions, kids' cuts): generic list of what an independent hair studio
  typically offers — NOT sourced from Neff's. The page itself carries an
  on-page note saying services are examples and to confirm by phone/message.
- **Hero photo** (`assets/hero-salon.jpg`): AI-generated atmospheric salon image
  for layout/feel — it is NOT a photo of the studio.
- **Google reviews section**: only the real 4.6 rating is shown; review
  text/cards are an explicit placeholder ("Google reviews will appear here once
  connected") — no fake reviews, no fabricated quotes, no invented star counts.
- **Hours**: "Call or message for hours" (only the Tuesday 11 AM–5 PM listing
  fact is shown, attributed).
- **Copy voice** (e.g., "treated like family"): warm small-business tone per
  Lewis Digital brand direction — general marketing language, no invented
  facts, testimonials, or stats.
- **Phone/CTA buttons**: all `tel:` links to the real number.

## Notes for the close call with the owner

- **Owner's own post on the Google listing (4 days before verification) reads:
  "Book an appointment or walk-in via Facebook/Instagram DM. Phone currently
  unavailable."** — so the demo pairs the verified phone with a prominent
  "Message us on Facebook" button. If the phone is truly out of service, lead
  the pitch with the Facebook messaging angle (the AI Receptionist offer
  directly solves "customers can't reach me").
- Email found on the Facebook About page (mr_majestic@icloud.com) is NOT
  displayed on the page — it's not confirmed as customer-facing.
- Highlighted offer hook: real 4.6 Google rating displayed on their own site +
  honest reviews section that fills in once their GBP reviews are connected
  (Lewis Digital manages GBP) + a site that answers "what are your hours?"
  instead of customers finding nothing.
- If the owner provides real hours, real review text, or a real studio photo,
  swap them into `index.html`/`assets/` and re-publish. Places to edit are
  marked by section.
- This folder is a standalone deliverable; it is NOT wired into the agency site
  on port 3000.
