# West 25th Laundry & Dry Clean — Demo Site

## Why this business

West 25th Laundry & Dry Clean is a family-owned dry cleaner/laundry in
Bryan, run personally by an owner reviewers call "Mr. Roy." It's a strong
proof-point lead: 4.8 stars from 23 Google reviews, no existing website, and
a specific, ownable detail — the shop makes its own starch in-house, which
reviewers call out by name ("they can do HEAVY starch and the starch is
homemade!!"). It's also the first non-automotive demo in this batch, making
it an easy structural break from the rest of the gallery.

## Research citations

- **Lead source (facts + initial verification):** `business/leads/leads.csv`
  row 70 — "Independent, family-owned dry cleaning/laundry business run by
  owner Roy; 4.8(23) Google reviews citing homemade heavy starch and
  personal service; no website found; verified 2026-09-05."
- **Listing URL:** https://www.google.com/maps/search/West+25th+Laundry+%26+Dry+Clean+Bryan+TX
- **Independent review-mining pass (this build):** conducted 2026-09-21 via
  the business's public Google Maps listing. Read the review summary
  (3 highlighted excerpts) plus 3 full review texts (Larissa Cella, Jose
  Benitez, Bryan Shaw) and the review-topic tag list (pride in work, people,
  jeans, starch, heavy starch).
- **What the research surfaced:** the homemade starch detail, repeated
  praise for Mr. Roy personally ("dependable," "genuine," "takes pride in
  his work"), the fact the shop is privately owned and stays open Saturdays
  even when that's been a challenge post-reopening, and that jeans are
  specifically mentioned among garments handled. No existing website,
  Facebook page, or Instagram was found to pull color signals from — the
  palette below is honestly derived, not sourced from client photography.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Starch-white/cream (`#f8f5ee`) + sage green (`#7c9473`) + warm terracotta (`#c1694a`) + deep ink-navy text (`#26343a`) | A pressed-linen, botanical-adjacent system evoking fresh laundry and homemade craft — chosen to differ from the plum/lavender salon system on Neff's Majestic Hair Studio and the rose/blush system on Silver Thimble Alterations, the closest "soft" demos already in the gallery. |
| Display font | Cormorant Garamond (elegant serif, italicized headers) | Evokes a pressed, cared-for garment rather than an industrial laundromat. |
| Body font | Figtree | Clean and warm, legible for service copy. |
| Accent treatment | Letterspaced small caps (no mono typeface) | Distinguishes this page from every mono-accented demo in the batch. |
| Structural signature | A three-card "starch level" panel (light / heavy / no starch) with "heavy" flagged as the reviewer-favorite, homemade specialty | No other demo in the gallery has an equivalent feature-comparison card — it's built specifically around the one detail reviewers repeat most. |

## Structural distinctness

West 25th is the first dry-cleaning/laundry demo in the gallery, so there's
no same-trade sibling to differentiate against directly. It was still
checked against the closest "soft," non-automotive demos already built
(Neff's Majestic Hair Studio, Silver Thimble Alterations, Custom Classic
Upholstery, Gomez Shoe Repair, Sam's Shoe Service) to avoid palette
collision — none of those use a sage-green + terracotta + starch-white
system, and none build a "starch card" or equivalent feature-comparison
element.

## Verified vs. placeholder

| Field | Status | Source |
|---|---|---|
| Business name, category, town, phone | Verified | `business/leads/leads.csv`, verified 2026-09-05 |
| Rating (4.8) / review count (23) | Verified | Google Business Profile, re-verified 2026-09-21 |
| Owner name "Mr. Roy" | Verified | Real reviews naming him directly, re-verified 2026-09-21 |
| Homemade starch detail | Verified (summarized, not quoted) | Real review by Larissa Cella on the Google Business Profile, read 2026-09-21 — summarized, never republished as a direct quote |
| Open Saturdays | Verified (summarized) | Real review by Bryan Shaw describing Saturday hours, read 2026-09-21 |
| Starch levels (light/medium/heavy) | Placeholder framing of a verified detail | "Heavy" starch is verified via reviews; "light" and "no starch" are reasonable generic options, page states to confirm exact options by phone |
| Hours | Placeholder | "Call or message for hours" except Saturday, which is verified open per reviews |
| Website | Placeholder / disclosed absence | "No independent website is listed... per its Google Business Profile" |
| Hero + supporting photos | Placeholder (illustrative stock) | Pexels — hero: photographer Tima Miroshnichenko; supporting: photographer Ron Lach — both captioned as illustrative, not photos of the real business |
| Reviews section (on-page cards) | Placeholder | "Google reviews will appear here once connected" — real numeric rating shown, no invented quotes |

## Brand-rule compliance

- No "Lewis Digital" text anywhere on `index.html`. ✅
- Footer reads exactly "Designed by Lewis Tech" linking to
  `https://lewistechservices.com/`. ✅
- Palette/fonts are unique to this business — not Lewis Digital's
  gold/charcoal/cream, not reused from any other demo in `demos/`. ✅
- **Google link confirmed present and correct:** `index.html` contains five
  `<a href="https://www.google.com/maps/search/West+25th+Laundry+%26+Dry+Clean+Bryan+TX">`
  links (hero, reviews section, find-us address, contact CTA, directions),
  all using the exact `source_url` from the lead brief. ✅
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand,
  as intended — the one page exempted from the client-brand rule. ✅
