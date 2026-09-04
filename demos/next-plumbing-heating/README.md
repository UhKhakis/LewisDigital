# Next Plumbing & Heating — Demo Site (Batch 4, 2026-09-03)

One-page demo website for **Next Plumbing & Heating** ((979) 314-0898 —
Plumbing service (plumbing + heating), 1722 Broadmoor Dr #115, Bryan, TX
77802). This is one of five demos in an owner-authorized batch build
(B&B Electric Co, Andy's Auto Repair, Skyes View Window Cleaning, All
American Septic) — the normal "no demo until the client confirms interest"
gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Next+Plumbing+%26+Heating+Bryan+TX`

- **4.8 stars, 39 reviews** on Google — the largest review count of any
  business in this batch and one of the stronger ratings. Category: Plumber.
- Read 10+ actual review texts for tone (per `client-demo-site` §1). Repeated
  language: "punctual," "amiable demeanor," "professional," "kind,"
  "efficient," "highly advised." Two short excerpts, read for internal
  tone research only, never published on the page: "The service provided
  by the staff was nothing short of awesome." / "This business offers the
  epitome of exemplary customer service!"
- **One dissenting review flagged for the Lead's attention, not resolved
  by this build:** a Local Guide (26 reviews) posted 2 months ago claiming
  "Not a real plumbing company, this is a lead selling company that will
  sell your call to a handyman. Look at their website. They have no master
  plumber license number on their site." This is a single review among 39
  (overall average stays 4.8) and Next was pre-verified as a lead before
  this build — flagging it here for visibility, not acting on it. Nothing
  from this review appears on the page; it does not change the verified
  facts (name, address, phone, rating) used.
- No business website found — Google listing shows an "Add website" prompt,
  confirming no site exists. No hours published; the listing's live status
  snippet ("Closes soon · 10 PM · Opens 7 AM Fri") is a single point-in-time
  reading, not confirmed weekly hours.
- No usable brand-color source (no site, no public photo gallery beyond a
  camera icon) — palette below is derived from the trade itself (plumbing +
  heating combined), disclosed as derived rather than sourced.

## Design direction

**Two trades, one crew.** Next is unusual in this batch (and in the wider
gallery) for combining plumbing and heating under one shop — most demos
here are single-trade. The design's structural signature is a **split
trade panel** (Plumbing | Heating) laid out side by side right under the
hero, making the dual-service scope legible at a glance instead of burying
it in a mixed service grid. Color-wise, the palette deliberately inverts the
"dark neutral + one warm accent" formula used by most other demos in this
gallery: here the dark neutral itself is warm (a cast-iron/radiator brown,
"--iron"), and the accent that cuts against it is cool (a water-blue,
"--water") — plumbing's water and heating's iron in one system, with a
copper accent bridging the two. Spectral (a serif with warmth and a bit of
formality — read as trustworthy, established trades work) pairs with Karla
for body copy and JetBrains Mono for small data labels.

**Signature element:** the full-bleed, dark-scrim hero photo with centered
text — no other demo in this batch uses a full-bleed photographic hero;
the other four use split-photo, banner/badge, or full-bleed-with-bottom-text
treatments instead (see distinctness table below).

## Structural distinctness vs. other demos

Next is not the only plumbing demo in `demos/` — **Dean Plumbing & Repair**
already exists (currently archived from the public gallery after the
2026-09-01 cold-call round, but its files remain in `demos/` and still
count for design-collision purposes). **Static Heating and Air
Conditioning** is the nearest heating-side neighbor.

| | Next Plumbing & Heating (this demo) | Dean Plumbing & Repair (existing) | Static Heating & Air (existing) |
|---|---|---|---|
| Hero | Full-bleed dark-scrim photo, centered text | (Different treatment) | Full darker hero, different structure |
| Signature element | Split plumbing/heating trade panel | (Not shared) | (Not shared) |
| Palette | Warm iron-brown + cool water-blue + copper | Navy + off-white "fixture" tones | Cool teal + warm burnt-orange split |
| Type pairing | Spectral + Karla + JetBrains Mono | IBM Plex Serif + system sans | Manrope-based |
| Section order | Hero → trade panels → trust strip → about → reviews → area → contact | (Different order) | (Different order) |

Within this batch, Next is also checked against B&B Electric (split-photo
hero + history timeline), Andy's Auto Repair (banner/badge hero + decades
ribbon), Skyes View (full-bleed bottom-anchored hero + long-form single
column), and All American Septic (plain image-right hero + numbered process
strip) — no shared hero treatment, section order, or signature element
across any of the five.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, trade panels, trust strip, about, reviews, service area, contact, footer) |
| `styles.css` | All styling — sourced/derived client brand (iron-brown/water-blue/copper, Spectral/Karla/JetBrains Mono) |
| `assets/hero-plumber.jpg` | Hero photo — free-license stock photo |
| `assets/boiler-detail.jpg` | Trade-panel section photo (heating side) — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of Next
Plumbing & Heating or its actual crew/equipment:

- **Hero** (`assets/hero-plumber.jpg`): [pexels.com/photo/32588548](https://www.pexels.com/photo/32588548/)
  ("Close-up of a plumber in blue uniform working on a pipe repair with a
  wrench").
- **Trade-panel section** (`assets/boiler-detail.jpg`): [pexels.com/photo/7859953](https://www.pexels.com/photo/7859953/)
  ("Close-up of hands adjusting a boiler system with precise
  instrumentation" — used to represent the heating side of the business).

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/next-plumbing-heating
python -m http.server 8231 --bind 127.0.0.1   # preview on localhost:8231
```

