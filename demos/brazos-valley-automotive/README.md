# Brazos Valley Automotive — Demo Site (Rebuild v2.1 — CLIENT BRAND + real hero photo)

One-page demo website for **Brazos Valley Automotive** (1702 Ponderosa Dr,
College Station, TX 77845 · (979) 680-1234), **rebuilt from scratch** using
real research gathered live via a non-headless Chrome browser on
**2026-08-28** (Google Maps' JS-heavy review/photo UI doesn't render in a
sandboxed fetch, which is why the v1 build below had to guess). Contains
**ZERO Lewis Digital gold/charcoal/cream** — the client-facing page uses only
the researched brand system below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Why this is a rebuild, not a patch

The previous version of this demo (`v1`, superseded by this file) stated
plainly that Brazos Valley Automotive "has no usable brand imagery to draw
from" and that the leads file carried "no rating or review count" — so it
shipped with a fully **derived** cream/navy/copper editorial brand and an
empty reviews placeholder. That was true of what a sandboxed session could
see at the time; it was not true of the business. A real Chrome session
searching "Brazos Valley Automotive TX" on Google Maps found a **4.7-star,
156-review** listing with dozens of readable review texts and multiple
photos of the actual building and sign — all invisible to a headless/sandboxed
fetch. This rebuild replaces every derived-guess decision with a
research-grounded one and corrects the v1 README's now-inaccurate "no rating,
no reviews, no photos" claims.

## Hero photo: v2.1 update, 2026-08-29 — real stock photo replaces the SVG illustration

The v2 rebuild (below) used an inline SVG/CSS illustration for the hero,
reasoning that an illustration directly reflecting the researched siding/roof/
sign-board evidence was a better honesty fit than a generic stock photo. The
owner reviewed the live Bos Garage demo with the same approach and said
plainly it needed a real photo, not an illustration — a flat vector graphic
reads as *no image* regardless of how well-researched its details are. That
feedback applies here too. No AI image-generation tool is available in this
environment (confirmed 2026-08-29), so this update uses a real, free-license
stock photo instead.

