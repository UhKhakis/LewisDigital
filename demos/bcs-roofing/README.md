# BCS Roofing — Demo Site

One-page demo website for **BCS Roofing** (3095 Stonewood Dr, Franklin, TX
77856 · (979) 589-7663), a home-based, owner-operated roofing contractor
serving the Bryan–College Station area. This is a **new prospecting demo**
for an owner-authorized batch build sourced from HubSpot — not yet a client,
not a rebuild.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (header, shingle-course nav, hero, proof strip, about, services, process, area, reviews, contact/hours, CTA band, footer) |
| `styles.css` | All styling — client brand only (warm sand/tan + rust/terracotta + deep walnut + galvanized-flashing blue-gray; Oswald + Karla + Space Mono) |
| `assets/hero-roofer.jpg` | Hero photo — free-license stock photo, NOT a photo of BCS Roofing (see "Hero photo" below) |
| `pitch-sheet.html` | Printable one-page pitch sheet for outreach (OUR sales tool — Lewis Digital brand, per `client-demo-site` §4) |

## Preview

```bash
cd demos/bcs-roofing
python -m http.server 8099 --bind 127.0.0.1   # preview on localhost:8099 (use `python3` on macOS/Linux)
```

Do NOT use port 3000 — that serves the agency site. Verified locally on
2026-08-30: no console errors, no failed asset requests (200s on
`index.html`, `styles.css`, `assets/hero-roofer.jpg`), no horizontal
overflow at mobile (~380–424px), tablet (768px), and desktop (1100px+)
widths — checked via direct DOM/layout inspection (`getBoundingClientRect`
on every top-level section, confirming sequential, non-overlapping,
appropriately-sized boxes) after the browser preview tool in this sandbox
showed a transient screenshot-paint glitch on a couple of scrolled frames
that did not match the underlying DOM geometry; a fresh tab's screenshots
matched the DOM data exactly end-to-end (hero → proof → about → services →
process → area → reviews → contact → CTA band → footer), all confirmed
visually clean.

## Research (owner-authorized batch build — sourced by the Lead via live, non-headless Chrome, verified 2026-08-30)

**Source: Google Maps, verified 2026-08-30** — an address/phone discrepancy
exists across older directories: MapQuest and a stale HubSpot CRM record
list a different Bryan, TX address/phone for "BCS Roofing." The Lead
resolved this directly on Google Maps: the real, current, correctly-rated
listing is **3095 Stonewood Dr, Franklin, TX 77856, (979) 589-7663** — a
home-based roofing contractor operating out of Franklin (a small town
roughly 25–30 minutes north of Bryan/College Station) serving the
Bryan/College Station area. Only this address/phone is used anywhere on
this page.

- **Rating: 4.9 stars, 57 Google reviews** — a real, load-bearing proof
  point, shown on the page as the verified numbers.
- **Owner: "Mike"** — a Google-sourced AI Overview separately surfaced a
  surname ("Rohach") that is unconfirmed elsewhere, so the page refers to
  him only as "Mike," never with a surname.
- Review tag chips on the listing: "fair cost" (3), "wood repair" (2),
  "hail damage" (2), "roof replacement" (7), plus more not opened.
- Full review texts read (internal design research only — see the honesty
  note below):
  1. Angel Dear (Local Guide, 79 reviews/30 photos, 5★, 5 months ago,
     "Great price"): praised BCS as professional and reasonably priced for
     a shingle replacement, and noted they "offer more than just roofing"
     (mentioned looking into fence work too).
  2. Hugh Stearns (9 reviews, 5★, 3 years ago): a years-long repeat
     customer who called Mike "such a good guy," citing "great service and
     excellent craftsmanship."
  3. Nancy Hoyt (Local Guide, 14 reviews/1 photo, 5★, 4 years ago): noted
     that Mike, as the owner, was personally present for most of her roof
     installation, and that his crew did excellent work.
  - Plus inline Google snippets: "Excellent job, reasonable pricing, fast
    service." / "The work crew came when scheduled and finished at the
    time promised."
- **Themes extracted:** owner-operated, hands-on (Mike personally present
  on job sites), does more than just roofing, long-time loyal repeat
  customers, "excellent craftsmanship," a reliable/punctual crew, and
  fair/reasonable pricing repeated across multiple reviews. A small,
  trusted, personal-relationship business.
- **Photo evidence:** the one available Google Maps photo shows a tidy
  suburban house with a tan/beige composition shingle roof — clean,
  well-maintained residential context. No storefront exists (home-based
  operation), so there's no signage/building to extract additional colors
  from beyond this roof-and-house tone.

