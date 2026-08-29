# Bos Garage Auto Repair — Demo Site (Client #1, v3 — REAL CLIENT BRAND, replaces DERIVED v2)

One-page demo website for **Bos Garage Auto Repair** (1617 Briarcrest Dr, Bryan,
TX 77802 · (979) 906-0924), rebuilt **from scratch on 2026-08-28** using real
research gathered by the Lead through a live, non-headless Chrome session
(Google Maps' JS-heavy review/photo UI doesn't render in a sandboxed
`WebFetch`/headless pass — that's why v2 missed it).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Why this is v3, not a v2 patch

The v2 README (2026-08-19) concluded **"Bos Garage has no usable brand
imagery to draw from"** and **"no real brand signals exist to extract,"**
and fell back to a fully DERIVED palette: slate/gunmetal + garage red +
hazard stripes, Oswald + Barlow. That is exactly the generic "auto shop =
dark/red/industrial" trade-category default that `client-demo-site` SKILL.md
§1 exists to prevent — and the "no signal" conclusion was a **tooling
failure**, not reality: a sandboxed browser couldn't render Google Maps'
photo viewer or review list, so it reported zero photos and zero reviews
that, in fact, exist. A real (visible, non-headless) Chrome session on
2026-08-28 found one clear storefront photo and read six review texts in
full. This version replaces the derived guess with a brand built on that
real material — never the trade category by itself.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, trust strip, about/story, services, hours, reviews, contact, footer) |
| `styles.css` | All styling — real client brand (warm cream + muted barn-red + warm stone-tan + soft bollard-yellow; Bitter + Work Sans + one Caveat signature accent) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (OUR sales tool — deliberately left in Lewis Digital brand, NOT modified) |

No raster hero photo in this version — see "Hero art" below for why, and how
the illustration was built to be grounded in the real photo evidence without
reproducing it.

## Preview

```bash
cd demos/bos-garage
python -m http.server 8093 --bind 127.0.0.1   # preview on localhost:8093 (use `python3` on macOS/Linux)
```

