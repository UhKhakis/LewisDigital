# Hernandez Pro Drywall & Painting — Demo Site

One-page demo website for **Hernandez Pro Drywall & Painting** (Bryan, TX),
a painting and drywall repair contractor run by Randy. Built as part of
Batch 5 ("trades" round) — owner-authorized batch build, per the Lead's
brief; no individual client confirmation was sought before building,
consistent with that authorization.

## Why this business

This batch's strongest proof point: a real 5.0-star rating from **25
reviews** — the most of any business in this batch — with rich, consistent
review-topic signal naming the owner personally. Not a tile/flooring/
countertop business, so no cross-trade distinctness requirement applies
here, but it still needed its own bespoke identity, unrelated to any of the
~42 existing demos.

## Research (2026-09-05)

**Source:** [google.com/maps/search/Hernandez+Pro+Drywall+%26+Painting+Bryan+TX](https://www.google.com/maps/search/Hernandez+Pro+Drywall+%26+Painting+Bryan+TX)
— live Google Maps listing, checked 2026-09-05.

- **Category:** Dry wall contractor. **Rating:** 5.0★ from **25 reviews**.
- **Address:** 700 E William Joel Bryan Pkwy, Bryan, TX 77803. **Phone:**
  (979) 571-0045.
- **Hours (partial, verified):** "Closed · Opens 8 AM" shown live at check
  time.
- **No independent website** — per the Lead's pre-verified brief, listed on
  Angi/BBB/Yelp directories only; the Google listing has no website link.
- **Google's own review-topic tags** (counts as shown on the listing):
  quality of work (6), professional staff (5), pricing (3), fair pricing
  (3), ceiling (3), prompt call back (2), wall repair (2), responsive (2),
  polite staff (2), customer satisfaction (2), plus more not expanded.
- **Real review text read** (internal research only, per the
  `client-demo-site` skill — never published verbatim as page copy):
  - Ben J. (a year ago): "Randy does an outstanding job and delivers
    high-quality work. He's not only incredibly hardworking but also great
    to talk to — friendly, personable, and genuine." Owner replied by name,
    thanking Ben personally.
  - Cindy Rivera (3 years ago): "I would highly recommend Randy and his
    company for any home painting projects. He is professional, does great
    quality work and is priced fair." Owner reply again personal and warm.
  - Lee (2 years ago): "Randy did a great job on the Sheetrock Repair on
    both the ceiling in my home and in my garage... He is a perfectionist
    and loves his work." Owner reply: "It was a pleasure serving you Mr.
    Landry thx for the Review."
  - **Vocabulary/tone takeaway:** every review names Randy personally;
    every owner reply is warm, personal, and specific to the reviewer by
    name — a real relationship-driven small business, not a faceless crew.
    Consistent themes: fair pricing, professionalism, promptness,
    perfectionism on repairs. This is the seed for the "fresh coat, fair
    price, on time" headline and the trust-grid section (Straightforward
    Pricing / On Time Every Time / Clean Job Site / Free Estimates) — none
    of which quote the reviews directly, but all of which reflect the real,
    repeated themes in Google's own topic tags.

## Brand system

| Token | Value | Rationale |
|---|---|---|
| `--eggshell` | `#f7f2e6` | Warm "fresh coat" neutral base |
| `--charcoal` | `#262320` | Warm near-black ink |
| `--tape-blue` | `#3f6b8a` | Confident "painter's tape" accent — CTA color, distinct from every other palette in this batch |

Plus a **decorative paint-swatch chip strip** (blue, mustard, terracotta,
sage, dusty rose, eggshell) used purely as a structural/service-label
device directly under the hero — an original "paint deck" motif tied to the
literal trade, not a measured brand palette.

**Typography:** Sen (display — friendly, confident, rounded-bold) + PT Sans
(body) + Anonymous Pro (mono — small labels). None of these three families
are used by any other demo in the repo.

**`ui-ux-pro-max` note:** no query was run for this business — the strong,
specific real-review signal (personal owner replies, fair-pricing/
professionalism theme) was a sufficient design seed on its own, per
`builder.md`'s guidance to use the database to pressure-test a choice, not
manufacture one from nothing.

