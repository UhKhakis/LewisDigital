# Bos Garage Auto Repair — Demo Site (Client #1, v2 — DERIVED CLIENT BRAND)

One-page demo website for **Bos Garage Auto Repair** (Bryan, TX), rebuilt in a
**fitting independent auto-repair brand** (owner spot-check direction, 2026-08-19).
This is the second iteration: v1 used the Lewis Digital gold system; **v2 uses a
brand derived for the shop and contains ZERO Lewis Digital gold**.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about/hours, Google reviews, contact, footer) |
| `styles.css` | All styling — derived client brand (slate/gunmetal + garage red + cool off-white, Oswald + Barlow) |
| `assets/hero-garage.jpg` | AI-generated illustrative hero photo (dark, atmospheric garage interior with slate + red-orange work lights) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (OUR sales tool — deliberately left in Lewis Digital brand) |
| `preview.png` | Browser screenshot of the rendered page (QA check) |

## Preview

```bash
cd /home/team/shared/demos/bos-garage
python3 -m http.server 8090 --bind 127.0.0.1   # preview on localhost:8090
```

Do NOT use port 3000 — that serves the agency site.

## BRAND SOURCES — this brand is DERIVED, not sourced

Researched live on **2026-08-19** via agent-browser. **Bos Garage has no usable
brand imagery to draw from**, so the palette/typography below is a designer
derivation fit to the shop's category and vibe — NOT lifted from the business:

| Check | Result | Evidence |
|---|---|---|
| Facebook / socials | **None** | `leads/leads.csv` + Google place page: no Facebook, no Instagram, no social links |
| Google Maps user photos | **None** | Place page "Photos" section shows only a "Street View" and "Add photos & videos" button — no owner/customer photo thumbnails |
| Street View imagery | **None available** | Clicking through the photo viewer returns "No Street View imagery available here." |
| Cover-photo thumbnail | Not accessible | It is a Street View thumbnail (panoid `FDmYdsx4O3vu8vLkjsdytQ`) that returns 403 / a blank image for unauthenticated requests |
| Yelp | Not accessible | Blocked by DataDome bot detection (no listing could be inspected) |

**Conclusion:** no real brand signals exist to extract. Per owner direction, the
brand is **DERIVED** from the shop's identity — "Bos Garage Auto Repair", an
independent car-repair-and-maintenance garage in Bryan, TX — using classic,
no-nonsense auto-repair visual language.

### Derived brand system

| Token | Value | Reasoning |
|---|---|---|
| **Garage red** `#c2351f` (primary CTA/accent) | Safety/toolbox red | Classic independent-garage sign + toolbox color; signals "this shop does real work" |
| **Deep slate/gunmetal** `#1f2933` (hero, footer, dark sections) | Steel + shadow of a shop bay | Rugged, mechanical, trustworthy; cool slate (deliberately NOT the warm Lewis charcoal `#16130e`) |
| **Steel blue-gray** `#45525f` / `#28323d` | Machined steel | Secondary support tone for card tops and dark-section plates |
| **Cool off-white** `#f5f6f7` (base) | Clean workshop wall | Light base; deliberately NOT the warm Lewis cream `#fbf8f1` |
| **Hazard-stripe motif** (repeating red/slate diagonal bars) | Caution tape / garage floor marking | Reinforces the mechanical, shop-floor identity; used on the top bar, hero bottom edge, and footer |
| **Typography: Oswald (display) + Barlow (body)** | Bold, condensed industrial signage + sturdy mechanical sans | Oswald's tall condensed caps read like a garage sign; Barlow is a rugged, highly legible companion. Deliberately NOT Playfair/Inter and NOT Cormorant/Jost |

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (row 2) + the business's public Google Maps listing,
re-checked by the Builder on **2026-08-19**
(https://www.google.com/maps/search/Bos+Garage+Auto+Repair+TX):

- Business name: **Bos Garage Auto Repair**
- Category on Google: **Car repair and maintenance service** (independent repair garage)
- Address: **1617 Briarcrest Dr, Bryan, TX 77802** (ZIP confirmed on listing)
- Phone: **(979) 906-0924**
- No website, no social links on its place page (confirmed — listing shows "Add website" prompt)
- **Google rating: 5.0 stars** — shown on the public listing ("5.0 stars" aria-label). NO review count is displayed on the listing, so the page does NOT claim a count. (v2 shows the plain numeral **5.0** with "out of 5 on Google" — no star glyphs — per the honest-placeholder rule.)
- **Wheelchair accessible entrance** — attribute shown on the public listing (page lists it under "Find us")
- Google listing **publishes only sparse hours**. As of 2026-08-19 the live status read
  **"Closed · Opens 10 AM Thu"** (an earlier check on 2026-08-18 recorded "Tuesday 10 AM – 6 PM";
  the listing only ever exposes one day at a time). Therefore the page shows **"Call for hours"**
  as primary and states the sparse-hours fact with an "as of August 2026" note. No other hours are fabricated.
- Directions links point to the real Google Maps listing URL.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (brakes, oil changes, diagnostics, engine repair, AC, tires, electrical, belts): generic list of what an independent auto repair garage typically offers — NOT sourced from Bos Garage. The page itself carries an on-page note saying services are examples and to confirm by phone.
- **Hero photo** (`assets/hero-garage.jpg`): AI-generated atmospheric garage image for layout/feel — it is NOT a photo of the shop. (Generated to echo the derived slate + red palette.)
- **Google reviews section**: only the real 5.0 rating is shown; review text/cards are an explicit placeholder ("Google reviews will appear here once connected") — no fake reviews, no fabricated quotes, no invented star counts.
- **Hours**: "Call for hours" (only the sparse verified-hours fact is shown, attributed).
- **Copy voice** (e.g., "we'll tell you straight"): warm small-business tone per Lewis Digital voice direction — general marketing language, no invented facts, testimonials, or stats.
- **Phone/CTA buttons**: all `tel:` links to the real number.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY the derived brand colors (`--night`, `--night-soft`, `--red`, `--red-deep`, `--steel`, `--ash`, `--paper`, `--line`, `--ink`) and fonts (Oswald + Barlow). **No Lewis gold (#C9A227 family), no Lewis charcoal #16130e, no Lewis cream #fbf8f1** anywhere in index.html/styles.css.
- Footer keeps a single small credit: "Site by Lewis Digital — a DBA of Lewis Tech Services LLC".
- `pitch-sheet.html` was NOT modified — it stays in Lewis Digital brand (it is OUR sales tool).
- Layout is intentionally distinct from both the Neff's demo (light/lilac, arch photos, numbered list) and the old Bos v1 (gold card grid): dark slate hero with a hazard-stripe edge, red square monograms, uppercase condensed Oswald headings, steel-topped tool cards.

## Notes for the close call with the owner

- Highlighted offer hook: real 5.0 Google rating displayed on their own site + honest
  reviews section that fills in once their GBP reviews are connected (Lewis Digital manages GBP).
- If the owner provides real hours, real review text, or a real shop photo/logo, swap them into
  `index.html`/`assets/` and re-publish — and if they have an actual logo/sign color, restyle the
  derived palette to match it (places to edit are marked by section). The current palette is
  explicitly a DERIVED placeholder brand, not the shop's own.
- This folder is a standalone deliverable; it is NOT wired into the agency site on port 3000,
  and nothing has been pushed to the LewisDigital repo / Pages (owner reviews first).
