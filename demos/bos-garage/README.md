# Bos Garage Auto Repair — Demo Site (Client #1)

One-page demo website for **Bos Garage Auto Repair** (Bryan, TX), built by Lewis
Digital (Builder agent) as the first client demo. Lightweight static site:
plain HTML + CSS, no frameworks, no build step — deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about/hours, Google reviews, contact, footer) |
| `styles.css` | All styling — Lewis Digital brand (gold `#C9A227` on charcoal `#16130e` / cream `#fbf8f1`, Playfair Display + Inter) |
| `assets/hero-garage.jpg` | Hero background photo (AI-generated, illustrative only) |
| `preview.png` | Browser screenshot of the rendered page (QA check) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (added 2026-08-19) |

## Preview

```bash
cd /home/team/shared/demos/bos-garage
python3 -m http.server 8090 --bind 127.0.0.1   # preview on localhost:8090
```

Do NOT use port 3000 — that serves the agency site.

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (row 2) + the business's public Google Maps listing,
re-checked by the Builder on **2026-08-18** (https://www.google.com/maps/search/Bos+Garage+Auto+Repair+TX):

- Business name: **Bos Garage Auto Repair**
- Category on Google: **Car repair and maintenance service** (independent repair garage)
- Address: **1617 Briarcrest Dr, Bryan, TX 77802** (ZIP confirmed on listing)
- Phone: **(979) 906-0924**
- No website, no social links on its place page (confirmed — listing shows "Add website" prompt)
- **Google rating: 5.0 stars** — shown on the public listing ("5.0 stars" aria-label). NO review count is displayed on the listing, so the page does NOT claim a count.
- **Wheelchair accessible entrance** — attribute shown on the public listing (page lists it under "Find us")
- Google listing **only publishes one day of hours: Tuesday 10 AM – 6 PM** ("Add missing information" banner present). Therefore the page shows **"Call for hours"** as primary and merely states the Tuesday 10–6 fact as listed, with an "as of August 2026" note. No other hours are fabricated.
- Directions links point to the real Google Maps listing URL.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (brakes, oil changes, diagnostics, engine repair, AC, tires, electrical, belts): generic list of what an independent auto repair garage typically offers — NOT sourced from Bos Garage. The page itself carries an on-page note saying services are examples and to confirm by phone.
- **Hero photo** (`assets/hero-garage.jpg`): AI-generated atmospheric garage image for layout/feel — it is NOT a photo of the shop.
- **Google reviews section**: only the real 5.0 rating is shown; review text/cards are an explicit placeholder ("Google reviews will appear here once connected") — no fake reviews, no fabricated quotes, no invented star counts.
- **Hours**: "Call for hours" (only the Tuesday 10 AM–6 PM listing fact is shown, attributed).
- **Copy voice** (e.g., "we'll tell you straight"): warm small-business tone per Lewis Digital brand direction — general marketing language, no invented facts, testimonials, or stats.
- **Phone/CTA buttons**: all `tel:` links to the real number.

## Notes for the close call with the owner

- Highlighted offer hook: real 5.0 Google rating displayed on their own site + honest
  reviews section that fills in once their GBP reviews are connected (Lewis Digital manages GBP).
- If the owner provides real hours, real review text, or a real shop photo, swap them into
  `index.html`/`assets/` and re-publish. Places to edit are marked by section.
- This folder is a standalone deliverable; it is NOT wired into the agency site on port 3000.