# Aggieland Septic Service — Demo Site

One-page demo website for **Aggieland Septic Service** (Bryan, TX), built in
its own bespoke brand — and **deliberately structurally distinct** from
`demos/all-american-septic/`, the other septic demo in this gallery (both
required per this batch's brief). Part of round 2, batch 4 (the final
batch) of Lewis Digital's demo campaign. Static HTML/CSS, no framework, no
build step.

## Research (before any design decision)

**Google Business listing** — `https://www.google.com/maps/search/Aggieland+Septic+Service+TX`,
independently loaded and read live by the Builder, **2026-09-05**:

- Name: **Aggieland Septic Service**. Google's own category: **Septic
  system service**.
- No public address — a **service-area business**. Phone:
  **(979) 777-3900**.
- Rating: **4.2 stars, 5 reviews** — a mixed record (see honesty note
  below), shown exactly as-is, not rounded up.
- Website field: listing only offered "Add website" — confirming no
  independent site exists.
- Hours: listing only offered "Add hours" — no published hours exist at
  all, stronger than the usual "call to confirm" case; the page states
  plainly that no hours are published.
- **Individual reviews read for internal design research** (not published
  as page copy, per the `client-demo-site` skill's internal-research-only
  rule): Justin Schoener (Local Guide, 4 months ago) — "Robert & Lanie were
  the absolute hardest workers I've seen in a long time. They located my
  septic drains & explained to me the condition of the tanks etc."; a user
  displaying as "Notify" (Local Guide, 1 week ago, marked NEW) — "Excellent
  service and communication. Showed up as scheduled, answered any and all
  questions we had, and advised on future care and maintenance."; **Basma
  Mohamed (3 months ago) — "Very rude and bad service.. I don't recommend"**
  — a genuine negative review, logged here honestly rather than omitted,
  consistent with the 4.2 (not 5.0) rating. Two further reviews exist but
  were not opened in full.
- Named technicians **Robert & Lanie** appear directly in the strongest
  review, matching the brief's pre-supplied fact.

**Honesty note on the mixed record**: unlike the other three businesses in
this batch (all 4.5+ stars), Aggieland's rating is genuinely mixed — a real
5★ review naming two techs by name, alongside a real 1-2★ complaint about
rudeness. Per the `client-demo-site` skill, review *text* (positive or
negative) stays internal research only; the live page shows only the real
aggregate rating (4.2, 5 reviews) plus the standard honest placeholder for
individual reviews. The rating itself is never inflated or hidden.

**Vocabulary/theme takeaway**: hardworking, thorough, explains-the-problem
technicians on the positive side; a genuine service complaint on the
negative side. This is a real, working small operation, not a flawless one
— the design leans into "straight talk / a real service report you can
trust," not empty flattery, which is honestly what the mixed evidence
supports.

**`ui-ux-pro-max` query**: `search.py "septic tank service rural Texas
Aggieland" --design-system -p "Aggieland Septic"` returned only the
database's generic fallback (Hero+Features+CTA, "Minimalism & Swiss
Style") — no niche-specific match, same generic fallback as the other three
businesses in this batch. Final direction below comes from the Builder's
own judgment, per `frontend-design`'s brainstorm → critique process.

## Palette derivation — disclosed honestly

