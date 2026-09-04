# B & B Electric Co — Demo Site (Batch 4, 2026-09-03)

One-page demo website for **B & B Electric Co** ((979) 778-3144 —
Electrician, 1819 Drillers Dr, Bryan, TX 77808). This is one of five demos
in an owner-authorized batch build (Next Plumbing & Heating, Andy's Auto
Repair, Skyes View Window Cleaning, All American Septic) — the normal "no
demo until the client confirms interest" gate does not apply here (Lead
instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/B+%26+B+Electric+Co+Bryan+TX`

- **4.4 stars, 17 reviews** on Google. Category: Electrician.
- Read the available review texts for tone (per `client-demo-site` §1).
  Repeated language: "friendly," "knowledgeable," "reasonably priced,"
  "fast response." Two short excerpts, read for internal tone research
  only, never published on the page: "Friendly, knowledgeable and
  reasonably priced. Excellent service!" / "Fast response and friendly."
- One older review (Bobby Martinez, 6 years ago) describes "always have
  stocked shelves" and staff who show rather than tell where an item is —
  language that reads more like an electrical-supply counter than a
  service call, consistent with the brief's note that B&B operates a
  shop-plus-yard, not just a truck-roll service.
- Two addresses appear across public records for this business (1819
  Drillers Dr and 255 Marino Rd), both in Bryan — per the Lead's brief this
  is one family business with a shop and a yard, not multiple branches.
  This demo shows only the primary Drillers Dr address, as instructed.
- Founding year (1986) and the two owner names (Johnny Bond, Ben Butler)
  come from the Lead's pre-verified business record, not independently
  re-discovered on the Google listing — used here as given, per the brief's
  instruction not to re-verify pre-verified facts from scratch.
- No business website found — Google listing shows "Add website" and "Add
  hours" prompts, confirming neither exists publicly.
- No usable brand-color source (no site, no public photo gallery) —
  palette below is derived from the electrical trade itself, disclosed as
  derived rather than sourced.

## Design direction

**A shop, not a franchise.** Two names have been on this sign for almost
forty years, so the design's structural signature is a **history timeline**
(1986 founding → "since" → today) placed right after the hero — a section
type no other demo in this batch uses. The palette leans into the trade's
own signal color: a muted safety/hi-vis yellow-green against graphite,
chosen specifically to sit apart from the amber/gold tones already used by
other trades in the wider gallery (95 Locksmith's amber, MK Fencing's gold,
Pete's Trees' amber) and from Frank Seale Electric's navy-and-concrete
system. Chakra Petch (a technical, slightly circuit-board-inflected
display face) pairs with Nunito Sans for body copy and IBM Plex Mono for
small data labels — a fresh three-font pairing not reused elsewhere in the
gallery.

**Signature element:** a **split hero with the photo on the left** (the
inverse of Maxey Way Window Cleaning's photo-docked-right pattern) and an
"Est. 1986" badge overlaid on the photo's corner — no other demo in this
batch uses a left-docked photo hero.

## Structural distinctness vs. other demos

B&B is not the only electrician in `demos/` — **Frank Seale Electric**
already exists (currently archived from the public gallery after the
2026-09-01 cold-call round, but its files remain in `demos/` and still
count for design-collision purposes).

| | B&B Electric Co (this demo) | Frank Seale Electric (existing) |
|---|---|---|
| Hero | Split, photo docked LEFT, dark graphite content panel | (Different treatment) |
| Signature element | History timeline (1986 → today) | (Not shared) |
| Palette | Graphite + muted hi-vis yellow-green | Navy + concrete tones |
| Type pairing | Chakra Petch + Nunito Sans + IBM Plex Mono | Space Grotesk-based |
| Section order | Hero → history timeline → services → reviews → area → contact | (Different order) |

Within this batch, B&B is also checked against Next Plumbing & Heating
(full-bleed dark hero + trade-split panel), Andy's Auto Repair
(banner/badge hero + decades ribbon), Skyes View (full-bleed bottom-anchored
hero + long-form single column), and All American Septic (plain
image-right hero + numbered process strip) — no shared hero treatment,
section order, or signature element across any of the five.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, history timeline, services, reviews, service area, contact, footer) |
| `styles.css` | All styling — sourced/derived client brand (graphite/hi-vis yellow-green, Chakra Petch/Nunito Sans/IBM Plex Mono) |
| `assets/hero-electrician.jpg` | Hero photo — free-license stock photo |
| `assets/panel-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of B&B
Electric Co or its actual crew/panels:

- **Hero** (`assets/hero-electrician.jpg`): [pexels.com/photo/34054464](https://www.pexels.com/photo/34054464/)
  ("An electrician uses a multimeter to test and diagnose connections in an
  open electrical panel").
- **Services section** (`assets/panel-detail.jpg`): [pexels.com/photo/257736](https://www.pexels.com/photo/257736/)
  ("Hand of electrician working on a circuit breaker panel with colorful
  wires").

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/b-and-b-electric
python -m http.server 8232 --bind 127.0.0.1   # preview on localhost:8232
```

Verified locally 2026-09-03: both images render correctly, no console
errors, content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **B & B Electric Co**
- Phone: **(979) 778-3144**
- Address: **1819 Drillers Dr, Bryan, TX 77808**
- Category: **Electrician**
- **Google rating: 4.4 out of 5, from 17 reviews** — verified 2026-09-03.
- Founding year (1986) and owner names (Johnny Bond, Ben Butler) — per the
  Lead's pre-verified business record.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hours**: no weekly hours are published on the listing at all (not even
  a single point-in-time reading) — the page tells visitors to call rather
  than presenting a guessed schedule.
- **Service-list items** (panel/breaker work, wiring, outlets/lighting,
  light commercial): generic categories of electrical work, not an
  itemized, owner-confirmed service menu. The page states this directly.
- **Both hero and services photos**: real stock photos, explicitly not
  photos of B&B's own crew or panels.
- **Reviews section**: only the real 4.4/17 rating is shown — actual review
  text stays internal to this README, per `client-demo-site` §1/§3. No
  quotes, real or paraphrased, appear on the page.
- **Timeline copy**: original narrative built around the verified founding
  year and owner names, not a direct quote or invented testimonial.
- **Color palette**: no usable brand-color source (no site, no visible
  truck/shop photos on the listing) — the graphite/hi-vis system is
  derived from the electrical trade itself, disclosed here as derived
  rather than sourced from an existing visual identity.

## Brand-rule compliance

- Client-facing page uses ONLY the derived client-brand colors (graphite,
  hi-vis yellow-green) and fonts (Chakra Petch, Nunito Sans, IBM Plex
  Mono). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- Checked against every other electrician demo in `demos/` (Frank Seale
  Electric) plus the other four demos in this same batch for
  hero/structure/palette collision — see table above.

## Notes for outreach

- The "two names on the truck since 1986" longevity story is itself a
  strong pitch point — very few competitors in Bryan can claim four decades
  under the same two owners.
- No existing website means no migration friction — a clean first web
  presence beyond the bare Google listing.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