**Honesty note (per `client-demo-site` §1 and §3):** the review texts and
tag-chip themes above are internal design-research material only. They
informed tone, vocabulary, and which generic service categories to list —
they are **never** published as page copy, quoted, paraphrased into a fake
review card, or asserted as a confirmed fact (e.g., the "does more than
roofing/fence work" theme is *not* stated as a BCS Roofing fact anywhere on
the page, precisely because it traces to a single customer's review, not
BCS's own listing). Copy voice on the page (e.g., "the person who quotes
the job is the one who shows up to do it") is original marketing language
that reflects the *theme* the reviews independently established — not a
quote or paraphrase of any specific review, and no invented facts,
testimonials, or statistics.

## Brand system — how the research became the palette/type/layout

| Token | Value | Evidence |
|---|---|---|
| `--sand` `#efe4cb` / `--sand-panel` `#f8f1de` (page base) | Warm oat/sand | Read from the tan/beige composition-shingle-and-house tone in the one available Google Maps photo |
| `--rust` `#b1502e` / `--rust-deep` `#8a3c22` (primary accent, CTAs) | Rust/terracotta | Read directly from the rust-brown shingle tones in the sourced hero stock photo (see below) — deliberately a warmer, more orange rust than Bos Garage's brick-red `#8a3527` or Bryan Muffler's fire-engine `#c9202b` |
| `--walnut` `#33271b` / `--walnut-soft` `#6d5a45` (ink, dark sections) | Deep warm brown-black | Roofing felt/wood undertone; kept warm, not cool-slate, to match the residential/hands-on tone, not a "corporate contractor" mood |
| `--flash` `#4d6470` / `--flash-deep` `#374b55` (secondary accent, used sparingly) | Galvanized-flashing blue-gray | A real roofing material color (drip edge/flashing), used only for the area-coverage pills and the contact nameplate's top accent, never as the primary brand color |
| Typography: **Oswald** (condensed display) + **Karla** (body) + **Space Mono** (utility numbers/stamps) | Bold condensed sans = real trade/contractor signage and truck-door lettering; warm humanist body; mono for "stamped work order" numbers (proof stats, process step numbers, field-notes card, area pills) | See `ui-ux-pro-max` query notes below |
| Layout: full-bleed photo hero with bottom-anchored overlay copy + a hanging "job tag" signature badge; a below-header shingle-course anchor nav; job-tag icon cards for services; a real 4-stage process timeline | Vibe + material match | See "Structural distinctness" below |

**`ui-ux-pro-max` queries — documented per builder.md's pressure-test requirement:**

- `"roofing contractor home services trustworthy owner-operated" --design-system` returned a generic "Trust & Authority + Conversion" B2B pattern with a corporate blue/orange palette (`#1E40AF`/`#EA580C`) and EB Garamond/Lato ("legal, professional, formal") typography — a fit for a law-firm-style trust page, not a small, personal, hands-on home-based roofer. Set aside as a category default, not a choice for this business.
- `"warm rustic craftsman handmade" --domain typography` returned Amatic SC/Cabin, Fredoka/Nunito, and Caveat/Quicksand pairings — all skew twee/handwritten/playful, and Caveat is already used by the sibling Bos Garage demo. Not adopted.
- `"earthy terracotta rust warm construction" --domain color` returned a recipe-app palette and a slate-gray "Construction/Architecture" palette (`#64748B` primary) — neither reads as roofing-specific or personal.
- `"condensed bold industrial stencil sturdy" --domain typography` returned Barlow Condensed/Barlow (labeled "Sports/Fitness") — directionally close (bold condensed sans genuinely matches real contractor truck-door/signage lettering) but Barlow Condensed is already used by a sibling demo under `demos/` (confirmed via `grep` across all sibling `index.html`/`styles.css` files), so it was set aside for distinctness even though the *shape* of the recommendation was sound.
- **Fallback (per the skill's own 0-good-match rule):** no query returned a pairing that matched "small, personal, hands-on, home-based roofing contractor" without either being generic-corporate, twee, or already used by a sibling. Final call — **Oswald + Karla + Space Mono** — is an independent judgment call, informed by the *shape* of the Barlow Condensed result (bold condensed sans = real trade signage) without reusing its exact faces, and confirmed unused by any of the 5 built sibling demos (Bitter/Work Sans/Caveat, Fraunces/Inter, Alfa Slab One/Archivo/IBM Plex Mono, [dark HUD sans/mono], Cormorant Garamond/Jost — see the distinctness table below for the full list).

## Hero photo

A real, free-license stock photo, already sourced and placed before this
build started. **Source:**
[pexels.com/photo/37677394](https://www.pexels.com/photo/professional-roofing-installation-in-allen-texas-37677394/)
("Professional Roofing Installation in Allen, Texas"), photographer **Ryan
Stephens**, Pexels License (free for commercial use, no attribution
required, credited anyway).

This is a **stock photo of a generic roofer, not a photo of BCS Roofing,
its crew, or an actual BCS job site.** The page's `alt` text and a
visually-hidden caption say so explicitly, and so does this README.

## Structural distinctness vs. every other built demo under `demos/`

Checked against the current state of every demo folder under `demos/` before
finishing. Five demos are fully built (`bos-garage`, `brazos-valley-automotive`,
`bryan-muffler-performance`, `limitless-diesel-offroad`,
`neffs-majestic-hair-studio`); the other four batch siblings being built in
parallel (`frank-seale-electric`, `sanchez-landscaping`,
`bernados-landscaping-dirtworks`, `dean-plumbing-repair`) contained only an
`assets/` folder with no `index.html` at the time this build started, so
there was nothing yet to diff against for those four.

| | **BCS Roofing (this demo)** | Bos Garage | Brazos Valley Automotive | Bryan Muffler & Performance | Limitless Diesel & Offroad | Neff's (different trade) |
|---|---|---|---|---|---|---|
| Hero | Full-bleed photo, **bottom-left scrim overlay** copy, hero grows to fit content (no fixed-height clipping) | Centered copy above a full-bleed photo strip | Split grid, copy left / photo right | Split grid, riveted "signboard" left / photo right | No photo — centered SVG boost-gauge dial | Split grid, copy left / arch-framed photo + starburst badge right |
| Nav | **Two-tier: header (logo + call button only, no link list) + a separate below-header "shingle-course" anchor strip** (overlapping trapezoid tabs) | Single combined header+nav row | Single combined header+nav row (no ticker) | Utility phone-band above header, nav combined in header row | Fixed left sidebar rail, no top nav | Utility ribbon above header, nav combined in header row |
| Signature element | **Hanging "job tag"** — a rotated, punch-holed inspection-tag badge pinned to the hero photo's corner, showing the real 4.9★/57 rating | Hand-lettered "— ask for Bo" script signature | Roofline-framed photo "signplate" | Riveted metal "signboard" + scrolling ticker | Fixed sidebar "field log" rail | Starburst rating badge |
| Section order | Hero → proof strip → **about → services → process (4-stage) → area (coverage pills) → reviews → contact/hours → CTA band** | Hero → trust strip → about/story → services → hours → reviews → contact | Hero → fact-strip → services → about → visit → reviews | Hero → about → craft → services → hours → reviews | Hero → work → about → hours(console) → reviews | Hero → services → about/hours → reviews → contact |
| Services layout | Icon "job-tag" card grid (rust top-bar, line-art SVG icon per service) | Vertical "repair ticket" stub list | Numbered editorial index list | Asymmetric CSS grid of cells | Numbered field-log rows in the left rail | Numbered list, arch-framed photos |
| Palette | Warm sand/tan + rust/terracotta + deep walnut + galvanized-flashing blue-gray | Warm cream + muted barn-red + stone-tan + soft yellow | Warm cream + charcoal-brown roofline + steel + sign-tan/green | Near-black asphalt + steel-blue + sign-red + cream | Cool near-black + electric cyan + neon magenta | Ivory + deep plum + lavender + peach |
| Type pairing | **Oswald + Karla + Space Mono** | Bitter + Work Sans + Caveat | Work Sans + Roboto Slab | Alfa Slab One + Archivo + IBM Plex Mono | (dark HUD sans/mono set) | Cormorant Garamond + Jost |

No shared hero shape, nav pattern, signature element, section order, or type
pairing with any of the five built siblings. The "process" section's numbered
4-stage sequence is the only numbered-marker device on the page — used
because it's a real ordered sequence (call → estimate → work → walkthrough),
per the `frontend-design` skill's caution against numbering for decoration.

## What is REAL (verified & traceable)

- Business name: **BCS Roofing** — source: Google Maps listing, verified
  2026-08-30.
- Category: **Roofing contractor**, home-based, operating out of Franklin,
  TX, serving Bryan and College Station.
- Address: **3095 Stonewood Dr, Franklin, TX 77856**.
- Phone: **(979) 589-7663**.
- **Google rating: 4.9 stars from 57 reviews** — verified 2026-08-30 via a
  live (non-headless) Chrome session; shown on the page as "4.9" and "57
  Google reviews" in the proof strip, the hanging job tag, and the reviews
  section.
- Owner's first name **Mike** — from the Google Maps listing/reviews;
  surname deliberately omitted (see Research above).
- Directions/"See us on Google" links point to a real Google Maps search
  URL built from the verified name/address.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (roof replacement, roof repair/leak fixes, storm
  &amp; hail damage, wood &amp; decking repair, shingle &amp; composition
  roofing, inspections &amp; estimates): generic examples of what a
  residential roofing contractor typically offers — informed by the
  review tag-chip themes (hail damage, wood repair, roof replacement) but
  **not** a confirmed BCS Roofing service list. The page says so directly
  and points to the phone number to confirm.
- **"How a job with BCS goes" 4-stage process**: an illustrative, generic
  shape of how most owner-operated roofing jobs go, explicitly flagged on
  the page as such — not a confirmed description of BCS Roofing's actual
  workflow.
- **Hero photo** (`assets/hero-roofer.jpg`): a free-license stock photo
  (Pexels, Ryan Stephens) of a generic roofer — it is NOT a photo of BCS
  Roofing, its crew, or an actual BCS job site. Labeled as such in the
  page's `alt` text and visually-hidden caption, and here.
- **Reviews section**: only the real "4.9" and "57 Google reviews" numbers
  are shown. Review text/cards are an explicit "reviews will appear here
  once connected" placeholder — the review texts and tag-chip themes
  captured above were read strictly for internal design research (tone,
  vocabulary, believable service categories) per `client-demo-site` §1
  and §3 and are **never** published as page copy, quoted, or
  paraphrased into marketing copy, including the "more than just roofing"
  theme, which does not appear anywhere on the page as a claim.
- **Hours**: no verified hours snapshot exists for this listing at build
  time, so the page states "Call or message for hours" with an honest
  note rather than inventing or guessing a schedule.
- **Copy voice** (e.g., "the person who quotes the job is the one who
  shows up to do it," "Mike will tell you straight," "the person whose
  name is on the truck"): original marketing language written to reflect
  the real *theme* the reviews independently established (an
  owner-present, personal, long-term relationship business) — not a
  paraphrase or quote of any specific review, and no invented facts,
  testimonials, or statistics.
- **Phone/CTA buttons**: all `tel:` links go to the real, verified number.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY the real-research-derived brand tokens
  (`--sand`, `--sand-panel`, `--sand-deep`, `--rust`, `--rust-deep`,
  `--walnut`, `--walnut-soft`, `--flash`, `--flash-deep`, `--line`,
  `--white`) and fonts (Oswald + Karla + Space Mono). **Zero Lewis Digital
  gold (`#C9A227` family), zero Lewis charcoal `#16130e`, zero Lewis cream
  `#fbf8f1`** anywhere in `index.html`/`styles.css` — confirmed by
  inspection; this demo's sand base `#efe4cb` and walnut ink `#33271b` are
  deliberately different hex values from Lewis Digital's own cream/charcoal.
- Footer reads exactly "Designed by **Lewis Tech**" linking to
  `https://lewistechservices.com/` (owner instruction: never say "Lewis
  Digital" on client-facing pages).
- `pitch-sheet.html` was built fresh in Lewis Digital's own gold/charcoal/
  cream brand (following the sibling demos' pitch-sheet format), per
  `client-demo-site` §4 — it is our sales tool, not client-facing.
- Structurally distinct from all five built sibling demos — see the table
  above.

## Notes for the close call with the owner

- Lead with the real 4.9-star / 57-review rating — a strong, genuine proof
  point for a home-based one-crew operation.
- The "owner shows up personally" angle (echoed in the copy voice, never
  as a direct review quote) is a strong, honest hook grounded in the
  independently-corroborated review themes (Nancy Hoyt's and Hugh
  Stearns's reviews both center on Mike personally).
- The AI Receptionist pitch fits naturally: a one-person crew that's often
  physically on a roof can't always answer the phone, and a missed call is
  a missed job — same logic as the Bos Garage pitch, applied to roofing.
- If BCS Roofing (Mike) provides real hours, a real logo, real job-site
  photos, or confirms an actual service list, swap them into `index.html`
  and re-publish — the placeholders were deliberately built to be easy to
  replace once real assets exist.
- This folder is a standalone deliverable; this is an owner-authorized
  prospecting batch build, not yet a confirmed client.
