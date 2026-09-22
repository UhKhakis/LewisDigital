# Lane's RV Repair: Mobile Service — Demo Site

One-page demo website for **Lane's RV Repair: Mobile Service** (service
area around College Station, TX — no fixed street address), built for
Lewis Digital's owner-authorized batch-10 build (round 3, batch B). Static
HTML + CSS, no build step.

## Research (per `client-demo-site` §1 — real reviews before design)

**Source:** Lane's RV Repair's public Google Business Profile,
https://www.google.com/maps/search/Lane%27s+RV+Repair+Mobile+Service+College+Station+TX,
verified live via browser 2026-09-21.

- **Rating:** 4.7 stars, 31 reviews (29 five-star, 0 four/three/two-star,
  2 one-star per the listing's own breakdown).
- **Category:** Repair service (mobile RV repair).
- **Phone:** (979) 446-4941. No public street address — this is a
  mobile-only service business, confirmed by the listing showing no
  address field at all (only hours and phone).
- **Hours, full week, verified on the listing:** Monday–Friday 8 AM–5 PM;
  Saturday and Sunday closed.
- **No independent website** and no posted business photos to extract
  color from, so the brand is **derived**, not photo-sourced (§1's
  fallback clause).

**Reviews read for internal design research** (3 read in full, plus the
listing's own AI-generated topic tags, not published as page copy per
§1/§3):

- Jim Herman (Local Guide, 5★): broke a leaf spring driving into College
  Station; "Clay answered my call promptly, walked me through ordering new
  springs... promptly came out and spent six or seven hours installing
  the [springs]." Owner's reply: "Thank you so much for the kind words...
  Thank you and God bless."
- Marie Gremmels (5★): "Over the years I have had the pleasure of using
  Lane's Mobile RV service and Clay has exceeded my expectations in every
  way. The quality of the work is outstanding... he really cares about his
  customers and takes pride in what he [does]." Owner's reply again signs
  off "Thank you and God bless Ms. Gremmels."
- Marcus Nash (1★): a negative review alleging a lack of transparency
  around paying for parts over the phone; the owner's reply disputes the
  characterization and says he had been responding. Read honestly as part
  of the full picture — not every review is a five-star match, and this
  one is disclosed here rather than cherry-picked away.
- Google's own review-topic tags on the listing: "prompt repair" (2),
  "fair pricing" (4), "detailed work" (2), "honest work" (2), plus 6 more
  not opened.

**Vocabulary/theme takeaway:** Clay is named personally and warmly in
nearly every review, replies to almost all of them himself, and
consistently signs off with a genuine "thank you and God bless" — a small,
personal, faith-inflected voice, not a corporate one. Repeat customers use
words like "over the years" and "exceeded my expectations." Because
there's no fixed shop to show a photo of, the design's signature element
is a dashed "service route" motif instead of a storefront hero — an
honest way to represent a mobile-only business rather than implying a shop
address that doesn't exist.

No Facebook/Instagram or other real photos were found, so per §1's
fallback clause the palette is a **designer choice** seeded by the trade
(RV/camper travel) — a retro two-tone turquoise + sunset coral, evoking
classic camper paint jobs and the open road — disclosed here as derived,
not measured from a real photo.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Turquoise (`--turquoise #1f8a8c`) + sunset coral (`--coral #e8734a`) + cream (`--cream #fbf3e6`) + warm brown-charcoal ink | Retro camper two-tone, distinct in hue from A & K Transmission Repair's teal-black in this same batch |
| Typography | Baloo 2 (rounded, friendly display) + Mulish (body) + DM Mono (labels) | Rounded/friendly to match Clay's warm, personal, faith-inflected review tone — not used elsewhere in the repo |
| Hero | Two-tone "camper stripe" band behind a rounded photo frame | Distinct silhouette from every other hero in this batch |
| Signature element | Dashed "service route" map connecting nearby towns, with an oversized coral van dot on College Station | Honestly represents a mobile-only business with no fixed address, instead of implying a storefront |
| Reviews | Coral rounded badge | Distinct shape/color from A & K's circular amber dial and Silver Thimble/Siegert's card treatments |

## Structural distinctness

No other RV-repair or mobile-service demo exists in `demos/` yet, so the
main distinctness check is against this batch's siblings and the repo's
existing auto-trade demos generally:

- Unlike every storefront-based demo in the repo, this one has **no
  address section at all** — hours and phone stand alone, and the "find
  us" section is replaced entirely by the route map, because showing a
  fake address would be dishonest for a mobile-only business.
- Rounded, warm, light-first palette (turquoise/coral/cream) contrasts
  with A & K Transmission Repair's dark teal-black instrument-panel theme
  and Siegert Radiator Shop's parchment heritage theme elsewhere in this
  batch.
- Baloo 2's rounded display type is not used by any other demo in the
  repo, keeping the letterforms themselves distinct, not just the colors.

## What is REAL (verified & traceable)

- Business name, category, phone: Lane's RV Repair's Google Business
  Profile, verified 2026-09-21.
- Rating: 4.7 stars, 31 reviews, star breakdown (29/0/0/0/2).
- Full weekly hours: Mon–Fri 8 AM–5 PM, Sat/Sun closed — shown directly on
  the listing, verified 2026-09-21.
- No public street address — confirmed absent from the listing, consistent
  with a mobile-only service model.
- "Google" link points to the exact `source_url` given in the build brief.
- Owner name "Clay" — consistent across multiple independent review texts
  and owner replies on the listing.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Hero photo** (`assets/hero-rv.jpg`) and **about-section photo**
  (`assets/rv-detail.jpg`): free-license Pexels stock photos — not photos
  of Lane's actual vehicle, tools, or any customer's RV. Captioned as
  illustrative in both the visible `alt` text and on-page caption.
- **Service-route map**: the towns shown (Bryan, College Station,
  Navasota, Caldwell) are an illustrative example of a College
  Station-centered mobile radius, explicitly labeled as such — not a
  confirmed service boundary from the business.
- **Services list**: generic examples for mobile RV repair, informed by
  real review content (leaf springs, diagnostics) but not Lane's confirmed
  price list or exact service menu — labeled "confirm by phone."
- **Reviews section**: only the real 4.7/31 rating is shown; review text
  stays an explicit "will appear here once connected" placeholder — no
  scraped review quotes appear as page copy.

## Photo sourcing

- Hero (`assets/hero-rv.jpg`): [pexels.com/photo/12441114](https://www.pexels.com/photo/white-camper-van-parked-on-the-road-12441114/)
  ("White Camper Van Parked on the Road"), photographer **Jordi Clapera
  Parés**.
- About section (`assets/rv-detail.jpg`): [pexels.com/photo/28273511](https://www.pexels.com/photo/a-window-on-the-side-of-an-rv-28273511/)
  ("Closeup of a Window of a Camper Van"), photographer **Jaykumar
  Bherwani**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free for commercial use, no attribution required, credited here anyway).

## Brand-rule compliance

- Client page uses only the derived turquoise/coral/cream/brown-charcoal
  system — no Lewis Digital gold `#C9A227`, no Lewis charcoal `#16130e`,
  no Lewis cream `#fbf8f1` anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  `https://lewistechservices.com/` — no "Lewis Digital" anywhere on the
  client-facing page.
- **"See us on Google" link confirmed present** in three places
  (hero, hours/contact card, and the closing contact section), all
  pointing to the exact brief `source_url`:
  `https://www.google.com/maps/search/Lane%27s+RV+Repair+Mobile+Service+College+Station+TX`.
- `pitch-sheet.html` keeps the Lewis Digital gold/charcoal/cream palette
  untouched (it's our own sales tool) with Lane's real name, service area,
  phone, and rating.

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero, service-route map, services, about Clay, hours, reviews, contact, footer |
| `styles.css` | Full client-brand theme |
| `assets/hero-rv.jpg` | Hero photo (stock, illustrative) |
| `assets/rv-detail.jpg` | About-section photo (stock, illustrative) |
| `pitch-sheet.html` | Lewis Digital-branded printable sales sheet (untouched brand) |

## Preview

```bash
cd demos/lanes-rv-repair
python3 -m http.server 8302 --bind 127.0.0.1
```
