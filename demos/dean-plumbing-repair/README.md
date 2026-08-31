# Dean Plumbing & Repair — Demo Site (owner-authorized prospecting batch, 2026-08-30)

One-page demo website for **Dean Plumbing & Repair** (9972 Brookwood Ln,
College Station, TX 77845 · (979) 774-0999 · Plumber). This is a **brand-new
build**, the fifth and final demo in an owner-authorized batch sourced from
HubSpot — the normal "no demo until the client confirms interest" gate does
not apply to this batch (owner instruction, 2026-08-30).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Why the brand is DERIVED, not sourced (per `client-demo-site` §1's fallback clause)

Research gathered by the Lead via live Chrome, verified 2026-08-30:

- **Google Maps listing exists (unclaimed) with a real 4.5-star average from
  2 ratings** — but **neither rating has any written text**, just star
  ratings left 5 and 8 years ago: Rebecca Gray (Local Guide, 163 reviews on
  her profile, 2 photos) and Derius Warren (9 reviews, 2 photos). There is
  no review vocabulary anywhere to draw tone from.
- **Facebook page exists** (`@deanplumbingandrepair`, 90+ followers) with a
  one-line bio: **"Residential & Commercial Plumbing and Repairs."** Contact
  email listed as `cbadean@verizon.net` — suggestive of an owner with the
  initials "C.B. Dean," but that is an inference from an email address, not
  a confirmed fact, and it is **not** asserted anywhere on this page or in
  this README as an owner name.
- **MapQuest listing states:** "With over 30 years of experience, Dean
  Plumbing & Repair is able to help you with all your plumbing needs." This
  is directory boilerplate, not a customer quote — but "30+ years
  experience" is specific and consistent enough across the directory record
  that it's treated as a real fact about the business's tenure, cited to
  MapQuest throughout.
- **No photos found** beyond a Google Street View thumbnail on the unclaimed
  listing — no owner-uploaded photos anywhere.

This sits in an unusual middle ground compared to the batch's other two
thin-signal builds (`frank-seale-electric`, `bernados-landscaping-dirtworks`
— see the distinctness section below): unlike either of those, **a real
star rating exists and is shown as fact** (4.5 from 2 ratings). What's
missing isn't the number — it's the words behind it. That distinction
shaped the whole design: rather than an "empty state" (nothing to show),
this page treats the rating as a genuine, verifiable data point and is
explicit only about the one thing that's actually absent — review text.

**What the derived direction is built from instead:** the trade itself
(pipe, fittings, brass, gauges) and the tones already present in the one
real asset this build has — the hero stock photo (see below) — plus the
one genuinely repeated real fact, 30+ years of tenure. Deliberately **not**
a generic corporate "trust" palette (see the `ui-ux-pro-max` query below) —
the photo's own tones pointed somewhere more specific: deep uniform navy,
a cool tool-handle blue, a brass accent standing in for the trade's own
long-lived hardware, and the fixture's own near-white.

`ui-ux-pro-max` was queried before finalizing
(`python .claude/skills/ui-ux-pro-max/scripts/search.py "plumber plumbing
repair veteran trade service" --design-system -p "Dean Plumbing"`) and
returned a generic "professional blue + urgent orange" B2B-trust default
(`#1E40AF` / `#EA580C`, Inter + Playfair Display) — the same shape of
generic result the `frank-seale-electric` README flagged for its own query.
That confirmed navy-based "trust" is a legitimate direction in general, but
the exact hex values and Inter/Playfair pairing were **not** adopted
verbatim — they read as generic corporate SaaS, not this trade's own
material or this hero photo's own tones. The final palette and type system
below use different, photo-grounded hex values and a font trio (IBM Plex
Serif + IBM Plex Sans + IBM Plex Mono) not present in that generic result,
and not used by any sibling demo.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, about, services, hours & find us, reviews, contact, footer) |
| `styles.css` | All styling — derived client brand (uniform navy + tool-handle blue + brass + fixture-white; IBM Plex Serif + IBM Plex Sans + IBM Plex Mono) |
| `assets/hero-plumber.jpg` | Hero photo — free-license stock photo (see "Hero photo" below) |
| `pitch-sheet.html` | Printable one-page pitch sheet for outreach (OUR sales tool — Lewis Digital brand, gold/charcoal/cream, untouched) |

