# Smart Water Irrigation Repair — Demo Site (Batch 3, 2026-09-03)

One-page demo website for **Smart Water Irrigation Repair** ((979) 446-8716
— Lawn sprinkler system contractor, Bryan, TX 77807 — no public street
address). This is one of five demos in an owner-authorized batch build
(1st Choice Steam Cleaning, Maxey Way Window Cleaning, Sunrise Pool & Spa
Services, All-Tex Roofing) — the normal "no demo until the client confirms
interest" gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Smart+Water+Irrigation+Repair+979-446-8716`

- **5.0 stars, 14 reviews.** Category (Google's own): **Lawn sprinkler
  system contractor**.
- Google's own review-tag summary (structured listing feature, not
  invented): **affordable ×5, leak ×4, leak repair ×3, backyard ×3,
  irrigation needs ×3, dependable ×3, cost savings ×2**.
- Named reviews read for research: Jack Day ("Honest, hardworking, and
  dependable... James is very knowledgeable and professional"), Jem Dawsom
  ("Been doing business with James for 10 yrs! Honest, friendly,
  Reliable! Does not have huge overhead like most business's and able to
  pass savings on to clients"), Susie Schoellman ("We had a French drain
  installed... one section of our sprinkler system quit working... he
  scheduled a call first thing Monday morning. He found the problem right
  away & made the necessary repair").
- Owner **James** confirmed by name directly from review text (multiple
  reviewers name him). "10 years" of experience/tenure independently
  corroborated by a reviewer's own account ("Been doing business with
  James for 10 yrs"), matching the Lead's pre-verified lead sheet.
- No public street address on the listing — a mobile repair operation.
- No business website found; per the Lead's brief, Yelp and Nextdoor
  directory listings are the only other public presence (not
  independently re-pulled from either platform in this research pass).

## Design direction

**Licensed, low-overhead, technically precise.** Reviewers don't describe
a folksy handyman — they describe a licensed technician who explicitly
avoids "huge overhead" and passes the savings on, diagnoses problems fast,
and follows through. That precision is the design's seed: a technical
"blueprint" register (navy blueprint-blue, a faint drafting grid behind
the hero copy, irrigation green as the single accent) reads as competent
and exact rather than warm/rustic — deliberately distinct from every
green/brown landscaping demo already in the gallery, which lean earthy and
organic rather than technical. Chivo (a sturdy grotesque) carries headings,
Work Sans carries body copy, and Azeret Mono marks stat/legend numbers — a
fresh three-font pairing not reused from any existing demo.

**Signature element:** a faint **blueprint grid** texture behind the hero
copy (drafting-paper lines, not a literal illustration) plus a numbered
**system legend** replacing the usual service-card grid — six repair
categories laid out like a schematic parts list rather than icon cards. No
other demo in the gallery uses a blueprint-grid texture or a legend-style
service list.

## Structural distinctness vs. other demos

No other demo in `demos/` is an irrigation contractor. Nearest neighbors by
green-accent palette are Mike's Complete Tree Services (green/brown, warm
organic) and Sanchez Landscaping (teal-green/cream, warm serif):

| | Smart Water (this demo) | Sanchez Landscaping (existing) |
|---|---|---|
| Hero | Navy blueprint-blue + faint drafting grid | (different treatment, warm serif-led) |
| Services layout | Numbered schematic legend (list, not cards) | Card grid |
| Palette | Navy blueprint + irrigation green + paper white | Teal-green + cream |
| Type pairing | Chivo + Work Sans + Azeret Mono | Fraunces + Inter + Space Mono |
| Signature element | Blueprint grid texture + legend list | (Distinct — not shared) |

The "solo licensed operator, low overhead" trust framing (stats strip +
badge card) is unique to this demo — no other demo foregrounds licensing
and overhead as the core trust signal.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, stats, services/legend, about, reviews, service area, contact, footer) |
| `styles.css` | All styling — sourced client brand (navy blueprint/irrigation green, Chivo/Work Sans/Azeret Mono) |
| `assets/hero-sprinkler.jpg` | Hero photo — free-license stock photo |
| `assets/sprinkler-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of Smart
Water Irrigation Repair or James's own work:

- **Hero** (`assets/hero-sprinkler.jpg`):
  [pexels.com/photo/37720375](https://www.pexels.com/photo/garden-sprinkler-watering-lush-green-lawn-37720375/)
  ("Garden Sprinkler Watering Lush Green Lawn"), photographer **S&oacute;c
  N&#259;ng &#272;&#7897;ng**.
- **Services section** (`assets/sprinkler-detail.jpg`):
  [pexels.com/photo/25283561](https://www.pexels.com/photo/close-up-of-a-sprinkler-25283561/)
  ("Close up of a Sprinkler"), photographer **Q. H&#432;ng Ph&#7841;m**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/smart-water-irrigation-repair
python -m http.server 8224 --bind 127.0.0.1   # preview on localhost:8224
```

