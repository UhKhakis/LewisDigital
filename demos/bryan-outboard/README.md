# Bryan Outboard Inc — Demo Site

One-page demo website for **Bryan Outboard Inc** (Bryan, TX), built in the shop's
own bespoke brand. Part of round 2, batch 4 (the final batch) of Lewis
Digital's demo campaign. Static HTML/CSS, no framework, no build step.

## Research (before any design decision)

**Google Business listing** — `https://www.google.com/maps/search/Bryan+Outboard+Inc+TX`,
independently loaded and read live by the Builder, **2026-09-05**:

- Name: **Bryan Outboard Inc**. Google's own category: **Hardware store**
  (the brief's `power_equipment_repair` categorization matches the actual
  business better than Google's generic category label — both are noted
  here for transparency).
- Address: **702 N Texas Ave, Bryan, TX 77803**. Phone: **(979) 822-6836**.
- Rating: **4.5 stars, 51 reviews** — the strongest review count of the four
  businesses in this batch.
- Website field on the listing: **stihlusa.com** — confirmed to be Stihl's
  own generic manufacturer page, not an independent Bryan Outboard site.
  This confirms the brief's note that the business has no real web presence
  of its own.
- Hours: listing showed **"Closed · Opens 8 AM Tue"** at check time — a
  single data point, not a full week, so the page treats hours as mostly
  unverified (see placeholder table below).
- **About tab attributes (all verified live)**: Wheelchair accessible
  entrance, wheelchair accessible parking lot, identifies as disabled-owned,
  small business, in-store pickup, onsite services, assembly service, repair
  services, service guarantee, quick visit, credit cards, debit cards.
- **Google's own highlighted review lines** (shown directly on the listing,
  not written by us): *"Good old fashioned small town service,"* *"Customer
  service knows there stuff and are very helpful,"* *"Great place to get
  stihl products repaired."* Google's own review-topic tag counts: saw (4),
  chainsaws (2), product (2).
- **Individual reviews read for internal design research** (not published as
  page copy, per the `client-demo-site` skill's internal-research-only
  rule): Fabiola Byrne (4★ Local Guide, 4 years ago) — "Took in my old
  extension chainsaw and got it back working beautifully and for a very
  reasonable price"; Sam G. (Local Guide, 8 years ago) — names staff
  "Trevor & Papa," says he drives across town past closer competitors for
  the repair service; Darrin Thane (Local Guide, 7 years ago) — "Great
  customer service... Took a saw in for service. In out quickly. Like that
  they will text when ready. They been around 57 years." Darrin's "57
  years" is one customer's own estimate of the shop's age, not an
  independently verified founding date — it is **not** stated as fact
  anywhere on the live page, only logged here as design-research context
  (it reinforces the "old-school, established" tone the design leans into).
- The brief's pre-supplied fact that Bryan Outboard is "the only Stihl
  Gold-certified technician in the Brazos Valley" comes from aggregator
  listings per the brief, not from something independently re-confirmed on
  the Google Maps listing itself during this pass — it is used in copy as
  a real, sourced claim (per the brief), but flagged here as sourced from
  aggregator data rather than the Google listing.

**Vocabulary/theme takeaway**: rugged, plainspoken, small-town, "they know
their stuff," genuinely trusted repeat-customer shop — not a slick retail
chain. This is the seed for the industrial-but-warm design direction below,
not a generic "hardware store" or "auto repair" template.

**`ui-ux-pro-max` query**: `search.py "small engine repair shop Stihl dealer
rugged workshop" --design-system -p "Bryan Outboard"` returned only the
database's generic fallback (Hero+Features+CTA pattern, "Minimalism & Swiss
Style," green/pink palette) — no niche-specific match for this trade. Same
generic fallback was returned for all four businesses in this batch. Final
direction below comes from the Builder's own judgment applied to the real
research above, per `frontend-design`'s brainstorm → critique process, not
a skill-database hit.

## Brand system

| Signal | Source |
|---|---|
| Charcoal-steel + brass/tool-gold + safety-red accent + paper cream | Designer judgment grounded in the shop's real trade (tools, chainsaws, Stihl's own gold-certification language) and its "old-school, no-frills" review tone — not a photo-color-extraction (no usable brand photos exist on the thin listing), disclosed honestly as derived rather than pixel-sourced |
| Oswald (display, condensed industrial) + Archivo (body) + Chivo Mono (phone/tag chips) | Fresh pairing not used elsewhere in this gallery (cross-checked against all ~43 existing demo stylesheets) |
| Diagonal-clip hero photo + rotated circular "seal" rating stamp | Original signature element — nods to a certification/seal motif (Stihl Gold Certified, service guarantee) without reproducing any Stihl trademark or logo |