## Layout notes

Distinct from every tile/flooring/countertop demo in this batch (not
required to diff against them since this is a different trade), and from
every other demo in `demos/` in hero style (full-bleed photo + a literal
horizontal paint-swatch-chip strip functioning as the service nav — the
signature element), section order (hero → swatch strip → trust grid →
services → craft photo → reviews → contact), and type pairing (Sen + PT
Sans + Anonymous Pro, none reused elsewhere).

## Verified facts vs. placeholders

**What is REAL** (source: Google Maps listing, checked 2026-09-05):

- Business name: **Hernandez Pro Drywall & Painting**
- Category: **Dry wall contractor** (painting & drywall repair, owner
  Randy)
- Address: **700 E William Joel Bryan Pkwy, Bryan, TX 77803**
- Phone: **(979) 571-0045**
- Google rating: **5.0 stars, 25 reviews** — this batch's strongest proof
  point
- Partial hours: **opens 8 AM** (only data point shown live)
- No independent website (listed on Angi/BBB/Yelp only)

**What is PLACEHOLDER / ILLUSTRATIVE:**

- **Hero photo** (`assets/hero-roller.jpg`) and **work-section photo**
  (`assets/drywall-repair.jpg`): free-license Pexels stock photos, not
  photos of Randy or his own job sites. See "Photos" below.
- **Service list** (Interior Painting, Exterior Painting, Drywall Repair,
  Texture & Ceilings, Cabinet Refinishing, Pressure Washing): generic
  examples for a painting/drywall contractor, explicitly labeled "confirm
  by phone."
- **Trust-grid copy** (Straightforward Pricing, On Time Every Time, Clean
  Job Site, Free Estimates): original marketing language informed by real
  review-topic themes (fair pricing, promptness, professionalism) — not a
  quote, not an invented statistic.
- **Paint-swatch strip colors/labels**: purely decorative/structural, not a
  measured brand palette or Randy's actual color offerings.
- **Full weekly hours**: not published beyond the single "opens 8 AM" data
  point; page says "call for full weekly hours" rather than guessing.
- **Reviews section**: only the real 5.0★/25-review count is shown; the
  review card is an explicit "reviews will appear here once connected"
  placeholder — no real review text, owner-reply text, or topic-tag data is
  published as page copy, per §1/§3's internal-research-only rule.

## Photos

Both free-license, no attribution required (credited here anyway), from
[Pexels](https://www.pexels.com/license/):

- **Hero** (`assets/hero-roller.jpg`): [pexels.com/photo/5583126](https://www.pexels.com/photo/hand-holding-a-pain-roller-5583126/)
  ("Hand Holding a Pain Roller"), photographer **Polina Tankilevitch** — a
  hand-only shot painting a wall, matching the "fresh coat" direction
  without claiming to depict Randy or his crew.
- **Work section** (`assets/drywall-repair.jpg`): [pexels.com/photo/11427055](https://www.pexels.com/photo/man-wearing-gloves-on-a-renovation-11427055/)
  ("Man Wearing Gloves on a Renovation"), photographer **Jimmy Nilsson
  Masth** — a gloved hand finishing drywall, directly matching the real
  "wall repair"/"ceiling" review-topic themes.

## Brand-rule compliance

- No "Lewis Digital" anywhere on the client-facing page. Footer reads
  exactly **"Designed by Lewis Tech"**, linked to
  **https://lewistechservices.com/**.
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand
  (the one allowed exception) — untouched from the reference template
  pattern (`demos/petes-trees/pitch-sheet.html`), facts swapped in.
- Palette, fonts and layout are bespoke to this business and not reused
  from any of the ~42 existing demos.
- Real stock photos used for hero + one supporting section, sourced from
  Pexels, both hands-only (no faces claimed as Randy or his crew).
- Real review text and Google's topic-tag data used only as internal design
  research (this README) — never published as page copy, quotes, or
  invented testimonials.
