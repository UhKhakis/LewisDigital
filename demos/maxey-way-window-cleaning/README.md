# Maxey Way Window Cleaning Service — Demo Site (Batch 3, 2026-09-03)

One-page demo website for **Maxey Way Window Cleaning Service**
((979) 575-1759 — Window cleaning service, Bryan, TX 77803). This is one of
five demos in an owner-authorized batch build (1st Choice Steam Cleaning,
Sunrise Pool & Spa Services, Smart Water Irrigation Repair, All-Tex
Roofing) — the normal "no demo until the client confirms interest" gate
does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps + Yelp, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Maxey+Way+Window+Cleaning+979-575-1759`

- **5.0 stars, 1 review** on Google. Category: Window cleaning service.
- The single Google review, read for tone research (Bill Wangelin, 3
  reviews): "He does a great job at a great price I won't use anybody
  else!" — owner reply: "Thank you sir for me a chance to make your
  windows shine!" This review text stays internal per `client-demo-site`
  §1/§3; the page shows only the rating and an honest disclosure of how
  small the sample is.
- No owner name is stated anywhere on the listing or in the review text
  (unlike the other four businesses in this batch, where an owner's first
  name appeared directly in review text) — the page therefore refers to
  "the owner" generically rather than inventing a name.
- Google's own "Areas served" data: **Brazos County and nearby areas**. No
  public street address on the listing — a mobile/local service business,
  not an address to guess at.
- Cross-checked on Yelp (`m.yelp.com` / `yelp.com` search results,
  verified 2026-09-03): Maxey Way also shows **5.0 stars (1 review)** on
  Yelp, with the review snippet "High quality service at a fair price,
  strongly recommend. Professional, personable and consistent..." and a
  separate listing snippet noting "very responsive with calls and texts."
  Both platforms show the same small-but-perfect pattern — read for tone
  research, not reproduced as page copy.
- No business website found on either platform; MapQuest and Yelp
  directory listings are the only other public presence.

## Design direction

**Honestly small, genuinely good.** This is the thinnest online presence in
the batch — one real review on each of two platforms, both five stars, both
describing a fair, responsive, personable operator. Rather than dress this
up or imply a bigger footprint, the design leans into "small, local,
one property at a time" as the actual selling point, with an explicit
"full transparency" disclosure in the reviews section. Visually: clean
glass, bright sky, and a single warm sun-glint accent — the brightest,
lightest-value palette in the whole gallery (most other demos, including
every dark-background one, sit at a very different value range). Schibsted
Grotesk carries headings, Plus Jakarta Sans carries body copy, Spline Sans
Mono marks data labels — a fresh three-font pairing not reused elsewhere.

**Signature element:** a diagonal **squeegee-streak divider** between the
hero and the rest of the page — two soft diagonal color bands (sky-blue and
sun-yellow) suggesting a streak wiped across glass. No other demo in the
gallery uses a diagonal streak motif as a section transition.

## Structural distinctness vs. other demos

No other demo in `demos/` is a window cleaner. Nearest neighbors by palette
temperature (blue-toned trades) are Static Heating and Air Conditioning,
Dean Plumbing & Repair, and Frank Seale Electric — all darker/more
saturated navy, none built around this much white space or a single-review
honesty framing:

| | Maxey Way (this demo) | Static Heating & Air (existing) |
|---|---|---|
| Hero | Minimalist, mostly white/glass space, photo docked right | Full darker hero treatment |
| Signature element | Diagonal squeegee-streak divider | (Distinct — not shared) |
| Palette | Bright sky-blue + glass-white + sun-yellow | Deeper blue + burnt orange |
| Type pairing | Schibsted Grotesk + Plus Jakarta Sans + Spline Sans Mono | Manrope + Inter + Space Mono |
| Section order | Hero → streak divider → honesty/trust strip → services → about → reviews → service area → contact | (Different order) |

The explicit "full transparency" one-review disclosure block is unique to
this demo — no other demo in the gallery has a review count this low, so no
other demo needed this framing.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, streak divider, trust strip, services, about, reviews, service area, contact, footer) |
| `styles.css` | All styling — sourced client brand (sky blue/glass/sun-yellow, Schibsted Grotesk/Plus Jakarta Sans/Spline Sans Mono) |
| `assets/hero-window-cleaning.jpg` | Hero photo — free-license stock photo |
| `assets/squeegee-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of Maxey
Way or its actual work:

