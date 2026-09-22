# A & K Transmission Repair — Demo Site

One-page demo website for **A & K Transmission Repair** (2602 Cavitt Ave,
Bryan, TX 77801), built for Lewis Digital's owner-authorized batch-10 build
(round 3, batch B). Static HTML + CSS, no build step.

## Research (per `client-demo-site` §1 — real reviews before design)

**Source:** A & K Transmission Repair's public Google Business Profile,
https://www.google.com/maps/search/A+%26+K+Transmission+Repair+Bryan+TX,
verified live via browser 2026-09-21.

- **Rating:** 4.5 stars, 19 reviews (16 five-star, 1 four-star, 2 one-star
  per the listing's own breakdown).
- **Category:** Transmission shop.
- **Address / phone:** 2602 Cavitt Ave, Bryan, TX 77801 · (979) 823-9011.
- **Hours:** only a single fact is verifiable — the listing showed "Closed
  · Opens 9 AM Tue" when checked on Monday 2026-09-21. Full weekly hours
  are not published, so the page shows that one verified data point and a
  placeholder for the rest, per §3.
- **No independent website** — the Google listing is the shop's only
  public presence, and it has no posted photos to extract color from, so
  the brand is **derived**, not photo-sourced (§1's fallback clause).

**Reviews read for internal design research** (7 read directly, not
published as page copy per §1/§3):

- Julie Dahl (5★): "He looked at it, gave me a decent price to get it
  fixed... Would happily give 10 stars if I could."
- John Hitchcock (5★): dropped off a car shifting late/hard, diagnosed as a
  broken throttle valve — description-first, no surprise work.
- Tj (5★, Local Guide): "Super nice guy. Had my truck towed to his shop..."
  — trans cooler hose repair.
- Linda Harding (5★): "Mark was great repaired my transmission total
  rebuild in one week he beat the competitor price by $1[00+]..."
- Rydel Henton (5★): "Mark is a skilled mechanic. He really knows
  transmissions. I am a return customer..."
- Bryan Welch (5★): "THERE IS NOBODY BETTER / VERY AFFORDABLE..."
- Tig D. (1★) and the owner's own reply: a customer wanted the shop to
  install a customer-purchased performance rebuild kit; the owner's public
  reply states plainly that the shop can't warranty repairs on
  customer-bought parts. This is the business's own public statement (an
  owner reply on its own listing), not an invented detail — paraphrased
  (never quoted verbatim) into the page's "Shop Policy" section as an
  honest, specific detail rather than generic trust copy.

**Vocabulary/theme takeaway:** owner Mark Arnold named personally and
warmly in nearly every review; recurring themes are fair/competitive
pricing on rebuilds, honest upfront diagnosis, repeat customers, and both
cars and trucks serviced. This reads as a small, personal, skilled-owner
shop — not a chain — so the design leans into a precision/instrument-panel
identity (the "gauge cluster" motif) rather than a generic grease-shop
look.

No Facebook/Instagram page or other photos were found to extract real
colors from, so per §1's fallback clause the palette is a **designer
choice** seeded by the trade (transmission = precision, gauges, gears) and
the review tone (straight-talking, trustworthy) — disclosed here as
derived, not measured from a real photo.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Deep teal-black (`--teal-black #12201f`) + instrument amber (`--amber #d9a441`) + steel cyan (`--steel-cyan #4fa3a8`) + warm paper (`--paper #f4efe4`) | "Gauge cluster" identity — precision, honesty, trust; amber reads as an instrument-panel telltale, not a caution-tape yellow |
| Typography | Space Grotesk (display) + Public Sans (body) + Space Mono (gauge labels) | Geometric/technical feel, distinct from every other demo's type pairing in this repo |
| Hero | Split layout with a circular "dial badge" (21+ years) overlapping the photo frame | Distinct silhouette from both siblings below |
| Signature element | Dark "Shop Policy" panel with a warning-icon badge, built from the owner's real review-reply | No other demo in the repo has an honest-policy callout sourced this specifically |
| Reviews | Circular amber-ringed "rating dial" instead of a card or badge | Ties back to the gauge motif |

## Structural distinctness

**Same-street sibling in this batch — Siegert Radiator Shop (2600 Cavitt
Ave, next door):** Siegert uses a **light** parchment/heritage palette
(antifreeze green + weathered brass + cream) with a vintage "since 1960"
badge hero and serif/condensed type; A & K uses a **dark** teal-black
instrument-panel palette with a circular gauge hero and geometric sans
type. One is light-first heritage, the other dark-first precision-tech —
opposite moods, opposite section signatures (badge/ribbon vs. dial/gauge).

**Other auto-trade demos already in the repo:**
- `demos/sotos-mufflers/` — gunmetal + rust + caution mustard, Khand
  condensed display, dark toolbox/ticket-stub motif.
- `demos/exhaust-works/` — racing green + spark orange + aluminum,
  Righteous rounded display, full-bleed photo hero with scrim.

A & K's teal-black + amber + steel-cyan combination, Space Grotesk display
type, and circular dial motifs don't repeat any of the above in palette,
type, or signature shape.

## What is REAL (verified & traceable)

- Business name, category, address, phone: A & K Transmission Repair's
  Google Business Profile, verified 2026-09-21.
- Rating: 4.5 stars, 19 reviews, star breakdown (16/1/0/0/2).
- Single verified hours data point: closed Monday, opens 9 AM Tuesday
  (observed 2026-09-21).
- "Google" link points to the exact `source_url` given in the build brief.
- Owner name "Mark Arnold" — per the build brief; consistent with reviews
  repeatedly naming "Mark" as the person doing the work.
- "21+ years in business" — per the build brief.
- Shop-policy detail (warranty covers only parts A & K itself supplies) —
  paraphrased from the owner's own public review reply, not invented.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Hero photo** (`assets/hero-transmission.jpg`) and **policy-section
  photo** (`assets/gears-detail.jpg`): free-license Pexels stock photos —
  not photos of A & K's actual shop, staff, or vehicles. Captioned as
  illustrative in both the visible `alt` text and on-page caption.
- **Services list**: generic examples for a transmission shop, informed by
  real review content (rebuilds, cooler hoses, tow-ins) but not A & K's
  confirmed price list or exact service menu — labeled "confirm by phone."
- **Full weekly hours**: not published by the listing; page shows only the
  one verified data point plus a placeholder.
- **Reviews section**: only the real 4.5/19 rating is shown; review text
  stays an explicit "will appear here once connected" placeholder — no
  scraped review quotes appear as page copy.

## Photo sourcing

- Hero (`assets/hero-transmission.jpg`): [pexels.com/photo/29181492](https://www.pexels.com/photo/mechanic-working-on-car-transmission-in-workshop-29181492/)
  ("Mechanic Working on Car Transmission in Workshop"), photographer
  **Sergei Starostin**.
- Policy section (`assets/gears-detail.jpg`): [pexels.com/photo/7568427](https://www.pexels.com/photo/close-up-of-transmission-gears-7568427/)
  ("Close-up of Transmission Gears"), photographer **cottonbro studio**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free for commercial use, no attribution required, credited here anyway).

## Brand-rule compliance

- Client page uses only the derived teal-black/amber/steel-cyan/paper
  system — no Lewis Digital gold `#C9A227`, no Lewis charcoal `#16130e`,
  no Lewis cream `#fbf8f1` anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  `https://lewistechservices.com/` — no "Lewis Digital" anywhere on the
  client-facing page.
- **"See us on Google" link confirmed present** in three places
  (hero, hours/location card, and the closing contact section), all
  pointing to the exact brief `source_url`:
  `https://www.google.com/maps/search/A+%26+K+Transmission+Repair+Bryan+TX`.
- `pitch-sheet.html` keeps the Lewis Digital gold/charcoal/cream palette
  untouched (it's our own sales tool) with A & K's real name, address,
  phone, and rating.

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero, gauge/trust strip, services, shop-policy panel, about, hours & location, reviews, contact, footer |
| `styles.css` | Full client-brand theme |
| `assets/hero-transmission.jpg` | Hero photo (stock, illustrative) |
| `assets/gears-detail.jpg` | Shop-policy section photo (stock, illustrative) |
| `pitch-sheet.html` | Lewis Digital-branded printable sales sheet (untouched brand) |

## Preview

```bash
cd demos/ak-transmission-repair
python3 -m http.server 8301 --bind 127.0.0.1
```
