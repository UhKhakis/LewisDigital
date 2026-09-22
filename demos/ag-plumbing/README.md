# A G Plumbing — Demo Site

One-page demo website for **A G Plumbing** (233 Marino Rd, Bryan, TX
77808), built for Lewis Digital's owner-authorized batch-10 build (round
3, batch B). Static HTML + CSS, no build step.

## Research (per `client-demo-site` §1 — real reviews before design)

**Source:** A G Plumbing's public Google Business Profile,
https://www.google.com/maps/search/A+G+Plumbing+Bryan+TX+233+Marino,
verified live via browser 2026-09-21.

- **Rating:** 4.8 stars, 60 reviews.
- **Category:** Plumber.
- **Address / phone:** 233 Marino Rd, Bryan, TX 77808 · (979) 778-8500.
- **Hours:** only a single fact is verifiable — the listing showed
  "Closed · Opens 7:30 AM Tue" when checked on Monday 2026-09-21. Full
  weekly hours aren't published, so the page shows that one verified data
  point plus a placeholder, per §3.
- **No independent website** — the Google listing is the company's only
  public presence, and it has no posted photos to extract color from, so
  the brand is **derived**, not photo-sourced (§1's fallback clause).
- **Established 2000, grown from a 2-person crew to 20+ plumbers** — per
  the build brief, a meaningfully bigger, more organized operation than
  most leads in this campaign.

**Reviews read for internal design research** (3 read in full, plus the
listing's own review-topic tags, not published as page copy per §1/§3):

- Mac P (Local Guide, 5★): called the day the water heater went cold, got
  a next-morning appointment, "dropped in a new Rheem in about 2 hours."
  Owner's standardized reply: "Thank you for the 5-star review, Mac. We
  appreciate you giving us a call..."
- Laura Matas (5★): "A G Plumbing had the best price in town when it came
  time to replace my water heater... Mike arrived right on [time]..." —
  names a technician, Mike, directly.
- Kelly Rice (5★): "A G Plumbing helped us during the horrendous winter
  storm in February 2021. We had a broken pipe that destroyed quite a
  bit. A G Plumbing came to our home quickly... charged an extremely
  fair [price]." This is the source for the page's storm-response
  section.
- Google's own review-topic tags on the listing: "scheduling" (5), "water
  heater repair" (3), "quality work" (2), "punctuality" (3), "efficiency"
  (2), "job" (5), "work" (2).

**Vocabulary/theme takeaway:** every owner reply reads as a genuine,
consistent company voice (not one person texting back ad hoc) — a
hallmark of an organized, multi-person operation rather than a solo shop.
Themes center on fast scheduling, fair pricing, and a real emergency
response during the historic February 2021 Texas winter storm (Uri). This
reads as a confident, established company that's grown in scale without
losing service quality — the direct opposite framing from most other
leads in this campaign, and the seed for a clean, stats-forward corporate
design rather than a small-shop one.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Cobalt blue (`--cobalt #1e5f9e`) + white + bright teal (`--teal #2fb88f`) + deep ink-blue | Confident, modern-corporate — deliberately more saturated than Dean Plumbing & Repair's muted navy and unrelated to Next Plumbing & Heating's iron-brown/copper system elsewhere in this repo |
| Typography | Manrope (geometric sans, display **and** body — no serif anywhere) + Roboto Mono (stat labels) | The only demo in the repo (of the three plumbing demos) using an all-sans, no-serif type system — reads as modern/corporate rather than artisan/traditional |
| Hero | Full-bleed photo hero with a floating white stat card (26 yrs / 20+ plumbers / 4.8★ / founded 2000) overlapping the bottom edge | A SaaS-style "floating card" hero not used by any other demo in the repo |
| Signature element | A cobalt "storm-ready" callout section built from the real Feb 2021 winter-storm review, plus a vertical growth-timeline (2000 → 2021 → Today) in the About section | No other plumbing demo tells a scale/growth story — this one leans into being the biggest operation in this batch, honestly |
| Reviews | Rounded white card on a cloud-gray section | Distinct from the other four demos' badge/dial/ticket treatments |

## Structural distinctness

**Other plumbing demos already in the repo:**
- `demos/dean-plumbing-repair/` — muted navy + brass + pipe-blue, IBM Plex
  Serif/Sans/Mono, a clip-path hero with a "valve tag" badge — a
  traditional, single-technician feel (derived brand, no reviews to draw
  from).
- `demos/next-plumbing-heating/` — iron-brown + water-blue + copper,
  Spectral/Karla/JetBrains Mono, a centered full-bleed scrim hero with a
  two-trade split panel — a warm, professional two-trade shop.

A G Plumbing's bright cobalt/teal/white system, all-Manrope geometric
sans type (no serif at all, unlike both siblings above), floating
stat-card hero, and growth-timeline signature section reflect a
meaningfully larger, more corporate operation — distinct in palette,
type, hero mechanics, and section content from both existing plumbing
demos.

## What is REAL (verified & traceable)

- Business name, category, address, phone: A G Plumbing's Google Business
  Profile, verified 2026-09-21.
- Rating: 4.8 stars, 60 reviews.
- Single verified hours data point: closed Monday, opens 7:30 AM Tuesday
  (observed 2026-09-21).
- "Google" link points to the exact `source_url` given in the build brief.
- "Established 2000 / 26 years / grown from 2 to 20+ plumbers" — per the
  build brief.
- The February 2021 winter-storm response detail is paraphrased from a
  real customer review (Kelly Rice), not the business's own statement, but
  real third-party public review text — disclosed as paraphrased, not
  quoted verbatim.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Hero photo** (`assets/hero-plumbing.jpg`) and **storm-section photo**
  (`assets/wrench-detail.jpg`): free-license Pexels stock photos — not
  photos of A G Plumbing's actual crew, trucks, or job sites. Captioned as
  illustrative in both the visible `alt` text and on-page caption.
- **Services list**: generic examples for a full-service plumbing
  company, informed by real review content (water heaters, storm
  response) but not A G Plumbing's confirmed price list or exact service
  menu — labeled "confirm by phone."
- **Full weekly hours**: not published by the listing; page shows only
  the one verified data point plus a placeholder.
- **Reviews section**: only the real 4.8/60 rating is shown; review text
  stays an explicit "will appear here once connected" placeholder — no
  scraped review quotes appear as page copy (the storm section paraphrases
  one review as disclosed business narrative, not as a quoted review).

## Photo sourcing

- Hero (`assets/hero-plumbing.jpg`): [pexels.com/photo/6419128](https://www.pexels.com/photo/plumber-installs-pipe-fittings-6419128/)
  ("Plumber Installs Pipe Fittings"), photographer **Anıl Karakaya**.
- Storm section (`assets/wrench-detail.jpg`): [pexels.com/photo/32588548](https://www.pexels.com/photo/plumber-repairing-pipe-with-wrench-indoors-32588548/)
  ("Plumber Repairing Pipe with Wrench Indoors"), photographer
  **Bulat843**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free for commercial use, no attribution required, credited here anyway).

## Brand-rule compliance

- Client page uses only the derived cobalt/teal/white/ink-blue system —
  no Lewis Digital gold `#C9A227`, no Lewis charcoal `#16130e`, no Lewis
  cream `#fbf8f1` anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  `https://lewistechservices.com/` — no "Lewis Digital" anywhere on the
  client-facing page.
- **"See us on Google" link confirmed present** in three places
  (hero, hours/location card, and the closing contact section), all
  pointing to the exact brief `source_url`:
  `https://www.google.com/maps/search/A+G+Plumbing+Bryan+TX+233+Marino`.
- `pitch-sheet.html` keeps the Lewis Digital gold/charcoal/cream palette
  untouched (it's our own sales tool) with A G Plumbing's real name,
  address, phone, and rating.

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero with stat card, storm-ready callout, services, growth-timeline about section, hours & location, reviews, contact, footer |
| `styles.css` | Full client-brand theme |
| `assets/hero-plumbing.jpg` | Hero photo (stock, illustrative) |
| `assets/wrench-detail.jpg` | Storm-section photo (stock, illustrative) |
| `pitch-sheet.html` | Lewis Digital-branded printable sales sheet (untouched brand) |

## Preview

```bash
cd demos/ag-plumbing
python3 -m http.server 8305 --bind 127.0.0.1
```
