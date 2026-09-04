# 1st Choice Steam Cleaning — Demo Site (Batch 3, 2026-09-03)

One-page demo website for **1st Choice Steam Cleaning** ((979) 220-8253 —
Carpet cleaning service, 3215 Sunflower Trail, College Station, TX 77845).
This is one of five demos in an owner-authorized batch build (Maxey Way
Window Cleaning, Sunrise Pool & Spa Services, Smart Water Irrigation Repair,
All-Tex Roofing) — the normal "no demo until the client confirms interest"
gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/1st+Choice+Steam+Cleaning+979-220-8253`

- **4.9 stars, 63 reviews.** Category: Carpet cleaning service.
- Address confirmed on listing: **3215 Sunflower Trail, College Station, TX
  77845**. Listing shows "Opens 8 AM Fri" as a live status snapshot — used
  only as a single verified data point, not presented as full weekly hours.
- Google's own review-tag summary (structured listing feature, not invented):
  **steam cleaning ×5, water extraction ×2, quick response ×5, personable
  staff ×5**, plus 6 more untitled tags not individually opened.
- Google's own pull-quote snippets on the listing itself: "Hands down the
  best pricing and service in the BCS area!", "Great work and unbeatable
  prices.", "They did a wonderful job at a great price." — read for tone
  research only; per `client-demo-site` §1/§3 no review text (even Google's
  own real snippets) is reproduced on the page itself, only the rating and
  tag data.
- Named reviews read for research: Devin Jiang ("Best Carpet Cleaning Price
  IN B/CS!! Jason was amazing! He squeezed me in last minute on the same
  day"), Michael Sanchez ("Jason was great to work with! He got me
  scheduled last minute, made the process easy"), Caroline Inzone ("Jason
  was nothing but helpful and joyful!"). Owner **Jason** (confirmed as
  Jason Wolfington per the Lead's lead sheet) personally replies to
  reviews by name ("Thanks Devin. I appreciate it.", "Thank you. I really
  appreciate the review and it was great working with you.").
- No business website found; Google's "Add website" prompt confirms none is
  on file. No public street-address photo gallery to extract brand colors
  from — palette below is derived from the job itself (steam heat + water),
  not sourced from an existing visual identity, and is disclosed as such.
- Family-owned since 2007, per the Lead's pre-verified lead sheet.
- Social presence per the Lead's brief: Facebook (100+ followers), Instagram
  @1stchoicecarpet (40+ followers), Nextdoor — shown on-page as verified
  facts about where the business is findable online today.

## Design direction

**Family-run, fair-priced, fast-response.** The review record is
overwhelmingly about value and personality — "unbeatable prices," "great
work," a same-day squeeze-in, and an owner who replies to every review by
name. The design leans warm and direct rather than corporate: deep
water-teal (the extraction side of the job) paired with warm terracotta
(the steam/heat side), over a warm paper cream — a duotone not used by any
other demo in the gallery. Bricolage Grotesque (a friendly, slightly
rounded geometric display face) carries headings, Instrument Sans carries
body copy, and Fragment Mono marks data/tag elements — a fresh three-font
pairing not reused from any existing demo.

**Signature element:** a static top **trust ribbon** ("Family-owned since
2007 · Jason Wolfington · College Station, TX") — distinct from 95
Locksmith's sticky "dispatch bar" in both content and behavior (this one
scrolls away, it isn't pinned) — plus a soft dual-tone radial "steam swirl"
wash behind the hero copy.

## Structural distinctness vs. other demos

No other demo in `demos/` is a carpet cleaner. Closest neighbors by general
mood (cleaning/service trades) are Bucket of Suds Exterior Cleaning
(blue/gold, pressure washing) and DC Custom Seamless Gutters (teal/green):

| | 1st Choice (this demo) | Bucket of Suds (existing) | DC Gutters (existing) |
|---|---|---|---|
| Hero | Split copy/photo, radial steam-swirl wash | (different treatment) | (different treatment) |
| Palette | Teal + terracotta + cream | Blue + gold | Teal + green |
| Type pairing | Bricolage Grotesque + Instrument Sans + Fragment Mono | Baloo 2 + Rubik | Albert Sans + Outfit + Roboto Mono |
| Signature element | Static top trust ribbon + stats strip | (Distinct — not shared) | (Distinct — not shared) |
| Section order | Trust ribbon → Hero → Stats strip → Services → About → Reviews → Service area → Contact | (Different order) | (Different order) |

The 4-stat strip directly under the hero (rating / review count / founding
year / same-day scheduling) is unique to this demo across the gallery.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (trust ribbon, hero, stats, services, about, reviews, service area, contact, footer) |
| `styles.css` | All styling — sourced client brand (teal/terracotta/cream, Bricolage Grotesque/Instrument Sans/Fragment Mono) |
| `assets/hero-clean-living-room.jpg` | Hero photo — free-license stock photo |
| `assets/water-extraction-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos — **not** photos of 1st
Choice Steam Cleaning, Jason, or an actual customer's home:

