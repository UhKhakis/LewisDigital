# Sunrise Pool & Spa Services — Demo Site (Batch 3, 2026-09-03)

One-page demo website for **Sunrise Pool & Spa Services** ((979) 587-8462 —
Pool cleaning service, College Station, TX — no public street address).
This is one of five demos in an owner-authorized batch build (1st Choice
Steam Cleaning, Maxey Way Window Cleaning, Smart Water Irrigation Repair,
All-Tex Roofing) — the normal "no demo until the client confirms interest"
gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Sunrise+Pool+%26+Spa+Services+979-587-8462`

- **4.9 stars, 10 reviews.** Category: Pool cleaning service.
- Google's own review-tag summary (structured listing feature, not
  invented): **knowledgeable staff ×3, dependable ×4**.
- Named reviews read for research: Lee Maidana Kuhl ("We have had the
  fortunate opportunity to know and have Luis maintain our pool and spa
  for more than 10 years... kind, intelligent and well versed"), Cullen
  Godfrey ("My wife and I have been using Luis Benda for many years... he
  is alert to problems or potential problems"), Laura Johnson ("Luis Binda
  & Sunrise Pools have been our pool provider for over 10 years... always
  exceeded expectations... dependable, professional, & knowledgeable").
  Owner's name appears as both **"Luis Benda"** (2 reviews) and "Luis
  Binda" (1 review, likely a typo) — this demo uses "Luis Benda" as the
  majority spelling; worth confirming directly with the business before
  any real site goes live.
- Owner personally replies to reviews by the customers' names ("Thank you
  very much for your kind words Lee and Derek!", "Thank you so much for
  your kind words and recommendations Mr & Mrs Godfrey").
- No public street address on the listing — a mobile/service-area
  business, consistent with the Lead's pre-verified lead sheet noting no
  public address exists.
- No business website found; Facebook page only, per the Lead's brief (not
  independently re-pulled from Facebook in this research pass).
- The Lead's brief confirms this Sunrise Pool & Spa (College Station, TX)
  is independently verified as unrelated to a same-named business in
  Sanger, TX — not a chain.

## Design direction

**A decade of the same family, the same pools.** The standout fact in every
review isn't a one-time job — it's 10+ years of continuity with the same
customers, plus an owner who replies to each one personally by name. That
long-relationship, family-run story is the design's seed, so "our story"
runs directly after the hero, ahead of services — a section-order choice
distinct from most other demos in the gallery, which lead with services.
Visually, the palette takes the business's own name literally: a
coral/gold sunrise-sky gradient over pool blue and deep navy-teal, using
Unbounded (a rounded, confident display face) for headings, Urbanist for
body copy, and Martian Mono for data labels — a fresh three-font pairing
not reused from any existing demo.

**Signature element:** a thin **horizon band** — a full-width gradient
strip (coral → gold → pool blue) marking the transition from hero to
content, echoing a literal sunrise-to-water horizon. No other demo in the
gallery uses a gradient horizon strip as a structural divider.

## Structural distinctness vs. other demos

No other demo in `demos/` is a pool service. The palette's warmth (coral +
gold) keeps it well clear of every blue-toned trade demo already built
(Static Heating and Air Conditioning, Dean Plumbing & Repair, Frank Seale
Electric, Maxey Way Window Cleaning in this same batch):

| | Sunrise Pool & Spa (this demo) | Maxey Way Window Cleaning (this batch) |
|---|---|---|
| Hero | Sunrise-gradient sky wash behind copy, photo docked bottom | Minimalist white/glass space, photo docked right |
| Section order | Hero → horizon band → **About/story first** → services → reviews → area → contact | Hero → streak divider → trust strip → services → about → reviews → area → contact |
| Signature element | Gradient horizon band | Diagonal squeegee-streak divider |
| Palette | Coral/gold sunrise + pool blue + navy | Bright sky-blue + glass-white + sun-yellow |
| Type pairing | Unbounded + Urbanist + Martian Mono | Schibsted Grotesk + Plus Jakarta Sans + Spline Sans Mono |

Leading with the "About/our story" section before services is unique to
this demo across the whole gallery — every other demo in `demos/` puts
services first.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, horizon band, about/story, services, reviews, service area, contact, footer) |
| `styles.css` | All styling — sourced client brand (coral/gold sunrise, pool blue, navy-teal, Unbounded/Urbanist/Martian Mono) |
| `assets/hero-backyard-pool.jpg` | Hero photo — free-license stock photo |
| `assets/pool-water-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of
Sunrise Pool & Spa or an actual customer's pool:

- **Hero** (`assets/hero-backyard-pool.jpg`):
  [pexels.com/photo/8134747](https://www.pexels.com/photo/backyard-swimming-pool-under-blue-sky-8134747/)
  ("Backyard Swimming Pool under Blue Sky"), photographer **Max
  Vakhtbovych** (same photographer used for 1st Choice Steam Cleaning's
  hero in this batch, for a different photo — coincidental, not a shared
  series).
- **Services section** (`assets/pool-water-detail.jpg`):
  [pexels.com/photo/28855597](https://www.pexels.com/photo/clear-blue-pool-water-with-ripple-effect-28855597/)
  ("Clear Blue Pool Water with Ripple Effect"), photographer **Dian
  Pradita Putri**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/sunrise-pool-spa-services
python -m http.server 8223 --bind 127.0.0.1   # preview on localhost:8223
```

Verified locally 2026-09-03: both images render correctly, horizon band
renders correctly, no console errors, content renders correctly at desktop
and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Sunrise Pool & Spa Services**
- Owner: **Luis Benda** — name confirmed directly from review text on the
  public listing (majority spelling across 2 of 3 mentions; one review
  spells it "Luis Binda").
- Phone: **(979) 587-8462**
- Category: **Pool cleaning service**
- **Google rating: 4.9 out of 5, from 10 reviews** — verified 2026-09-03.
- **Review-tag data and counts** (dependable ×4, knowledgeable staff ×3) —
  Google's own structured summary feature on the same listing, same date.
- **No public street address** — confirmed by its absence on the listing;
  the page states "mobile service" rather than guessing.
- "See us on Google" link points to the real, exact source URL given for
  this business.
- Family-owned; Facebook page presence; independence from the unrelated
  Sanger, TX business of the same name — from the Lead's pre-verified lead
  sheet.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Owner name spelling**: "Luis Benda" is used on the page as the
  majority spelling found in reviews (2 of 3), but one review spells it
  "Luis Binda" — flagged here for the business to confirm before any real
  site launches.
- **Full weekly hours**: only a Friday ~7 AM opening appears as a
  point-in-time listing status; the page tells visitors to call or message
  to confirm hours rather than presenting a guessed schedule.
- **Service tiles** (weekly cleaning, chemical balancing, spa/hot tub care,
  equipment checks): generic categories of pool/spa maintenance work,
  informed by review vocabulary but not an itemized, owner-confirmed
  service menu. The page states this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Sunrise Pool & Spa or an actual customer's pool.
- **Reviews section**: only the real 4.9/10 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page. The full review texts read during research (Lee Maidana Kuhl,
  Cullen Godfrey, Laura Johnson, and others) stayed internal to this
  README, per `client-demo-site` §1/§3.
- **About-section narrative** ("A family that's kept College Station pools
  sparkling for over a decade," "catching small problems before they
  become expensive ones"): original marketing language informed by the
  real review vocabulary above — not a direct quote, not an invented
  testimonial.
- **Color palette**: no usable brand-color source (no website, Facebook
  cover photo not independently re-pulled) was found — the sunrise
  coral/gold/pool-blue system is derived from the business's own name,
  disclosed here as derived rather than sourced from an existing visual
  identity.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (coral, gold, pool blue, navy-teal) and fonts (Unbounded, Urbanist,
  Martian Mono). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis
  charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`. Note: this demo's own gold accent (`#ffb454`)
  is a distinct hex from Lewis Digital's gold (`#C9A227`) and is sourced
  from the sunrise-gradient concept, not from Lewis Digital's brand.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a pool service; checked against the
  gallery's blue-toned trade demos for general design-language collision —
  see table above.

## Notes for outreach

- A 4.9-star, 10-review record built on 10+-year customer relationships is
  a strong retention story to lead with — this business's biggest asset is
  loyalty, not volume.
- No existing website means there's no migration friction — a clean first
  web presence beyond Google and Facebook.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