Verified locally 2026-09-03: both images render correctly, blueprint grid
renders correctly, no console errors, content renders correctly at desktop
and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Smart Water Irrigation Repair**
- Owner: **James** — first name confirmed directly from multiple reviews
  on the public listing.
- Phone: **(979) 446-8716**
- Town: **Bryan, TX 77807**
- Category: **Lawn sprinkler system contractor** (Google's own category
  label).
- **Google rating: 5.0 out of 5, from 14 reviews** — verified 2026-09-03.
- **Review-tag data and counts** (affordable ×5, leak ×4, leak repair ×3,
  backyard ×3, irrigation needs ×3, dependable ×3) — Google's own
  structured summary feature on the same listing, same date.
- **10 years of experience** — independently corroborated by a reviewer's
  own account ("Been doing business with James for 10 yrs"), consistent
  with the Lead's pre-verified lead sheet.
- **No public street address** — confirmed by its absence on the listing;
  the page states "mobile repair operation" rather than guessing.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **"Licensed"**: stated per the Lead's pre-verified lead sheet
  ("solo licensed operator"), not independently re-verified against a
  state licensing database in this research pass.
- **Full weekly hours**: only a Friday ~8 AM opening appears as a
  point-in-time listing status; the page tells visitors to call or message
  to confirm hours rather than presenting a guessed schedule.
- **Service legend items** (leak diagnosis, sprinkler head repair, valve &
  zone repair, controller/timer setup, backyard system checks, seasonal
  start-up/shutdown): generic categories of irrigation-repair work,
  informed by review vocabulary (leak, backyard, irrigation needs) but not
  an itemized, owner-confirmed service menu. The page states this
  directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Smart Water or James's own equipment/work.
- **Reviews section**: only the real 5.0/14 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page. The full review texts read during research (Jack Day, Jem
  Dawsom, Susie Schoellman, and others) stayed internal to this README,
  per `client-demo-site` §1/§3.
- **About-section narrative** ("A licensed irrigation tech, not a
  big-overhead outfit," "savings that get passed straight to the
  customer"): original marketing language informed by the real review
  vocabulary above ("does not have huge overhead," "able to pass savings
  on to clients") — not a direct quote, not an invented testimonial.
- **Color palette**: no usable brand-color source (no website, no vehicle
  or signage photos found) was found — the blueprint navy/irrigation-green
  system is derived from the technical nature of the job, disclosed here
  as derived rather than sourced from an existing visual identity.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (blueprint navy, irrigation green, paper white) and fonts (Chivo, Work
  Sans, Azeret Mono). **Zero Lewis Digital gold (`#C9A227` family), zero
  Lewis charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is an irrigation contractor; checked against
  the gallery's green-accented landscaping demos for general
  design-language collision — see table above.

## Notes for outreach

- A perfect 5.0/14 record where "affordable" is the single most-mentioned
  word is an unusually strong, easy pitch point for a solo operator who
  might worry a website looks too "big business."
- No existing website means there's no migration friction — a clean first
  web presence beyond Google, Yelp, and Nextdoor.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