Do NOT use port 3000 — that serves the agency site. Verified locally on
2026-08-28: no console errors, no failed asset requests (the hero is an
inline SVG, so there's nothing to 404), no horizontal overflow at desktop or
mobile widths, WCAG contrast ratios for all body/heading text pairs range
7.1:1–15.5:1 (checked programmatically against the actual rendered
`color`/`background-color`).

## Research (gathered live via non-headless Chrome, 2026-08-28)

**Source: Google Maps listing, searched "Bos Garage Auto Repair TX," verified 2026-08-28**
(https://www.google.com/maps/search/Bos+Garage+Auto+Repair+TX)
- Business name on Google: **Bos Garage Auto Repair**. Yelp/MapQuest/Yahoo
  Local list the same address/phone as "Bo's Garage" — the owner goes by
  **Bo**. The on-page business name stays the verified Google name
  throughout; "Bo" is used only as a warm, personal second reference in copy
  (hero tagline, about section, contact CTA) — not a rename.
- **Rating: 5.0 stars, 7 Google reviews** (real count — supersedes the v2
  README, which reported the listing showed no review count; a real browser
  session shows one).
- Hours: live status read "Open · Closes 6 PM" on the afternoon of
  2026-08-28. Google still only exposes partial info, so the page keeps
  "Call or message for hours" as the primary statement and states this one
  snapshot with its date, same honest-placeholder discipline as v2.
- **Wheelchair accessible entrance** — attribute from the same listing,
  originally recorded 2026-08-19 (not re-verified on 2026-08-28, but
  listing attributes rarely change; dated accordingly on the page).
- Address/phone confirmed exactly as in `leads/leads.csv`.

**Source: Google Maps reviews (via the knowledge-panel reviews modal), read 2026-08-28** —
6 of 7 review texts read in full or substantial excerpt, plus one via Yelp:

1. Kevin L (12 reviews, 5★, 5 months ago): "Bo is a very thorough mechanic
   with excellent service all the way around. He has cared for my 3
   vehicles for over 2 years now. His charges are very fair and he
   communicates your choices by text, photos, and videos. You can choose
   dealer …" (truncated by Google's "More")
2. Sorghum (2 reviews, 5★, a week ago): "Bo's auto shop is truly amazing! He
   has been taking care of my 2009 Toyota for over five years, and I
   couldn't be happier with his service. …"
3. q thistle (5 reviews, 5★, a week ago, "Great price"): "Bo has been taking
   care of our Honda CR-V Hybrid for over three years, including tire
   rotations, oil changes, brake fluid changes, and other maintenance. He is
   extremely professional, thorough, and trustworthy. …"
4. Hussein Al Jebaei (Local Guide, 28 reviews, 5★, 2 weeks ago): "Bo is a
   very honest and knowledgeable mechanic. He also does his job with care
   and excellence. I had oil change, lower arm control, and end links
   replaced with dealer parts."
5. Naveen Hari (Local Guide, 9 reviews, 5★, 2 weeks ago, "Reasonable
   price"): "A true hidden gem! My friend and I both brought our cars in for
   repairs, and the service was excellent. He was extremely knowledgeable,
   clearly explained exactly what needed to be done, and made the whole
   process easy to understand. …"
6. Yelp (same address/phone confirmed): "Great service & great pricing. Top
   notch mechanics, highly recommended. They were fast, I always go here and
   they don't take advantage of you."

**Themes extracted (internal design research only — see the honesty note
below):** every review names the owner personally ("Bo") and describes a
multi-year personal relationship (2, 3, 5+ years with the same mechanic).
Repeated words: fair, honest, trustworthy, thorough, professional, hidden
gem, reasonable price, easy to understand. Tone is warm and personal, not
aggressive or tuner/racing. This is a known-by-name relationship business,
not a high-volume chain-feel shop — the opposite of the "dark industrial
garage" trade default the v2 derived brand fell into.

**Source: Google Maps photo, credited "Tianyi Lu," dated Feb 2026, verified 2026-08-28** —
one clear storefront photo exists (the v2 README's "no photos" claim was a
tooling-failure gap, not reality):
- White/off-white corrugated-metal pole-barn-style building
- Deep barn-red/maroon standing-seam roof trim along the roofline edge — a
  muted, weathered brick-red, not a bright/neon red
- Warm gray-tan stone/masonry veneer wainscot on the front-left corner
- Red hand-lettered signage ("Bos Garage Auto Repair") on a white panel
  above the bay doors
- Two dark garage bay door openings
- A yellow safety bollard/pipe guard by one door
- Overall impression: small-town, bright, plainspoken pole-barn garage — not
  a moody/dark/neon-accent "tuner shop" look

## Brand system — how the research became the palette/type/layout

| Token | Value | Evidence |
|---|---|---|
| `--cream` `#f6efe2` (page base) | Warm off-white pole-barn siding | The storefront photo's dominant wall tone is white/off-white corrugated metal, not cool white or dark |
| `--barn-red` `#8a3527` / `--barn-red-deep` `#6c281c` (primary accent, CTAs, headline accent) | Muted, weathered brick-red roofline trim | Directly reads the photo's roofline color — deliberately desaturated/darkened, NOT the bright safety/toolbox red (`#c2351f`) the v2 derived brand used, and not the neon-orange used by Bryan Muffler's demo |
| `--stone` `#a89173` / `--stone-deep` `#7a6650` (secondary accent, borders, muted text) | Warm gray-tan stone veneer wainscot | Same photo, the front-left corner masonry |
| `--yellow` `#d9a13b` (sparingly, hero illustration + accents) | Safety bollard | The yellow pipe guard by the bay door — used only as a small decorative accent, never as text color, to keep contrast safe |
| `--ink` `#2b2118` (body text; also the one dark section, `.contact`) | Warm near-black, not cool slate | Deliberately warm-toned (unlike the v2 derived `--night` `#1f2933` cool gunmetal) to match a bright, warm building, not a moody shop-bay mood |
| Typography: **Bitter** (display, slab serif) + **Work Sans** (body) + **Caveat** (one hand-lettered signature accent only) | Warm, sturdy, sign-painted feel; used ONCE for "— ask for Bo" | Echoes the photo's red hand-lettered sign without literally reproducing it. Queried `ui-ux-pro-max --domain typography` for "vintage sign painted slab serif hardware humanist" and "warm trustworthy small town service craftsman" — no pairing in the database matched a personal/small-town-trust brief without going either twee-rounded (Fredoka/Nunito) or corporate (Lexend/Source Sans); fell back to independent judgment per the skill's own fallback rule, landing on Bitter+Work Sans specifically because neither face is used by any sibling demo (Oswald/Barlow, Fraunces/Inter, Anton+Oswald+Roboto Condensed, Bebas Neue+Karla+Space Mono, Cormorant Garamond+Jost) |
| Layout: centered hero + full-bleed illustrated "shopfront strip," ticket-stub services list, single wide nameplate card, rubber-stamp review badge | Vibe + material match | See "Structural distinctness" below |

**`ui-ux-pro-max` color check:** queried `--domain color` for "barn red cream
stone warm rustic americana" — closest directional matches were a
"warm ink + amber on cream" notes app palette and a "warm brown + cream"
bakery palette, both confirming the warm-cream-plus-earth-accent family is a
sound direction, but neither was adopted verbatim (a bakery palette risks
reading as a cafe, not a garage) — exact hex values were derived from the
photo evidence above instead.

## Hero art: why an illustration, not a photo

The real storefront photo is a third party's copyrighted Google Maps upload
(credited "Tianyi Lu") — not ours to republish on a client's site. Per
`client-demo-site` §3, an unowned photo isn't a usable asset; the honest
options are a real (licensed) photo, an AI-generated illustrative stand-in,
or omission. This version uses a **hand-built inline SVG illustration**
(`.hero__illustration` in `index.html`) that reproduces the photo's
described *elements* — white corrugated wall, red standing-seam roofline,
stone corner, two bay doors, a hand-lettered sign (rendered as an abstract
red squiggle, not literal invented text), a yellow bollard — without
copying the photograph itself. The page's `figcaption` and this README both
say plainly that it's an illustration grounded in the real photo, not a
photo of the shop.

## Structural distinctness vs. every other demo under `demos/`

Diffed against the current state of all four other demos before finishing,
per `client-demo-site` §2 (especially the other three auto shops, since two
shops in the same trade converging on one look is the most-flagged failure):

| | Bos Garage (this v3) | Brazos Valley Automotive | Bryan Muffler & Performance | Limitless Diesel & Offroad | Neff's (different trade) |
|---|---|---|---|---|---|
| Hero | Centered copy + full-bleed illustrated "shopfront strip" banner below it | Split grid, copy left / raster photo right | Full-bleed gradient with scrolling keyword ticker above nav | Sidebar rail nav + "opening log" panel + raster photo, no centered hero at all | Centered copy over a dark hero photo |
| Section order | Hero → **trust strip (rating) → about/story → services** → hours → reviews → contact | Hero → fact-strip (location/hours) → services → about → reviews → contact | Hero → oversized number band → services → **reviews before about** → about → contact | Hero → services → about → contact → **reviews last** | Hero → services → about → reviews → contact |
| Services layout | Vertical "repair ticket" stub list (circular code stamp + dashed tear line) | Numbered editorial index list (`01`–`08`) | Asymmetric CSS grid of cells | Numbered field-log rows inside a fixed left rail | Numbered list, arch-framed photos |
| Signature element | Hand-lettered "— ask for Bo" script signature tag + a "colors read from the real photo" swatch strip | Split editorial photo + horizontal fact-strip | Scrolling ticker + oversized number band | Fixed left sidebar "field log" rail nav | Arch-framed portrait photos |
| Nav | Single sticky bar, circular badge mark | Minimal masthead, no top strip | Ticker + condensed slash-brand nav | Fixed left rail with numbered links, no top nav | Sticky header, no ticker |
| Palette | Warm cream + muted barn-red + warm stone-tan + soft yellow | Warm cream + navy + copper | Near-black + safety orange | Olive/khaki + rust | Ivory + lavender-plum |
| Type pairing | Bitter + Work Sans (+ Caveat, one use) | Fraunces + Inter | Anton + Oswald + Roboto Condensed | Bebas Neue + Karla + Space Mono | Cormorant Garamond + Jost |

No two auto-shop demos share a hero shape, a section order, a services
layout, or a type pairing. (Brazos Valley Automotive, Bryan Muffler &
Performance, and Limitless Diesel & Offroad will each get their own
research-grounded rebuild next — this pass only had to make sure Bos Garage
doesn't converge with their *current* state.)

## What is REAL (verified & traceable)

- Business name: **Bos Garage Auto Repair** (Google) / cross-listed as
  "Bo's Garage" on Yelp/MapQuest/Yahoo Local at the same address/phone —
  source: Google Maps listing search, verified 2026-08-28.
- Category on Google: **Car repair and maintenance service**.
- Address: **1617 Briarcrest Dr, Bryan, TX 77802**.
- Phone: **(979) 906-0924**.
- **Google rating: 5.0 stars from 7 reviews** — verified 2026-08-28 via a
  live (non-headless) Chrome session; shown on the page as "5.0 out of 5"
  and "7 Google reviews."
- **Wheelchair accessible entrance** — listing attribute, recorded
  2026-08-19, dated accordingly on the page.
- One verified hours snapshot: listing read "Open · Closes 6 PM" on the
  afternoon of 2026-08-28 — shown with that exact date, "Call or message
  for hours" remains the primary statement.
- Directions/"See us on Google" links point to the real Google Maps search
  URL for this business.
- The photo-based color evidence (roofline red, stone tan, cream siding,
  yellow bollard) — sourced from the Google Maps photo credited "Tianyi
  Lu," Feb 2026, verified 2026-08-28. The photo itself is not reproduced on
  the page (see "Hero art" above); only the design tokens derived from it
  are used.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (brakes, oil changes, diagnostics, engine repair,
  AC, tires/alignment, electrical/battery, belts/hoses/fluids): generic
  examples of what an independent repair garage typically offers — NOT
  confirmed as Bos Garage's actual service list. The page says so directly
  and points to the phone number to confirm.
- **Hero illustration**: an inline SVG built to echo the real photo's
  described elements (siding, roofline, stone, bay doors, bollard, sign) —
  it is NOT the photo itself and NOT a rendering of the shop's actual
  building beyond that description. Labeled illustrative in the page's
  `figcaption` and here.
- **Reviews section**: only the real "5.0 out of 5" and "7 Google reviews"
  numbers are shown. Review text/cards are an explicit "reviews will
  appear here once connected" placeholder — the six review texts and one
  Yelp excerpt captured above were read strictly for internal design
  research (palette/tone/copy-voice direction) per `client-demo-site` §1
  and are **never** published as page copy, quoted, or paraphrased into
  marketing copy on the live page. No fabricated quotes, no invented star
  breakdowns.
- **Copy voice** (e.g., "the person who looks at your car is the same
  person who calls you back," "Bo will tell you straight," "ask for Bo"):
  original marketing language written to reflect the real *theme* the
  reviews independently established (a personal, long-term, honest
  relationship with one named mechanic) — not a paraphrase or quote of any
  specific review, and no invented facts, testimonials, or statistics.
- **Phone/CTA buttons**: all `tel:` links go to the real, verified number.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY the real-research-derived brand colors
  (`--cream`, `--cream-panel`, `--barn-red`, `--barn-red-deep`, `--stone`,
  `--stone-deep`, `--yellow`, `--ink`, `--ink-soft`, `--line`) and fonts
  (Bitter + Work Sans + Caveat). **Zero Lewis Digital gold (`#C9A227`
  family), zero Lewis charcoal `#16130e`, zero Lewis cream `#fbf8f1`**
  anywhere in `index.html`/`styles.css` — confirmed by inspection (this
  demo's cream base `#f6efe2` and ink `#2b2118` are deliberately different
  hex values from Lewis Digital's own cream/charcoal, not a coincidental
  near-match).
- Footer keeps a single small credit line: "Designed by Lewis Tech" (owner
  instruction 2026-08-29: never say "Lewis Digital" on client-facing pages).
- `pitch-sheet.html` was NOT modified — it stays in Lewis Digital's own
  brand (it's our sales tool), per `client-demo-site` §4.
- Structurally distinct from all four sibling demos — see the table above.

## Notes for the close call with the owner

- Lead with the real 5.0-star / 7-review rating — it's a genuine, verified
  proof point most competitors' unclaimed listings don't have this clean.
- The "ask for Bo" personal-relationship angle is the strongest hook this
  business has (every available review names him by name and describes
  years-long trust) — the AI Receptionist pitch fits naturally here since
  a one-person, relationship-driven shop is exactly the kind of business
  that can't afford to miss a call while under a car.
- If the owner (Bo) provides real hours, a real logo, real photos, or
  confirms his actual service list, swap them into `index.html` and
  re-publish — the illustration and copy were deliberately built to be easy
  to replace once real assets exist.
- This folder is a standalone deliverable; nothing goes live for the client
  until they confirm interest.
