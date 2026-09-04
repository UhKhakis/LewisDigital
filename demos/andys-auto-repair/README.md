# Andy's Auto Repair — Demo Site (Batch 4, 2026-09-03)

One-page demo website for **Andy's Auto Repair** ((979) 822-1271 — Auto
repair shop, 507 S Texas Ave, Bryan, TX 77803). This is one of five demos
in an owner-authorized batch build (Next Plumbing & Heating, B&B Electric
Co, Skyes View Window Cleaning, All American Septic) — the normal "no demo
until the client confirms interest" gate does not apply here (Lead
instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Andy%27s+Auto+Repair+Bryan+TX`

- **4.0 stars, 100 reviews** on Google — the highest review count of any
  business in this batch and the largest in the whole gallery. Category:
  Auto repair shop.
- Read 10+ actual review texts for tone (per `client-demo-site` §1).
  Repeated language: "treat you like family," "honest," "fair prices,"
  "quick service," small shop trusted even with a BMW. Three short
  excerpts, read for internal tone research only, never published on the
  page: "Excellent work Great prices They Treat You Like Family" / "Love
  that a small shop could fix my BMW and do it for such a affordable
  price." / "Best customer service in BCS area fair prices."
- The owner actively replies to reviews ("Thank you so much; we look
  forward to helping you in the future as well.") — a personal, hands-on
  touch that shows up across many of the 100 reviews, not just a few.
  A small number of reviews describe pricing disagreements over
  free-look/family-referral visits; these read as isolated and don't move
  the 4.0 average — noted here for completeness, not used on the page.
- No business website found — Google listing shows an "Add website"
  prompt. Per the Lead's brief, Andy's does have a Facebook page (330+
  followers), the only social presence found.
- Founding year (1971) is per the Lead's pre-verified business record —
  the oldest business in this batch, and likely the oldest lead in the
  whole campaign.
- No usable brand-color source (no site, no visible signage/vehicle photos
  on the listing) — palette below is derived from a classic American
  service-station look, disclosed as derived rather than sourced.

## Design direction

**Fifty-five years, told like a sign.** Andy's is the oldest business in
this campaign, so the design leans into vintage service-station signage —
a two-tone green/cream banner hero with a large condensed headline, an
inset circular photo (like a shop badge, not a rectangle), and a stamped
"EST. 1971" medallion — rather than the moody dark-garage look several
other auto-repair demos in this gallery already use. The palette
deliberately skips red (used by Bos Garage's barn-red and Bryan Muffler's
sign-red) in favor of a classic filling-station green + cream + mustard-gold
pinstripe. Bebas Neue (a tall, condensed, all-caps display face straight
out of vintage signage) pairs with Work Sans for body copy — no mono
font, since this demo's mood is warm and human rather than technical.

**Signature element:** a horizontal **decades ribbon** (1971 → decades
since → today, with dotted markers on a pinstriped line) — no other demo
in this gallery uses a horizontal timeline-ribbon motif, and it's the only
place in this batch where "years in business" gets its own dedicated
visual section rather than a line of copy.

## Structural distinctness vs. other demos

Andy's is one of five auto-repair-adjacent demos in `demos/` — **Brazos
Valley Automotive**, **Bryan Muffler & Performance**, **Bos Garage**, and
**Limitless Diesel & Offroad** all exist already (Bos Garage and Bryan
Muffler are currently archived from the public gallery after the
2026-09-01 cold-call round, but their files remain in `demos/` and still
count for design-collision purposes).

| | Andy's Auto Repair (this demo) | Bos Garage (existing) | Bryan Muffler (existing) | Brazos Valley / Limitless Diesel (existing) |
|---|---|---|---|---|
| Hero | Two-tone banner + inset circular photo + medallion | Cream/barn-red rustic, different structure | Bold asphalt/steel/sign-red banner | Minimalist steel/paper or dark diesel |
| Signature element | Horizontal decades ribbon | (Not shared) | (Not shared) | (Not shared) |
| Palette | Service-station green + cream + mustard-gold, no red | Cream + barn-red | Asphalt + steel + sign-red | Steel/roof/paper or black/panel |
| Type pairing | Bebas Neue + Work Sans | Bitter serif | Alfa Slab One | League Spartan / Barlow Condensed |
| Section order | Hero → decades ribbon → services → reviews → area → contact | (Different order) | (Different order) | (Different order) |

Within this batch, Andy's is also checked against Next Plumbing & Heating
(full-bleed dark hero + trade-split panel), B&B Electric (split-photo hero
+ history timeline), Skyes View (full-bleed bottom-anchored hero +
long-form single column), and All American Septic (plain image-right hero
+ numbered process strip) — no shared hero treatment, section order, or
signature element across any of the five.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, decades ribbon, services, reviews, service area, contact, footer) |
| `styles.css` | All styling — derived client brand (service-station green/cream/mustard-gold, Bebas Neue/Work Sans) |
| `assets/hero-mechanic.jpg` | Hero photo — free-license stock photo |
| `assets/engine-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of Andy's
Auto Repair or its actual shop/crew:

- **Hero** (`assets/hero-mechanic.jpg`): [pexels.com/photo/6870324](https://www.pexels.com/photo/6870324/)
  ("Smiling auto mechanic inspects a car in a service garage, wearing
  coveralls and holding documents").
- **Services section** (`assets/engine-detail.jpg`): [pexels.com/photo/8478259](https://www.pexels.com/photo/8478259/)
  ("Auto mechanic performs engine maintenance on a car — focus on hands
  and engine components").

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/andys-auto-repair
python -m http.server 8233 --bind 127.0.0.1   # preview on localhost:8233
```

Verified locally 2026-09-03: both images render correctly, no console
errors, content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Andy's Auto Repair**
- Phone: **(979) 822-1271**
- Address: **507 S Texas Ave, Bryan, TX 77803**
- Category: **Auto repair shop**
- **Google rating: 4.0 out of 5, from 100 reviews** — verified 2026-09-03.
- Founding year (1971) — per the Lead's pre-verified business record.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Full weekly hours**: only a single point-in-time "Opens 8 AM Fri"
  listing status was found; the page tells visitors to call or message to
  confirm hours rather than presenting a guessed schedule.
- **Service-list items** (oil changes, brakes, A/C, starters/alternators):
  drawn from the Lead's brief on what Andy's actually offers, but presented
  as general categories, not an itemized price list — the page tells
  visitors to confirm the exact job by phone.
- **Both hero and services photos**: real stock photos, explicitly not
  photos of Andy's own shop or crew.
- **Reviews section**: only the real 4.0/100 rating is shown — actual
  review text stays internal to this README, per `client-demo-site`
  §1/§3. No quotes, real or paraphrased, appear on the page.
- **Decades-ribbon copy**: original narrative built around the verified
  founding year and address, not a direct quote or invented testimonial.
- **Color palette**: no usable brand-color source (no site, no visible
  signage/vehicle photos on the listing) — the vintage service-station
  green/cream/mustard system is derived, disclosed here as derived rather
  than sourced from an existing visual identity.

## Brand-rule compliance

- Client-facing page uses ONLY the derived client-brand colors
  (service-station green, cream, mustard-gold) and fonts (Bebas Neue, Work
  Sans). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- Checked against every other auto-repair demo in `demos/` (Brazos Valley
  Automotive, Bryan Muffler & Performance, Bos Garage, Limitless Diesel &
  Offroad) plus the other four demos in this same batch for
  hero/structure/palette collision — see table above.

## Notes for outreach

- 55 years in business and 100 Google reviews are the two strongest pitch
  points in this entire campaign round — very few competitors in the area
  can match either number, let alone both.
- No existing website means no migration friction — a clean first web
  presence beyond Facebook and the bare Google listing.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