- **Hero** (`assets/hero-window-cleaning.jpg`):
  [pexels.com/photo/6197111](https://www.pexels.com/photo/man-cleaning-the-windows-6197111/)
  ("Man Cleaning The Windows"), photographer **Tima Miroshnichenko**.
- **Services section** (`assets/squeegee-detail.jpg`):
  [pexels.com/photo/634007](https://www.pexels.com/photo/man-in-blue-crew-neck-shirt-634007/)
  ("Man in Blue Crew Neck Shirt" — cleaning glass with a squeegee),
  photographer **Nathan Cowley**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/maxey-way-window-cleaning
python -m http.server 8222 --bind 127.0.0.1   # preview on localhost:8222
```

Verified locally 2026-09-03: both images render correctly, streak divider
renders correctly, no console errors, content renders correctly at desktop
and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Maxey Way Window Cleaning Service**
- Phone: **(979) 575-1759**
- Town: **Bryan, TX 77803**
- Category: **Window cleaning service**
- **Google rating: 5.0 out of 5, from 1 review** — verified 2026-09-03.
- **Yelp rating: 5.0 out of 5, from 1 review** — verified 2026-09-03,
  cross-checked independently of the Google listing.
- **Service area**: "Brazos County and nearby areas" — Google's own "Areas
  served" data on the listing, not a guess.
- **No public street address** — confirmed by its absence on the listing;
  the page states this honestly rather than guessing or silently omitting
  it.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Owner name**: not stated anywhere in the public listing or review
  text — the page deliberately says "the owner" rather than inventing a
  name, unlike the other four demos in this batch where a first name was
  independently confirmed.
- **Full weekly hours**: only a Friday ~8 AM opening appears as a
  point-in-time listing status; the page tells visitors to call or message
  to confirm hours rather than presenting a guessed schedule.
- **Service tiles** (interior/exterior windows, screens & sills,
  storefronts): generic categories of window-cleaning work, not an
  itemized, owner-confirmed service menu. The page states this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Maxey Way or its actual work.
- **Reviews section**: only the real 5.0/1 rating (Google) and the matching
  Yelp rating are shown — the actual review text from either platform
  stays internal to this README, per `client-demo-site` §1/§3. The page
  explicitly flags the small sample size rather than implying a bigger one.
- **About-section narrative** ("local, responsive, easy to reach"):
  original marketing language informed by the real review vocabulary
  above ("professional, personable and consistent," "very responsive with
  calls and texts") — not a direct quote, not an invented testimonial.
- **Color palette**: no usable brand-color source (no website, no visible
  storefront/vehicle photos) was found — the sky-blue/glass/sun-yellow
  system is derived from the nature of the work (clean glass, daylight),
  disclosed here as derived rather than sourced from an existing visual
  identity.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (sky blue, glass-white, sun-yellow) and fonts (Schibsted Grotesk, Plus
  Jakarta Sans, Spline Sans Mono). **Zero Lewis Digital gold (`#C9A227`
  family), zero Lewis charcoal `#16130e`, zero Lewis cream `#fbf8f1`**
  anywhere in `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a window cleaner; checked against the
  gallery's other blue-toned trade demos for general design-language
  collision — see table above. Also noted per the Lead's brief: a sibling
  window-cleaning business (Maxey Way's own eventual "competitor" pairing)
  is planned for a future batch, not this one — no action needed now.

## Notes for outreach

- The honesty framing here ("full transparency," small but perfect record)
  is itself a pitch point: it shows the business exactly how thin its
  current online footprint is, and how a real website plus review
  requests could change that.
- No existing website means there's no migration friction — a clean first
  web presence beyond Google, Yelp, and MapQuest directory listings.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