## Preview

```bash
cd demos/dean-plumbing-repair
python -m http.server 8151 --bind 127.0.0.1   # preview on localhost:8151 (use `python3` on macOS/Linux)
```

Do NOT use port 3000 — that serves the agency site. Verified locally
2026-08-30 at desktop (1280px, full page) and mobile (375px) widths: no
console errors, hero image returns HTTP 200, no horizontal overflow at
either width.

## Hero photo

Already sourced and placed by the Lead at `assets/hero-plumber.jpg`: a real,
free-license stock photo — a professional close-up of gloved hands in a
navy work uniform installing a pipe fitting onto a white radiator/fixture,
with blue-handled tools visible on a dark work surface.

**Source:** [pexels.com/photo/29226620](https://www.pexels.com/photo/professional-plumber-installing-a-radiator-pipe-29226620/)
("Professional Plumber Installing a Radiator Pipe"), photographer **Sergei
Starostin**, [Pexels License](https://www.pexels.com/license/) (free
commercial use, no attribution required, credited anyway).

This is a **stock photo, not a photo of Dean Plumbing & Repair or its
staff** — disclosed in the `alt` text, the `<figcaption>`-equivalent credit
line beneath the photo, and here. It is also the only real visual material
this build has to work from, which is why its own tones (uniform navy,
tool-handle blue, fixture white, dark worktop, a small red fabric tag on
the pocket) directly seeded the palette below, rather than the trade
category in the abstract.

## Design plan (brainstorm → critique, per `frontend-design`)

**Color** — `--navy #1c2d3f` / `--navy-deep #101c29` / `--navy-soft
#2b3f55` (the uniform: header, hero band, footer, primary ink) ·
`--fixture #f3f6f7` / `--fixture-panel #ffffff` (the white radiator/fixture
being installed — cool page base, deliberately not a warm cream) ·
`--pipe-blue #2f74a6` / `--pipe-blue-deep #1f567e` (the blue-handled tools
on the worktop — links, CTAs, service-card accents) · `--brass #a9822f` /
`--brass-bright #c9a24a` (a real plumbing fitting material, not
photo-sourced — the trust/tenure accent, used only on tags, dividers, and
the primary CTA) · `--slate #5b6470` (the dark worktop / tool metal — muted
text) · `--tag-red #ab392d` (the small red fabric tag on the uniform
pocket in the hero photo — used once, nowhere near a primary role).

**Type** — IBM Plex Serif (display: headlines) + IBM Plex Sans (body) +
IBM Plex Mono (tag labels, verified-fact callouts, spec data). Plex was
chosen for its own engineered, drafting-plan character — it reads like
stamped equipment lettering, which fits a trade built on precision
fittings — and no sibling demo uses any Plex face.

**Layout** — a two-tier hero: a flat navy band (headline, tagline, CTA —
no photo behind the text) sits above the real hero photo, which bleeds the
full width of the page below it with an angled bottom edge; a brass "valve
tag" pinned at the seam between band and photo carries the one real
tenure fact ("30+ YRS IN SERVICE"). This is a different hero shape from
every sibling: not a full-bleed photo with a text scrim (`bcs-roofing`,
`sanchez-landscaping`, `frank-seale-electric`), not a side-by-side
copy/photo grid (`bos-garage`, `neffs-majestic-hair-studio`), not an SVG
gauge with no photo (`limitless-diesel-offroad`), not an illustrated
CSS signboard (`bryan-muffler-performance`), and not a split panel with a
topographic background (`bernados-landscaping-dirtworks`).

Section order: **Hero → About → Services → Hours & Find Us → Reviews →
Contact → Footer** — deliberately with **no standalone "trust strip" or
"proof band"** the way four siblings (`bos-garage`, `brazos-valley-
automotive`, `bryan-muffler-performance`, `bcs-roofing`) each have directly
after their hero. The three verified facts (30+ years, residential +
commercial, 4.5★/2) are instead folded into the nav bar (persistent, real,
shown while scrolling — no sibling puts its rating badge in the nav
itself) and into the About section's "spec rail," never as a separate band.

**Signature — the pipe-union seam.** A slim, repeating divider between
every major section, drawn as a threaded pipe coupling (two flanges, a hex
union nut) in brass and navy line-work. It's a quiet, structural
throughline rather than a single flashy moment — reinforcing "things
fitted here stay fitted" for a shop whose whole pitch is thirty-plus years
of not needing to be re-called. The same trade vocabulary (a stamped
metal "valve tag") reappears twice more, load-bearing both times: once in
the hero for the 30+ years fact, and once in Reviews as the honest-rating
disclosure device (see below) — never as decoration on its own.

**Critique against the three generic AI-design defaults** (per
`frontend-design`): not the cream/serif/terracotta look (no cream base,
serif used only for display type, restrained); not the near-black + one
acid accent look (the page is majority cool near-white, navy is banded —
header, hero, reviews, contact, footer — not a full dark-mode page, and
brass is a muted trade material, not a neon single accent); not the
broadsheet-hairline look (rounded corners throughout, no dense multi-column
newspaper grid). Also explicitly not a generic "24/7 emergency plumber"
cliché — the copy voice leans into tenure and steadiness instead.

## Reviews: how this page's honesty problem differs from its two siblings

`frank-seale-electric` has **zero** reviews on any platform, and discloses
that with a breaker-panel circuit switched OFF. `bernados-landscaping-
dirtworks` has **no listing at all**, and discloses that with a plain
paragraph headlined "No rating to show — honestly." Dean Plumbing's
situation is different in kind, not just degree: **a real, verifiable 4.5-
star average from 2 ratings exists** — it just has no written text behind
it. Presenting that the same way as "nothing exists" would understate a
real, positive signal; presenting it as if it were a normal review section
would imply vocabulary that was never there.

The Reviews section instead shows a stamped "valve tag" with the real 4.5
and "2 ratings" as its own honest, freestanding fact (no star-only
badge dressed up as a review card), paired with plain-language copy
identifying both real reviewers (Rebecca Gray, Derius Warren) and stating
directly that neither left a written comment. Nothing is invented; nothing
is hidden. This is a genuinely different disclosure device — form and
copy voice both — from either sibling's, because it's answering a
genuinely different fact pattern.

## Structural distinctness vs. every other demo under `demos/`

Checked against the current state of `bos-garage`, `brazos-valley-
automotive`, `bryan-muffler-performance`, `limitless-diesel-offroad`,
`neffs-majestic-hair-studio` (built on `main`), and `bcs-roofing`,
`frank-seale-electric`, `sanchez-landscaping`, `bernados-landscaping-
dirtworks` (built on their own unmerged feature branches, diffed directly)
— this is the 10th demo in the repo:

| | Dean Plumbing & Repair (this demo) | Frank Seale Electric | Bernado's Landscaping & Dirtworks | Bos Garage | Brazos Valley Automotive | Bryan Muffler & Performance | Limitless Diesel & Offroad | Neff's Majestic Hair Studio | BCS Roofing | Sanchez Landscaping |
|---|---|---|---|---|---|---|---|---|---|---|
| Hero | Flat navy band + full-width photo bleeding below, brass tag at the seam | Full-bleed photo, navy scrim, text bottom-left | Split grid: photo left, topographic-line panel right | Centered copy + photo banner below | Copy + rating pill, boxed photo | Full-bleed + illustrated CSS signboard | Sidebar rail + SVG boost-gauge dial, no photo | Centered copy over dark photo, card-frame | Full-bleed photo + scrim + corner hang-tag | Full-bleed photo + scrim + bottom fact-tag list |
| Rating badge location | **Nav bar** (persistent while scrolling) | n/a (zero reviews) | n/a (no listing) | Trust strip | Hero pill callout | Spec-plate band | n/a | Hero starburst badge | Hero corner tag | Hero-bottom fact-tag |
| Section order | Hero → About → Services → Hours → Reviews → Contact (**no trust band**) | Hero → About → Services → Reviews → Hours → Contact | Hero → Story → Split → Area → Reviews → Contact | Hero → Trust → Story → Services → Hours → Reviews → Contact | Hero → Trust → Services → About → Visit → Reviews → Contact | Hero → About → Craft → Services → Hours → Reviews → Contact | Hero → Work → About → Console(hours) → Reviews → Contact | Hero → Highlights → Services → About/Hours → Reviews → Contact | Hero → Proof → About → Services → Process → Area → Reviews → Contact → CTA band | Hero → Intro → Trades → Services → Visit → Reviews → Contact |
| Honesty device | Brass "valve tag" showing the real 4.5/2 alongside plain copy — a real number, explicitly missing only its write-up | Breaker circuit switched OFF | Plain-paragraph "no rating — honestly" + outbound Google search link | n/a (real reviews exist) | n/a (real reviews exist) | n/a (real reviews exist) | n/a (real reviews exist) | n/a (real reviews exist) | n/a (real reviews exist) | n/a (real reviews exist) |
| Signature element | Pipe-union seam divider (recurring, structural) reused as the valve tag | Breaker toggle switch (CTA + panel directory + OFF-switch disclosure) | Landscaping/dirtwork name split + topographic contour lines | Hand-lettered "ask for Bo" script tag | Split editorial photo + fact strip | Scrolling ticker + oversized number band | Fixed left sidebar rail nav | Card-frame photos + starburst rating badge | Corner hang-tag rating badge | Bottom-of-hero fact-tag list |
| Palette | Uniform navy + tool-handle blue + brass + fixture-white | Panel-box navy + aged/bright copper + concrete-gray | Soil-brown + clay + sky-blue + safety-yellow + leaf-green | Warm cream + barn-red + stone-tan | Warm cream + steel + sign-green | Near-black asphalt + steel-blue + sign-red + cream | Cool blue-black + electric cyan | Deep plum + lavender + ivory + peach | Warm sand + rust + walnut | Deep teal + mulch-brown + wood-tan + lawn-green |
| Type pairing | IBM Plex Serif + IBM Plex Sans + IBM Plex Mono | Space Grotesk + Public Sans + Space Mono | Big Shoulders Display + Karla + DM Mono | Bitter + Work Sans | Roboto Slab + Work Sans | Alfa Slab One + Archivo | Barlow Condensed + Barlow | Cormorant Garamond + Jost | Oswald + Karla | Fraunces + Inter |

No two demos share a hero shape, section order, rating-badge placement,
signature element, or type pairing. The palette lands in a cool navy/blue
family broadly adjacent to Frank Seale Electric's navy-based palette, but
the two are still structurally distinct: Frank Seale is a full-bleed-photo
hero with a copper accent and a concrete-gray base; this demo is a flat-
band-plus-photo hero with a brass accent and a cool near-white base, and
neither shares a type pairing, section order, honesty device, or
signature element with the other.

## What is REAL (verified & traceable)

Source: `business/leads/leads.csv` (Dean Plumbing & Repair row) +
cross-referenced Google Maps, Facebook, and MapQuest listings, checked live
by the Lead, **2026-08-30**:

- Business name: **Dean Plumbing & Repair**
- Category: **Plumber**
- Address: **9972 Brookwood Ln, College Station, TX 77845**
- Phone: **(979) 774-0999**
- **Google rating: 4.5 stars, 2 ratings** (Google Maps listing, unclaimed).
  Neither rating has written text; both are 5+ years old, from Rebecca Gray
  (Local Guide, 163 reviews) and Derius Warren (9 reviews).
- **30+ years of experience**, per MapQuest's directory listing —
  boilerplate phrasing, but a specific, consistently repeated tenure claim
  treated as fact about the business (not a customer quote).
- **Residential & Commercial Plumbing and Repairs** — the business's own
  description of its scope, from its Facebook page bio
  (`@deanplumbingandrepair`).
- Facebook page link used on-page (`facebook.com/deanplumbingandrepair`)
  is the business's own verified handle.

## What is PLACEHOLDER / DERIVED (do NOT present as sourced from the business)

- **Entire color palette and typography**: derived by the Builder from the
  trade itself and the hero photo's own tones — not extracted from any real
  Dean Plumbing & Repair signage, photo, or profile, because none exist.
  See "Why the brand is DERIVED" above.
- **Hero photo** (`assets/hero-plumber.jpg`): a free-license stock photo of
  a generic plumbing task — NOT a photo of Dean Plumbing & Repair, its
  shop, or its staff. Labeled as such in `alt` text, the on-page credit
  line, and here.
- **Service list** (drain & clog clearing, leak detection & repair, water
  heater service, fixture & faucet install, repiping & pipe repair,
  commercial plumbing): generic examples of what a residential/commercial
  plumber typically offers — **not** Dean Plumbing & Repair's confirmed
  menu. The page states this directly and points to the phone number.
- **Hours**: no hours are published on any listing checked — shown as "Call
  or message to check availability," never a guessed schedule.
- **Owner name**: NOT asserted anywhere. The Facebook contact email
  (`cbadean@verizon.net`) suggests initials "C.B. Dean," but that's an
  inference from an email address, not a confirmed fact, and it does not
  appear on the page or in this README as a claim.
- **Copy voice** ("show up, fix it right, move on to the next one," "a
  shop that's kept customers for 30+ years by phone and referral"):
  original marketing language informed by the real "30+ years" and
  "residential & commercial" facts — not a quote, not an invented
  testimonial or statistic.
- **Phone/CTA buttons**: all `tel:` links go to the real, verified number.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY the derived client-brand colors (`--navy`,
  `--navy-deep`, `--navy-soft`, `--fixture`, `--fixture-panel`,
  `--pipe-blue`, `--pipe-blue-deep`, `--brass`, `--brass-bright`, `--slate`,
  `--tag-red`, all disclosed above) and fonts (IBM Plex Serif + IBM Plex
  Sans + IBM Plex Mono). **Zero Lewis Digital gold (`#C9A227` family), zero
  Lewis charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css` — confirmed by inspection.
- Only the real 4.5/2 rating is shown in Reviews; no review text/cards are
  invented anywhere.
- Footer reads exactly: "Designed by Lewis Tech," linked to
  `lewistechservices.com` (owner instruction: never say "Lewis Digital" on
  client-facing pages).
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream
  brand (it's our sales tool) — untouched, per `client-demo-site` §4.
- Structurally distinct from all nine sibling demos — see the table above.

## Notes for outreach

- This business has a real, positive (if unclaimed and thin) Google
  presence — the honest pitch is "your own listing already says good
  things; let's put them somewhere people can actually see them, and give
  you a place for the reviews to land once they start coming in with
  text."
- Claiming the Google Business Profile is a natural add-on conversation —
  the listing is unclaimed today.
- If the owner provides real hours, a confirmed service list, or an actual
  business photo, swap them into `index.html`/`assets/` and re-publish.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (owner/Lead reviews and pushes).