**Source:** [pexels.com/photo/6870324](https://www.pexels.com/photo/smiling-man-in-blue-coveralls-standing-beside-an-orange-car-having-conversation-over-the-phone-6870324/)
("Smiling Man in Blue Coveralls Standing Beside an Orange Car Having
Conversation Over the Phone"), photographer **Gustavo Fring**, downloaded
2026-08-29. Licensed under the [Pexels License](https://www.pexels.com/license/)
— free for commercial use, no attribution legally required (credited here
anyway). The Lead sourced two candidates via a live Chrome session — this one
(a mechanic reviewing paperwork on the phone beside a car, in a clean
multi-bay shop) and an alternate showing an old pickup truck getting worked
on — and sent both to the owner. The owner picked this one; it also happens
to echo real review themes ("good communication," "very thorough and document
with pics") better than the alternate did.

This is a **stock photo of a generic mechanic, not a photo of Brazos Valley
Automotive, its building, or its staff.** The page's `alt` text and
`figcaption` say so explicitly, and so does this README.

## More photos throughout the page: v2.2 update, 2026-08-29

After approving the hero photo, the owner asked for more images throughout
the page rather than a single hero shot. Per updated process (the owner also
said not to present candidates for approval on photo choices anymore — decide
and implement, then bring the finished page back for approval), two more
free-license Pexels photos were added:

- **Services section** (`assets/services-brake.jpg`): [pexels.com/photo/6870307](https://www.pexels.com/photo/man-in-blue-uniform-fixing-the-car-s-brake-system-6870307/)
  ("Man in Blue Uniform Fixing the Car's Brake System"), photographer
  **Gustavo Fring** — the same photoshoot/model/car as the hero photo, so it
  reads as one cohesive set on this page rather than a random stock grab, and
  it directly ties to "brake work," the most-tagged real service theme from
  the Google reviews research (5 mentions).
- **About section** (`assets/about-shopfloor.jpg`): [pexels.com/photo/5158091](https://www.pexels.com/photo/modern-automobile-on-repair-in-garage-5158091/)
  ("Modern Automobile on Repair in Garage") — a real multi-bay shop floor
  (two lifts, vehicles mid-service), no people, backing up the "full-service
  independent shop" copy without needing a staff photo (the owner names on
  Google reviews were inconsistent across sources, so the page still doesn't
  claim to show "the crew").

Both are licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and are
marked as illustrative stock photos in their `alt` text/`figcaption`, same
discipline as the hero photo — neither is a photo of Brazos Valley
Automotive, its building, or its staff.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (nav, trust-forward hero, verified-facts strip, services, about/crew, visit, reviews, contact, footer) |
| `styles.css` | All styling — researched client brand (galvanized-gray + charcoal-brown + rustic sign tan/green, Roboto Slab + Work Sans) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — Lewis Digital brand, untouched) |
| `assets/hero-mechanic.jpg` | Hero photo — free-license stock photo, NOT a photo of Brazos Valley Automotive (see "Hero photo" below) |
| `assets/services-brake.jpg` | Services section photo — same photoshoot as the hero, ties to the real "brake work" review theme (see "More photos" below) |
| `assets/about-shopfloor.jpg` | About section photo — a real multi-bay shop floor, no people (see "More photos" below) |
| `assets/about-consult.jpg` | About section photo — AI-generated illustrative stand-in (see "Supporting photography" below) |
| `assets/visit-storefront.jpg` | Visit Us section photo — AI-generated illustrative stand-in (see "Supporting photography" below) |

## Supporting photography: photo-enrichment pass, August 2026

Two additional AI-generated photos were added during a photo-enrichment pass:
`about-consult.jpg` (About section) and `visit-storefront.jpg` (Visit Us
section).

- **Source & licensing**: both are **AI-generated illustrative images**
  (photorealistic, generated for this demo). They are NOT photographs of
  Brazos Valley Automotive, its building, or its staff, and carry no
  third-party photographer/license beyond the generated asset itself — no
  Pexels/Unsplash license applies to them (unlike the hero, services-brake,
  and about-shopfloor photos, which are real licensed stock).
- **Honest disclaimer**: like every other photo on this page, these are
  **stand-ins to be swapped for Brazos Valley Automotive's real photographs
  after go-live.** The on-page `alt` text and `figcaption` state this
  explicitly, and the page presents no AI image as a real photo of the
  business. Only the name/address/phone/rating facts elsewhere on the page
  are verified.

## Preview

```bash
cd demos/brazos-valley-automotive
python -m http.server 8093 --bind 127.0.0.1   # preview on localhost:8093
```

Do NOT use port 3000 — that serves the agency site.

## Research — sources, dates, and what they showed

**Source: Google Maps listing, searched "Brazos Valley Automotive TX" in a
real (non-headless) Chrome browser, verified 2026-08-28.**
- Business name confirmed: "Brazos Valley Automotive."
- Google's own one-line category summary: *"Auto-repair facility known for
  honest service, along with quick turnaround times."* Quoted directly on the
  page in the hero and about section, attributed.
- **Rating: 4.7 stars, 156 Google reviews** — a real, load-bearing asset this
  demo leads with (v1 had none of this).
- Live status at check time read "Open · Closes 5:30 PM." A **secondary**
  source — a Google AI Overview citing **SureCritic** — gives Monday–Friday
  7:30 AM–5:30 PM, closed Saturday/Sunday (checked 2026-08-28). Per
  `client-demo-site` §3 this is not a primary Google-listing hours fact, so
  the page still shows **"Call or message for hours"** as the primary
  placeholder and cites the SureCritic/AI-Overview data point separately,
  with its source and date, in the trust strip and the Visit Us section.
- Address/phone match the lead exactly. Wheelchair-accessible entrance shown
  on the listing — used on the page as a verified fact.

**Source: Google Maps reviews modal, read 2026-08-28.** Review tag chips:
"brake work" (5), "belt replacement" (2), "heater repair" (2), and "fair
pricing" (16 — the dominant theme by a wide margin). Seven full review texts
were read for tone/vocabulary (Miguel, Fred Davies, Kathy Young, an unnamed
Nissan Maxima owner, Emily Oswald, Katelynn Faulkenberry, Juliene Anderson),
plus cross-platform snippets from Yelp, Nextdoor, Reddit r/CollegeStation,
MapQuest, and CarTalk. Recurring words: "honest," "no BS," "fair/reasonable
pricing," "thorough," "fast," "best independent shop," "done with
dealerships." Multiple sources named different individuals as the owner/crew
(Bobby, Gordon, Pat) — inconsistent enough across sources that **no owner
name is used on the page**; the copy describes a multi-person crew/team
institution instead, which the review evidence supports (a Ram 1500 and a
1995 Nissan truck both got real repair work, not boutique detailing).

**This review reading is internal design research only.** No review text,
star count from a chip, or reviewer name is published as page copy or as a
fake review card — the on-page Reviews section shows only the real 4.7/156
numeric rating plus an explicit "reviews will appear here once connected"
placeholder, exactly per `client-demo-site` §3. The vocabulary above informed
the page's own original marketing copy (e.g. "a straight answer before any
work starts") — general marketing language echoing a real tone, not a quote.

**Source: Google Maps photos, verified 2026-08-28** (multiple photos, most
recently credited "Stephen Champion," Nov 2016, still representative of the
building):
- Light-to-medium **gray corrugated metal siding**.
- A **dark charcoal/brown gable roof**.
- A **small, modest rustic sign board** mounted on the facade — tan/wood-toned
  background, dark green-brown lettering, no illumination or gloss.
- Parking lot mix of everyday vehicles (an olive-drab Jeep Wrangler, a white
  pickup, a gray sedan) — not show cars.
- Overall impression: plain, utilitarian, no-frills — consistent with the
  "no BS" review theme. Deliberately **not** the white/barn-red pole-barn look
  of Bos Garage, not a hot-rod or neon/tuner look, and not a "dark industrial"
  generic trade default.

## Derived brand system (grounded in the research above, not a category guess)

| Token | Value | Reasoning |
|---|---|---|
| Galvanized gray `#6f716a` / `#b7b8b0` | Corrugated metal siding, photo-verified | The actual building material — used as a real texture (a repeating-ridge gradient), not just a swatch |
| Charcoal-brown "roof" `#221e18` | Dark gable roofline, photo-verified | Warm near-black, deliberately NOT Bos Garage's cool blue-gray slate `#1f2933` and NOT Bryan Muffler's pure carbon-black `#0b0b0c` |
| Warm greige paper `#f1efe6` | Light neutral base | Distinct from Bos's cool off-white `#f5f6f7` and Limitless's deeper tan cream `#ece4d0` |
| Sign tan `#cda874` + sign green `#4b5238` | The real rustic sign board's wood-tone background and dark green-brown lettering, photo-verified | Used sparingly as the CTA/accent pair — deliberately NOT Bos's garage red `#c2351f`, Bryan's electric orange `#ff5a00`, or Limitless's rust `#b5542f` |
| Roboto Slab (display) + Work Sans (body) | Sturdy, permanent-signage feel without ornament; plain, legible body | Reads as an established, no-nonsense institution rather than a boutique (contrast with Neff's Cormorant Garamond) or a loud performance shop (contrast with Bryan's Anton). Deliberately unlike every other demo's pairing (Fraunces/Inter, Oswald/Barlow, Anton/Oswald/Roboto Condensed, Bebas Neue/Space Mono/Karla) |

`ui-ux-pro-max` was queried (`"established institutional auto repair
trustworthy plain" --design-system` and follow-up typography/color domain
queries) as a pressure test; results skewed toward generic SaaS/enterprise
navy palettes and luxury/academic serif pairings that didn't fit a plain,
photo-verified gray-metal trade shop. Per the skill's own fallback guidance,
those results are noted here but not used — the palette and type pairing
above come from the real photo/review research instead.

## Structural distinctness (checked against every sibling demo)

- **Bos Garage** (just rebuilt): sticky top-strip + header nav, centered
  text-over-image hero, hazard-stripe dividers, tool-card grid with letter
  badges, a combined 3-plate about+hours grid, reviews shown as a horizontal
  rating-block/placeholder split. This demo instead: plain sticky nav (no
  top-strip), a **trust-forward hero** that leads with the real 4.7★/156
  numeral before the headline, a real hero photo framed in the shop's own
  roofline/siding motif as the signature element, a 3-tile verified-fact strip styled
  as light-on-dark cards (not hairline columns), thin-top-rule service panels
  (no letter badges), a separate single-plate Visit Us section, and a
  vertically-stacked centered reviews block (not a horizontal split). A
  quiet **rivet-dot divider** (echoing fastened corrugated siding) replaces
  Bos's hazard stripe as the section-break motif.
- **Bryan Muffler & Performance**: scrolling ticker, full-bleed motion hero,
  decorative numeric index band, skewed dividers, asymmetric grid — none of
  which appear here.
- **Limitless Diesel & Offroad**: fixed left-rail nav, no conventional hero
  (an "opening log" panel instead), stamped/dashed-border field-log rows —
  none of which appear here; this demo keeps a conventional top nav and a
  real hero section.
- **Old Brazos v1** (superseded): split left-text/right-photo hero, a
  4-column hairline fact strip, and a numbered 01–08 editorial service index
  in Fraunces/Inter on a navy/copper/cream palette. This rebuild uses none of
  that architecture or type/color system.

Section order is also unique among the five: Hero → Trust strip → Services →
About/Crew → Visit Us → Reviews → Contact → Footer (8 sections; no other
demo in `demos/` uses this order or count).

## What is REAL (verified & traceable)

- Business name: **Brazos Valley Automotive**
- Address: **1702 Ponderosa Dr, College Station, TX 77845**
- Phone: **(979) 680-1234**
- Category / self-description: **"Auto-repair facility known for honest
  service, along with quick turnaround times"** — Google's own listing
  summary, verified 2026-08-28
  (https://www.google.com/maps/search/Brazos+Valley+Automotive+1702+Ponderosa+Dr+College+Station+TX+77845)
- **Google rating: 4.7 stars, 156 reviews** — shown on the public listing,
  verified 2026-08-28
- **Wheelchair-accessible entrance** — attribute shown on the listing
- Hours data point: **Monday–Friday 7:30 AM–5:30 PM, closed Saturday/Sunday**
  — sourced from SureCritic via a Google AI Overview citation, checked
  2026-08-28. Shown on the page as a clearly cited secondary data point, not
  as the primary hours claim (which remains "Call or message for hours" per
  `client-demo-site` §3)
- Directions link points to the real address-based Google Maps search URL

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hours (primary claim)**: shown as "Call or message for hours" — the
  SureCritic-sourced Mon–Fri 7:30–5:30 data point is noted separately with
  its source and date, per the honest-placeholder rule.
- **Service categories** (brakes, belts/hoses, heating/AC, diagnostics,
  engine repair, electrical/battery, tires/alignment, older/high-mileage
  vehicles): a generic list of what a full-service independent shop typically
  offers — NOT Brazos Valley Automotive's confirmed menu. The page carries an
  on-page note saying to confirm by phone.
- **Reviews section on the page**: only the real 4.7/156 numbers are shown;
  review text/cards are an explicit "reviews will appear here once
  connected" placeholder — no fabricated quotes, no invented tag counts,
  even though real tag chips and review texts were read during research (see
  above — that reading stays internal per `client-demo-site` §3).
- **Hero photo** (`assets/hero-mechanic.jpg`): a free-license stock photo, not
  a photo of Brazos Valley Automotive. See "Hero photo" below for the full
  story of why this replaced the original inline-SVG illustration.
- **"About the shop" narrative and "values" list** (straight answers, fair
  pricing, thorough diagnosis, same crew every visit): original marketing
  copy in Lewis Digital's warm small-business voice, informed by the
  vocabulary repeated across the real reviews research (honest, fair, thorough,
  no BS) but written fresh — not a quote, not attributed to any reviewer.
- **No owner name** is used anywhere on the page. Cross-platform review
  research turned up three different names (Bobby, Gordon, Pat) attributed
  to ownership/management across different sites, with no way to verify
  which is current or accurate — so the page describes a "crew"/"team," which
  is also what the review evidence (work on a decade-idle Ram 1500 and a
  1995 Nissan truck) actually supports, rather than naming anyone.

## Brand-rule compliance

- Client-facing page uses ONLY the researched brand colors/fonts above. **No
  Lewis gold (#C9A227 family), no Lewis charcoal #16130e, no Lewis cream
  #fbf8f1** anywhere in `index.html`/`styles.css`.
- Footer keeps a single small credit: "Designed by Lewis Tech" (owner
  instruction 2026-08-29: never say "Lewis Digital" on client-facing pages).
- `pitch-sheet.html` is untouched — it stays in Lewis Digital brand (it is
  OUR sales tool).

## Notes for the close call with the owner

- Leading with the real 4.7★/156-review numeral in the hero (not buried in a
  footer reviews section) is the single strongest asset this rebuild adds —
  it's real, verifiable, and was invisible to the tooling that built v1.
- If the owner confirms real hours, provides a real building/sign photo, or
  names the actual owner/manager, swap the stock hero photo for a real one
  and add the confirmed name/hours — the current stock photo and "Call or
  message for hours" primary are both explicitly placeholders for those, not
  final answers.
- This folder is a standalone deliverable; nothing is pushed live to a real
  domain without the owner's approval.