**Distinctness check**: Cross-referenced against all existing `demos/*`
stylesheets before choosing fonts/colors — no other demo uses this
Oswald+Archivo+Chivo Mono pairing or this charcoal/brass/safety-red palette.
Structurally, the diagonal-clip hero + rotated stamp badge + trust-chip
strip + non-numbered service-card grid is a distinct architecture from
every other demo in the gallery, including the two septic/pressure-washing
pairs built alongside it in this same batch.

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero, trust-attribute strip, services, about, Google reviews, hours/find-us, contact, footer |
| `styles.css` | Client brand system (charcoal/brass/safety-red/cream), Oswald/Archivo/Chivo Mono |
| `assets/hero-workshop-shelf.jpg` | Hero photo: Pexels, ["Motors on Wooden Shelf in Workshop"](https://www.pexels.com/photo/motors-on-wooden-shelf-in-workshop-9395016/), photographer **Erik Mclean** — illustrative, not Bryan Outboard's own shop |
| `assets/oil-cans-chainsaws.jpg` | About-section photo: Pexels, ["Oil Cans and Chainsaws on Shelf"](https://www.pexels.com/photo/oil-cans-and-chainsaws-on-shelf-9395014/), photographer **Erik Mclean** — illustrative, not Bryan Outboard's own inventory |
| `README.md` | This file |
| `pitch-sheet.html` | Lewis-Digital-branded printable pitch sheet (our sales tool, gold/charcoal/cream untouched) |

Both photos are free-to-use under the [Pexels License](https://www.pexels.com/license/)
(no attribution legally required, credited here anyway), from the same
photographer's workshop photo set for visual consistency, and are labeled
as illustrative stock photos in their `alt`/`figcaption` text — not photos
of Bryan Outboard's real shop, staff, or inventory.

## Preview

```bash
cd demos/bryan-outboard
python3 -m http.server 8301 --bind 127.0.0.1
```

## What is REAL (verified & traceable)

- Business name, category, address, phone — Google Business listing,
  verified 2026-09-05.
- 4.5-star rating, 51 reviews, Google's own highlighted review lines and
  topic-tag counts — same listing, same date.
- Disabled-owned small business, wheelchair accessibility, in-store pickup,
  onsite services, assembly service, service guarantee, quick visit,
  credit/debit acceptance — listing's "About" tab, verified 2026-09-05.
- No independent website (stihlusa.com generic redirect) — verified
  2026-09-05.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Full weekly hours**: only "Closed · Opens 8 AM Tue" is verified; the
  page states this explicitly and asks customers to call to confirm.
- **Service list** (chainsaw repair, outboard service, mowers/trimmers,
  assembly, Stihl parts, service guarantee): generic categories consistent
  with a Stihl dealer/repair shop, informed by real review vocabulary but
  not a confirmed price/service menu — page carries an explicit "confirm by
  phone" note.
- **Hero and about-section photos**: free-license Pexels stock photos of a
  generic small-engine workshop, not Bryan Outboard's real shop — disclosed
  in `alt` text, figcaptions, and this README.
- **"Stihl Gold Certified" claim**: real per the brief's aggregator-sourced
  research, not independently re-confirmed by the Builder on the Google
  listing itself during this pass (flagged above).
- **Reviews section**: only the real 4.5/51 rating and Google's own
  highlighted lines/tag counts are shown; individual full review text stays
  internal research per the skill's rule — the page shows an honest "full
  written reviews will appear here once connected" placeholder for
  individual reviews.

## Brand-rule compliance

- Client-facing page uses only this shop's own brand colors/fonts (charcoal
  steel, brass-gold, safety-red, paper cream; Oswald/Archivo/Chivo Mono) —
  **no Lewis Digital gold/charcoal/cream** anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on the
  client-facing page.
- **"See us on Google" link confirmed present and correct**: `index.html`
  contains `<a href="https://www.google.com/maps/search/Bryan+Outboard+Inc+TX" target="_blank" rel="noopener">See us on Google</a>`
  in the reviews section, plus a matching "Get directions" link in the
  "Find us" block — both point at the exact `source_url` given in the brief.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/cream
  brand (our own sales tool) with this business's real facts substituted in.
