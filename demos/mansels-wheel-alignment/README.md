# Mansel's Wheel Alignment — Demo Site

## Why this business

Mansel's Wheel Alignment is a wheel alignment/brake shop on S Main St in
Bryan, run by owner Bobby Mansel since 1975 — 51 years in business, one of
the longest-running businesses in the whole campaign. It carries an
outstanding 208 Google reviews at a 4.7-star average, by far the highest
review count of any lead built in this campaign, and no real website (an
aggregator link found in directories is confirmed to be a generic
multi-business template, not the shop's own site). Longevity and review
volume are the two strongest proof points here, and the design leans into
both directly.

## Research citations

- **Lead source (facts + initial verification):** `business/leads/leads.csv`
  row 75 — "Independent wheel alignment/brake shop run by owner Bobby
  Mansel, in business since 1975 (51 years); 4.7(208) Google reviews; no
  real website found; verified 2026-09-05."
- **Listing URL:** https://www.google.com/maps/search/Mansel%27s+Wheel+Alignment+Bryan+TX
- **Independent review-mining pass (this build):** conducted 2026-09-21 via
  the business's public Google Maps listing. Read the review summary
  (3 highlighted excerpts) plus 3 full review texts (Justin Schoener,
  Eliana Garcia, Brian Leonard) and the review-topic tag list (alignment —
  22 mentions, brake work — 5, wheel alignment — 6, front end alignment — 2,
  plus additional unlabeled topics).
- **What the research surfaced:** fair/reasonable pricing repeated across
  many reviews, fast turnaround (one review describes a job finished ~20
  minutes over a 1-hour estimate, not under), a clean and well-managed shop,
  named staff (Dennis and AC) praised for professionalism, and repeat
  customers bringing in additional vehicles after a good first experience.
  No existing website was found to pull color/photo signals from — the
  palette below is honestly derived from the "established institution"
  read of the business, not sourced from client photography.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Heritage navy (`#1b2942`) + deep burgundy (`#7a2632`) + aged cream (`#f4efe0`) + slate-blue secondary (`#64738a`) | An "established institution" system built around longevity, deliberately NOT the dark-gunmetal + brass/mustard "toolbox" formula used elsewhere in this trade, and without reusing the oxblood + brass pairing already on Sam's Shoe Service (a different trade but a close palette to avoid). |
| Display font | Libre Baskerville | A heritage serif — none of this trade's other demos use a book-style serif; they all lean condensed-industrial (Khand, Oswald, Bebas Neue, Righteous, Space Grotesk). |
| Body font | Karla | Clean, neutral, legible. |
| Mono/accent font | IBM Plex Mono | Used for stat labels and milestone figures — distinct from JetBrains Mono (Soto's Mufflers) and Space Mono (AK Transmission). |
| Structural signature | A "51 years / 208 reviews / 4.7 stars" milestone stat band directly under the hero, plus a real Google review-topic chip cloud (topic counts, not quotes) | No other demo in the gallery leads with a stat band like this — it's built specifically to make the review volume and longevity, this lead's two strongest signals, immediately visible. |

## Structural distinctness

Checked directly against every other auto-repair demo already in the
gallery before finalizing: Soto's Mufflers (gunmetal/rust/chrome/caution,
condensed Khand, shop-rules chalkboard + ticket stub), Exhaust Works
(racing-green/spark-orange, Righteous display, process timeline), AK
Transmission (teal-black/amber, Space Grotesk, no milestone band), Siegert
Radiator (antifreeze-green/brass, Oswald), Andy's Auto Repair
(service-green/mustard, Bebas Neue), Bos Garage (cream/barn-red, no mono
accent), Bryan Muffler & Performance (asphalt/steel/sign-red). None of
those use navy + burgundy, a heritage book serif, or a milestone-stat-band +
topic-chip-cloud structure — Mansel's is the only demo in the gallery built
explicitly around "decades in business + hundreds of reviews" as the
headline story, which none of the above lead with (most lead with a
specialty service or shop character instead).

## Verified vs. placeholder

| Field | Status | Source |
|---|---|---|
| Business name, category, town, phone | Verified | `business/leads/leads.csv`, verified 2026-09-05 |
| Rating (4.7) / review count (208) | Verified | Google Business Profile, re-verified 2026-09-21 |
| Owner name "Bobby Mansel," est. 1975 (51 years) | Verified | `business/leads/leads.csv`, verified 2026-09-05 |
| Staff names "Dennis" and "AC" | Verified | Real review by Eliana Garcia on the Google Business Profile, read 2026-09-21 — summarized, not quoted |
| Review-topic counts (alignment 22, brake work 5, etc.) | Verified | Google's own topic tags on the Business Profile, re-verified 2026-09-21 |
| Service list (alignment, brake work, bearings, etc.) | Verified topics, generic descriptions | Built from real Google review-topic tags and review summaries; page explicitly states "confirm exactly what's needed by calling" |
| Hours | Placeholder | "Call or message for hours" — no hours published on the listing at verification |
| Website | Placeholder / disclosed absence | "No independent website is listed... a link found in directories is a generic multi-business template, not the shop's own site" |
| Hero + supporting photos | Placeholder (illustrative stock) | Pexels — hero: photographer Gansham Ramchandani; supporting: photographer Andrea Piacquadio — both captioned as illustrative, not photos of the real business |
| Reviews section (on-page cards) | Placeholder | "Google reviews will appear here once connected" — real numeric rating shown, no invented quotes |

## Brand-rule compliance

- No "Lewis Digital" text anywhere on `index.html`. ✅
- Footer reads exactly "Designed by Lewis Tech" linking to
  `https://lewistechservices.com/`. ✅
- Palette/fonts are unique to this business — not Lewis Digital's
  gold/charcoal/cream, not reused from any other demo in `demos/`. ✅
- **Google link confirmed present and correct:** `index.html` contains five
  `<a href="https://www.google.com/maps/search/Mansel%27s+Wheel+Alignment+Bryan+TX">`
  links (hero, reviews section, find-us address, contact CTA, directions),
  all using the exact `source_url` from the lead brief. ✅
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand,
  as intended — the one page exempted from the client-brand rule. ✅