No usable brand photos, signage, or social presence exist for this
service-area business (no website, no published photos beyond generic
"truck" and "storage tank" listing categories). Per `client-demo-site` §1,
when no brand signal can be derived from photos/reviews, the palette is
chosen freely and disclosed as **derived, not sourced**. Here it's derived
from the business's own name: "Aggieland" is the well-known public
nickname for the Bryan&ndash;College Station area (home of Texas A&M
University), so the palette nods to a maroon-family tone as a genuine local
reference. The exact hue is **intentionally shifted off Texas A&M's
official maroon (#500000)** to a deeper oxblood/wine tone (`#5c2333`) —
this is a regional-identity nod, not a claim of university affiliation,
sponsorship, or use of any licensed/trademarked color value.

## Structural distinctness vs. `demos/all-american-septic/`

| Element | All American Septic | Aggieland Septic (this demo) |
|---|---|---|
| Header | Non-sticky, no logo mark, plain underline-style CTA | **Sticky**, circular seal-badge logo mark ("AG"), filled-button CTA |
| Hero | Side-by-side split (copy left, plain rounded photo right, no overlay) | Full-width photo (not split) that **bleeds into a solid maroon band** below it, headline sits in the band |
| "How it works" | 3 separate numbered circular-step cards in a horizontal strip with arrows | A **single stamped "service report" card** with a dashed border and a rotated seal, 3 rows inside it (no numbered circles, no arrows) |
| About section | Photo-left / copy-right split | **No photo split at all** — plain full-width text block |
| Palette | Olive-forest green + rust-orange + cream | Oxblood-maroon + graphite-grey + parchment cream (no olive, no rust-orange) |
| Typography | Roboto Slab + Source Sans 3 + Overpass Mono | Domine + Barlow + DM Mono |
| Buttons | 8px-radius rounded rectangles | 4px-radius near-square buttons |

## Brand system

| Signal | Source |
|---|---|
| Oxblood-maroon + graphite + parchment palette | Derived from the business's own name (regional "Aggieland" reference), disclosed honestly above — not photo-sourced |
| Domine (display serif) + Barlow (body) + DM Mono (accent) | Fresh pairing not used elsewhere in this gallery; a sturdy serif read for an "official report" feel |
| Full-bleed-into-band hero, single stamped service-report card | Original signature elements chosen specifically to differ from All American Septic's split hero and 3-card numbered strip |

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero, about/service-area, stamped service-report card, Google reviews, service area/hours, contact, footer |
| `styles.css` | Client brand system (maroon/graphite/parchment), Domine/Barlow/DM Mono |
| `assets/hero-excavator-field.jpg` | Hero photo: Pexels, ["Yellow Excavator on Brown Field Under Gloomy Sky"](https://www.pexels.com/photo/yellow-excavator-on-brown-field-under-gloomy-sky-9389186/), photographer **Jan Zakelj** — illustrative, not Aggieland's own job site |
| `assets/digging-site.jpg` | Unused in this pass — reserved supporting photo: Pexels, ["Laborer Digging Earth in Construction Site"](https://www.pexels.com/photo/laborer-digging-earth-in-construction-site-35281193/), photographer **Azraf Mohammod Nakib** |
| `README.md` | This file |
| `pitch-sheet.html` | Lewis-Digital-branded printable pitch sheet (our sales tool, gold/charcoal/cream untouched) |

Both photos are free-to-use under the [Pexels License](https://www.pexels.com/license/)
(no attribution legally required, credited here anyway) and are labeled as
illustrative stock photos in their `alt`/`figcaption` text — not photos of
Aggieland's real crew or job sites.

## Preview

```bash
cd demos/aggieland-septic-service
python3 -m http.server 8303 --bind 127.0.0.1
```

## What is REAL (verified & traceable)

- Business name, category ("Septic system service"), phone, service-area
  status (no public address, no published hours) — Google Business
  listing, verified 2026-09-05.
- 4.2-star rating, 5-review count — same listing, same date, shown
  honestly without rounding.
- No independent website — same listing, same date.
- Named technicians Robert & Lanie — appear in a real, public review, per
  the brief's pre-supplied fact.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Hours**: no hours are published on the listing at all — the page
  states this plainly rather than inventing a placeholder like "call for
  hours" that implies hours simply aren't shown here.
- **Service steps** (locate & inspect, pump or repair, advise on upkeep):
  generic categories of septic work informed by real review language
  ("located my septic drains," "advised on future care and maintenance")
  but not a confirmed price/service menu — page carries an explicit
  "confirm by phone" note.
- **Hero photo**: free-license Pexels stock photo of a generic rural
  excavation scene, not Aggieland's real crew or job site — disclosed in
  `alt` text and this README.
- **Reviews section**: only the real 4.2/5 rating is shown; individual
  review text (positive or negative) stays internal research per the
  skill's rule — the page shows an honest "full written reviews will
  appear here once connected" placeholder.

## Brand-rule compliance

- Client-facing page uses only this business's own brand colors/fonts
  (oxblood-maroon, graphite, parchment cream; Domine/Barlow/DM Mono) — **no
  Lewis Digital gold/charcoal/cream** anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on the
  client-facing page.
- **"See us on Google" link confirmed present and correct**: `index.html`
  contains `<a href="https://www.google.com/maps/search/Aggieland+Septic+Service+TX" target="_blank" rel="noopener">See us on Google</a>`
  in the reviews section — the exact `source_url` given in the brief.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/cream
  brand (our own sales tool) with this business's real facts substituted in.
- Structurally distinct from `demos/all-american-septic/` per the diff
  table above — confirmed before finishing this demo.
- Maroon palette explicitly disclosed as a regional-name reference, not an
  implied Texas A&M partnership — see "Palette derivation" above.