Verified locally 2026-09-03: both images render correctly, no console
errors, content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Next Plumbing & Heating**
- Phone: **(979) 314-0898**
- Address: **1722 Broadmoor Dr #115, Bryan, TX 77802**
- Category: **Plumber (plumbing + heating services)**
- **Google rating: 4.8 out of 5, from 39 reviews** — verified 2026-09-03.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Full weekly hours**: only a single point-in-time "Opens 7 AM Fri"
  listing status was found; the page tells visitors to call or message to
  confirm hours rather than presenting a guessed schedule.
- **Trade-panel service lists** (leak detection, drain clearing, water
  heaters, furnace repair, etc.): generic categories of plumbing/heating
  work, not an itemized, owner-confirmed service menu. The page states
  this directly and asks visitors to confirm by phone.
- **Both hero and trade-panel photos**: real stock photos, explicitly not
  photos of Next's own crew or equipment.
- **Reviews section**: only the real 4.8/39 rating is shown — actual review
  text stays internal to this README, per `client-demo-site` §1/§3. No
  quotes, real or paraphrased, appear on the page.
- **About-section narrative**: original copy informed by the real rating
  and the fact that no website exists, not a direct quote or invented
  testimonial. The one dissenting review noted above is not referenced on
  the page at all.
- **Color palette**: no usable brand-color source (no site, no visible
  vehicle/storefront photos on the listing) — the iron-brown/water-blue/
  copper system is derived from the plumbing+heating trade itself,
  disclosed here as derived rather than sourced from an existing visual
  identity.

## Brand-rule compliance

- Client-facing page uses ONLY the derived client-brand colors (iron-brown,
  water-blue, copper) and fonts (Spectral, Karla, JetBrains Mono). **Zero
  Lewis Digital gold (`#C9A227` family), zero Lewis charcoal `#16130e`,
  zero Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- Checked against every other plumbing/heating demo in `demos/` (Dean
  Plumbing & Repair, Static Heating and Air Conditioning) plus the other
  four demos in this same batch for hero/structure/palette collision — see
  table above.

## Notes for outreach

- The dual-trade angle (plumbing + heating under one call) is itself a
  pitch point — most competitors in Bryan are single-trade, and the site
  makes that combined scope visible at a glance.
- The one dissenting review about licensing/lead-selling (see Research
  above) is worth a quiet, separate conversation with the Lead before
  outreach proceeds — it doesn't change what's on the demo page, but it's
  the kind of thing worth knowing before a pitch call.
- No existing website means no migration friction — a clean first web
  presence beyond the bare Google listing.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
