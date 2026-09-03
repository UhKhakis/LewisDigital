# Static Heating and Air Conditioning — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **Static Heating and Air Conditioning** (600 N
Bryan Ave, Bryan, TX 77803 · (979) 402-1832 · HVAC contractor). Part of the
same owner-authorized five-demo batch as `petes-trees`,
`mikes-complete-tree-services`, `castillos-fence`, and
`mk-fencing-construction` — the normal "no demo until the client confirms
interest" gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Static+Heating+and+Air+Conditioning+Bryan+TX`

- **5.0 stars, 69 reviews** — by far the strongest, most genuine proof
  point of any business in this batch. Category: HVAC contractor.
- Several full review texts were read for tone/vocabulary research only —
  quoted here for internal reference, per `client-demo-site` §1/§3; none
  of this text appears on the page:
  - Isabella Bermudez (5★): "they came out within the hour... unlike other
    companies they come out when theyre scheduled."
  - Valery Bell, Local Guide (5★): "Luis Reyes was very knowledgeable and
    resolved the problem quickly... very courteous."
  - Aida Rodriguez, Local Guide (5★): "came the same day I asked for
    help, great prices and very communicative... professional and
    efficient."
  - HomeAdvisor cross-reference (Kathy): "Luis, the tech, was very prompt,
    friendly, knowledgeable and professional... my go to pros for ac and
    heating repair."
- **The owner personally replies to nearly every review**, by name,
  consistently thanking customers — e.g. "Thank you so much for the
  5-star review!... Our goal is always to provide honest, reliable
  service and quality workmanship," and "Thank you for the great
  review... Providing prompt, professional service is always our goal."
  This pattern of hands-on ownership (not the specific reply text) is
  reflected on the page as general copy.
- Owner **Luis Reyes**, running the business as a single-member LLC
  founded in **2021**, per the task brief's pre-verified sourcing.
- Listing shows "Open 24 hours." Facebook page, HomeAdvisor and Angi
  review cross-listings exist; no dedicated business website found.

## Design direction

**Literal heating/cooling duotone.** Cool blue (`--cool`) for air
conditioning, warm orange (`--warm`) for heating, steel-gray from the
real condenser-unit photo, on a crisp near-white base — a modern,
technical trust palette that mirrors the business's own two-word name.
Manrope (a modern geometric sans) for display type, Inter for body copy,
Space Mono for technical/numeric accents (the review-count badges, spec
labels) — a distinct three-face system from every tree/fence demo in this
batch.

**Signature elements:**
- A persistent **5.0 / 69-reviews badge in the sticky nav bar** — the
  strongest real proof point in the whole batch earns permanent visibility
  while scrolling, not just a mention in a Reviews section.
- A **duotone divider bar** (half cool blue, half warm orange) used
  between every major section — a literal, structural nod to "heating and
  air conditioning" as two halves of one system.
- A **dual-color services grid**: each service card is tagged Cooling,
  Heating, or Both and carries a matching top-border accent color.

## Structural distinctness

This is the only HVAC business in the batch, so cross-trade distinctness
wasn't the binding constraint — but the design was still built to differ
sharply from the four tree/fence demos in the same batch: it's the only
one with a persistent nav rating badge, the only one built around a
literal duotone color system, and the only one using a mono-spaced
numeric accent face. Section order: Hero → Services (dual-color grid) →
About (owner story) → Reviews (large real-number proof) → Hours/Find us →
Contact → Footer.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about, reviews, hours/find us, contact, footer) |
| `styles.css` | All styling — sourced client brand (cool blue/warm orange duotone + steel, Manrope/Inter/Space Mono) |
| `assets/hero-technician-condenser.jpg` | Hero photo — free-license stock photo |
| `assets/thermostat.jpg` | About-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both real, free-license Pexels stock photos — **not** photos of Static
Heating and Air Conditioning, its staff, or its equipment:

- **Hero** (`assets/hero-technician-condenser.jpg`):
  [pexels.com/photo/5463581](https://www.pexels.com/photo/man-drilling-an-aircon-casing-5463581/)
  ("Man Drilling an Aircon Casing"), photographer **José Andrés Pacheco
  Cortes** — a technician servicing an open outdoor condenser unit,
  matching the real trade directly.
- **About section** (`assets/thermostat.jpg`):
  [pexels.com/photo/27638181](https://www.pexels.com/photo/a-digital-thermostat-on-a-wall-next-to-a-window-27638181/)
  ("A Digital Thermostat on a Wall Next to a Window"), photographer
  **Alexander Mass**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/static-heating-air-conditioning
python -m http.server 8203 --bind 127.0.0.1   # preview on localhost:8203
```

Verified locally 2026-09-03: all images return HTTP 200, no console errors,
content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Static Heating and Air Conditioning**
- Address: **600 N Bryan Ave, Bryan, TX 77803**
- Phone: **(979) 402-1832**
- Category: **HVAC contractor**
- **Google rating: 5.0 out of 5, from 69 reviews** — the business's public
  Google Maps listing, verified 2026-09-03. This is the strongest,
  highest-volume proof point of any business in this five-demo batch.
- **Owner: Luis Reyes**, running the business as a **single-member LLC
  founded in 2021** — per the task brief's pre-verified sourcing, used
  directly as instructed.
- **Hours**: shown as "Open 24 hours," per the listing's own live status
  when checked 2026-09-03.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service cards** (AC repair & diagnostics, furnace & heat repair, AC
  installation, furnace installation, seasonal maintenance, thermostat &
  ductwork): generic examples of HVAC work — not an itemized,
  owner-confirmed service list. The page states this directly.
- **Both hero and about-section photos**: real stock photos, explicitly
  not photos of Static Heating and Air Conditioning, its staff, or its
  equipment.
- **Reviews section**: only the real 5.0/69 rating is shown as text and
  as a large numeric badge — no review text, no named customers appear on
  the page. The full review texts read during research (Isabella
  Bermudez, Valery Bell, Aida Rodriguez, plus the HomeAdvisor
  cross-reference) stayed internal to this README, per `client-demo-site`
  §1/§3, as did the specific text of Luis's owner replies.
- **About-section copy** ("technicians who show up fast," "quote
  honestly before doing the work," "hands-on ownership"): original
  marketing language informed by the real review vocabulary and the
  observed owner-reply pattern above — not a direct quote, not an
  invented testimonial or statistic.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (cool blue,
  warm orange, steel, navy) and fonts (Manrope, Inter, Space Mono). **Zero
  Lewis Digital gold (`#C9A227` family), zero Lewis charcoal `#16130e`,
  zero Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream
  brand (it's our sales tool) — per `client-demo-site` §4.
- Structurally and visually distinct from every tree/fence demo in this
  batch — see "Design direction" above.

## Notes for outreach

- This is the strongest proof point in the whole batch — 69 reviews, all
  5 stars, real owner engagement. Lead with the review count and the
  founder story (Luis Reyes, 2021) in outreach; this business doesn't
  need an honesty-disclosure angle the way the thinner-signal businesses
  in this batch do.
- No existing website means there's no migration friction — a clean
  first web presence, with a genuinely strong review base to showcase
  once reviews are connected live.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
