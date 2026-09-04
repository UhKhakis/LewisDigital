# All American Septic — Demo Site (Batch 4, 2026-09-03)

One-page demo website for **All American Septic** ((979) 575-4161 — Septic
system service, 5895 Old Spanish Trl, Bryan, TX 77807). This is one of five
demos in an owner-authorized batch build (Next Plumbing & Heating, B&B
Electric Co, Andy's Auto Repair, Skyes View Window Cleaning) — the normal
"no demo until the client confirms interest" gate does not apply here
(Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/All+American+Septic+Bryan+TX`

- **5.0 stars, 6 reviews** on Google. Category: Septic system service.
- Read all available review texts for tone (per `client-demo-site` §1).
  Reviews consistently name the owner directly ("Jordan") and describe him
  as professional, concerning [sic, likely "conscientious"], knowledgeable,
  courteous, and respectful, and note that he "works until the problem is
  resolved." One review also names "Jessica & Jordan" as both being
  professional and quick to answer calls and questions — consistent with
  the Lead's brief that Jordan R. Bucknum is the sole proprietor, with his
  wife also involved in answering calls. Short excerpts, read for internal
  tone research only, never published on the page: "Also very prompt to
  get service diagnosed and repaired!" / "Such an amazing family owned
  company."
- No business website found — Google listing shows "Add place's phone
  number" and "Add website" prompts (the phone number used throughout this
  demo, (979) 575-4161, is per the Lead's pre-verified business record,
  since it doesn't appear on the public listing itself).
- Founding year (2005) and sole-proprietor ownership (Jordan R. Bucknum)
  are per the Lead's pre-verified business record.
- No usable brand-color source (no site, no visible truck/uniform photos)
  — palette below is derived from the trade and the rural service area,
  disclosed as derived.
- All American Septic is the only septic-service demo in this gallery, so
  there's no sibling business in the same trade to differentiate against —
  the palette and layout were chosen freely rather than against a
  same-trade competitor.

## Design direction

**A process, not just a person.** Septic work is inherently procedural
(inspect, then pump or repair, then maintain), so the design's structural
signature is a **numbered 3-step process strip** — the only demo in this
gallery built around an explicit "how it works" sequence rather than a
service-category grid or list. The palette (deep olive-forest + rust-orange
+ cream) reads as earthy and dependable without leaning into the more
common cedar/terracotta combinations already used elsewhere in the
gallery, and Roboto Slab (a sturdy, dependable slab serif) pairs with
Source Sans 3 for body copy and Overpass Mono for small data labels — a
fresh three-font pairing not reused elsewhere.

**Signature element:** the **numbered process strip** with connecting
arrows between three steps — unique to this demo. The hero itself is also
deliberately plain: a simple image-right layout with no dark overlay and
no full-bleed treatment, the most understated hero in this batch, matching
a no-nonsense, straightforward-service tone.

## Structural distinctness vs. other demos

All American Septic is the only septic-service business in `demos/` —
there is no same-trade sibling to differentiate against. It's checked here
against the other four demos in this same batch and against the general
palette/type landscape of the wider gallery (see the batch-wide palette
survey referenced in each sibling README):

| | All American Septic (this demo) | Next Plumbing & Heating | B&B Electric Co | Andy's Auto Repair | Skyes View |
|---|---|---|---|---|---|
| Hero | Plain image-right, no overlay, no full-bleed | Full-bleed dark-scrim photo | Split, photo docked left | Banner + inset circular photo | Full-bleed, bottom-anchored |
| Signature element | Numbered 3-step process strip | Split trade panel | History timeline | Decades ribbon | Photo-break + tilted note cards |
| Palette | Olive-forest + rust-orange + cream | Iron-brown + water-blue + copper | Graphite + hi-vis yellow-green | Service-green + cream + mustard | Barnwood-brown + dawn-blush |
| Type pairing | Roboto Slab + Source Sans 3 + Overpass Mono | Spectral + Karla + JetBrains Mono | Chakra Petch + Nunito Sans + IBM Plex Mono | Bebas Neue + Work Sans | Lora + Jost |

No shared hero treatment, section order, signature element, palette, or
type pairing across any of the five demos in this batch.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, process strip, about, reviews, service area, contact, footer) |
| `styles.css` | All styling — derived client brand (olive-forest/rust-orange/cream, Roboto Slab/Source Sans 3/Overpass Mono) |
| `assets/hero-trench-work.jpg` | Hero photo — free-license stock photo |
| `assets/brazos-county-field.jpg` | About-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of All
American Septic or its actual job sites:

- **Hero** (`assets/hero-trench-work.jpg`): [pexels.com/photo/37627673](https://www.pexels.com/photo/37627673/)
  ("Detailed view of drainage pipe construction in a trench, Elk Grove,
  California" — chosen over a similar trench photo that included visible
  "GAS" utility-marker tape, to avoid any confusion with gas-line work on
  a septic/drainage business's page).
- **About section** (`assets/brazos-county-field.jpg`): [pexels.com/photo/33615369](https://www.pexels.com/photo/33615369/)
  ("Peaceful view of a grassy field framed by a large oak tree in Brady,
  TX" — representing the rural Bryan-area service territory generally, not
  a specific client property).

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/all-american-septic
python -m http.server 8235 --bind 127.0.0.1   # preview on localhost:8235
```

Verified locally 2026-09-03: both images render correctly, no console
errors, content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **All American Septic**
- Address: **5895 Old Spanish Trl, Bryan, TX 77807**
- Category: **Septic system service**
- **Google rating: 5.0 out of 5, from 6 reviews** — verified 2026-09-03.
- Founding year (2005) and sole-proprietor ownership (Jordan R. Bucknum) —
  per the Lead's pre-verified business record.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Phone number**: (979) 575-4161 is per the Lead's pre-verified business
  record — the public Google listing itself doesn't display a phone number
  (it shows an "Add place's phone number" prompt). Flagged here so the
  Lead can double-check this number before outreach if needed.
- **Hours**: only a single point-in-time "Opens 8 AM Fri" listing status
  was found; the page tells visitors to call rather than presenting a
  guessed schedule.
- **Process-step copy** (inspect / pump or repair / maintain): generic
  categories of septic work, not an itemized, owner-confirmed service
  list. The page states this directly.
- **Both hero and about-section photos**: real stock photos, explicitly
  not photos of All American's own job sites or equipment.
- **Reviews section**: only the real 5.0/6 rating is shown — actual review
  text (including the "Jordan" and "Jessica & Jordan" details used for
  internal research) stays internal to this README, per `client-demo-site`
  §1/§3. No quotes, real or paraphrased, appear on the page.
- **About-section narrative**: original copy informed by the real rating,
  founding year, and reviewer tone — not a direct quote or invented
  testimonial. The owner's first name (Jordan) is used generically in
  README research notes only; the on-page copy says "a sole proprietor"
  rather than naming him, since that framing wasn't confirmed as
  owner-approved for the public page.
- **Color palette**: no usable brand-color source (no site, no visible
  truck/uniform photos on the listing) — the olive-forest/rust-orange
  system is derived from the trade and rural setting, disclosed here as
  derived rather than sourced from an existing visual identity.

## Brand-rule compliance

- Client-facing page uses ONLY the derived client-brand colors
  (olive-forest, rust-orange, cream) and fonts (Roboto Slab, Source Sans 3,
  Overpass Mono). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis
  charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other septic-service demo exists in `demos/` to collide with; checked
  against the other four demos in this same batch for hero/structure/
  palette collision — see table above.

## Notes for outreach

- **Verify the phone number before calling** — (979) 575-4161 came from
  the Lead's pre-verified record, not the public Google listing itself
  (which shows no phone number publicly).
- The "family-owned since 2005, answers his own calls" framing is a real
  differentiator against larger, dispatcher-based septic outfits.
- No existing website means no migration friction — a clean first web
  presence beyond Facebook and the bare Google listing.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