- **Hero** (`assets/hero-clean-living-room.jpg`):
  [pexels.com/photo/7045833](https://www.pexels.com/photo/living-room-interior-with-armchair-and-sofa-near-table-7045833/)
  ("Living room interior with armchair and sofa near table"), photographer
  **Max Vakhtbovych**.
- **Services section** (`assets/water-extraction-detail.jpg`):
  [pexels.com/photo/38325](https://www.pexels.com/photo/black-and-red-canister-vacuum-cleaner-on-floor-38325/)
  ("Black and Red Canister Vacuum Cleaner on Floor" — a water-filtration
  cleaning machine), photographer **Pixabay**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/1st-choice-steam-cleaning
python -m http.server 8221 --bind 127.0.0.1   # preview on localhost:8221
```

Verified locally 2026-09-03: both images render correctly, header stays
sticky on scroll, no console errors, content renders correctly at desktop
and mobile widths.

## What is REAL (verified & traceable)

- Business name: **1st Choice Steam Cleaning**
- Owner: **Jason** (Jason Wolfington per the Lead's lead sheet) — first
  name confirmed directly from review-reply text on the public listing.
- Phone: **(979) 220-8253**
- Address: **3215 Sunflower Trail, College Station, TX 77845**
- Category: **Carpet cleaning service**
- **Google rating: 4.9 out of 5, from 63 reviews** — verified 2026-09-03.
- **Review-tag data and counts** (steam cleaning ×5, quick response ×5,
  personable staff ×5, water extraction ×2) — Google's own structured
  summary feature on the same listing, same date.
- **Friday opening time "8 AM"** — a single verified live-status data
  point from the listing, presented as such, not as full weekly hours.
- "See us on Google" link points to the real, exact source URL given for
  this business.
- Family-owned since 2007; Facebook/Instagram (@1stchoicecarpet)/Nextdoor
  presence — from the Lead's pre-verified lead sheet, not independently
  re-pulled from each social platform in this research pass.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Full weekly hours**: only the Friday 8 AM opening time is a verified
  listing fact; the page directs visitors to call/message to confirm hours
  for other days rather than guessing a full schedule.
- **Service tiles** (steam carpet cleaning, water extraction, upholstery,
  pet stain & odor, tile & grout, same-day requests): generic categories of
  carpet-care work, informed by review vocabulary but not an itemized,
  owner-confirmed service menu. The page states this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of 1st Choice, Jason, or a real customer's home.
- **Reviews section**: only the real 4.9/63 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page, even though real quotes exist on the public listing. Full
  review texts and Google's own pull-quotes read during research stayed
  internal to this README, per `client-demo-site` §1/§3.
- **About-section narrative** ("There's no call center here," "gets the job
  done right the first time"): original marketing language informed by the
  real review vocabulary above — not a direct quote, not an invented
  testimonial.
- **Color palette**: no usable brand-color source (no website, no visible
  storefront signage photos) was found — the teal/terracotta system is
  derived from the nature of the job (water + steam), disclosed here as
  derived rather than sourced from an existing visual identity.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (deep teal, terracotta, warm cream) and fonts (Bricolage Grotesque,
  Instrument Sans, Fragment Mono). **Zero Lewis Digital gold (`#C9A227`
  family), zero Lewis charcoal `#16130e`, zero Lewis cream `#fbf8f1`**
  anywhere in `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a carpet cleaner; checked against the
  gallery's other cleaning-trade demos (Bucket of Suds, DC Custom Seamless
  Gutters) for general design-language collision — see table above.

## Notes for outreach

- A 4.9-star, 63-review record with "personable staff" and "quick response"
  as top tags, plus an owner who personally replies to every review, is a
  strong, easy pitch point.
- No existing website means there's no migration friction — a clean first
  web presence beyond Google, Facebook, Instagram, and Nextdoor.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
