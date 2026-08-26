# Brazos Valley Automotive — Demo Site (DERIVED CLIENT BRAND)

One-page demo website for **Brazos Valley Automotive** (College Station, TX),
built in a **fitting independent auto-repair brand**. Contains **ZERO Lewis
Digital gold** — the client-facing page uses only the derived navy + copper
system below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about/hours, reviews, contact, footer) |
| `styles.css` | All styling — derived client brand (deep navy + copper-orange + cool light gray, Montserrat + Source Sans 3) |
| `assets/hero-brazos.png` | AI-generated illustrative hero photo (clean modern shop bay with navy + copper lighting) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — deliberately left in Lewis Digital brand) |

## Preview

```bash
cd /home/agent-lead/LewisDigital/demos/brazos-valley-automotive
python3 -m http.server 8090 --bind 127.0.0.1   # preview on localhost:8090
```

Do NOT use port 3000 — that serves the agency site.

## BRAND SOURCES — this brand is DERIVED, not sourced

**Brazos Valley Automotive has no usable brand imagery to draw from** (its
place page shows "Google Maps listing only" and no social links), so the
palette/typography below is a designer derivation fit to the shop's name,
category, and regional feel — NOT lifted from the business:

| Check | Result |
|---|---|
| Facebook / socials | **None** (per `leads/leads.csv`) |
| Website | **None** — no-website lead |
| Owner-supplied logo / colors | **None** available at build time |

### Derived brand system

| Token | Value | Reasoning |
|---|---|---|
| **Deep navy** `#17344f` (hero, footer, dark sections) | Trust + stability | Established, dependable regional shop; a cool navy (deliberately NOT the warm Lewis charcoal `#16130e`) |
| **Copper-orange** `#d9772e` (primary CTA/accent) | Warm, approachable work-light glow | Friendly "local shop" energy; clearly orange, deliberately NOT Lewis gold `#c9a227` |
| **Steel blue-gray** `#5a7188` / `#1e4466` | Machined steel | Secondary support tone for card tops and dark-section plates |
| **Cool off-white** `#f4f6f8` (base) | Clean workshop wall | Light base; deliberately NOT the warm Lewis cream `#fbf8f1` |
| **Typography: Montserrat (display) + Source Sans 3 (body)** | Modern, legible, friendly-geometric | Cleaner and rounder than the Bos Garage condensed industrial look and unlike the Neff's serif look — deliberately a third distinct pairing |

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (row 3) — used verbatim per the owner's instruction
for this batch ("use EXACTLY these facts and nothing more"):

- Business name: **Brazos Valley Automotive**
- Category: **auto repair** (independent auto repair shop)
- Town: **College Station, TX**
- Address: **1702 Ponderosa Dr, College Station, TX** (ZIP not provided in the
  leads file — deliberately omitted rather than guessed)
- Phone: **(979) 680-1234**
- Presence: **Google Maps listing only** (no website, no socials)

Directions links point to the real Google Maps search URL from the leads file.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Google rating & reviews**: the leads file carries **no rating or review
  count** for this business, so the page claims **none**. The reviews section is
  an explicit placeholder ("Google rating & reviews will appear here once
  connected") — no fake stars, no invented score, no fabricated quotes.
- **Hours**: shown as **"Call for hours"** (hours were not in the leads file).
- **Service categories** (brakes, oil changes, diagnostics, engine repair, AC,
  tires, electrical, belts): generic list of what an independent auto repair
  shop typically offers — NOT sourced from Brazos Valley Automotive. The page
  itself carries an on-page note saying services are examples and to confirm by
  phone.
- **Hero photo** (`assets/hero-brazos.png`): AI-generated atmospheric garage
  image for layout/feel — NOT a photo of the shop.
- **Copy voice** (e.g., "we'll tell you straight"): warm small-business tone per
  Lewis Digital voice direction — general marketing language, no invented
  facts, testimonials, or stats.

## Brand-rule compliance

- Client-facing page uses ONLY the derived brand colors/fonts above. **No Lewis
  gold (#C9A227 family), no Lewis charcoal #16130e, no Lewis cream #fbf8f1**
  anywhere in `index.html`/`styles.css`.
- Footer keeps a single small credit: "Site by Lewis Digital — a DBA of Lewis
  Tech Services LLC".
- `pitch-sheet.html` is in Lewis Digital brand (it is OUR sales tool).
- This demo is visually distinct from Bos Garage (slate + red, Oswald/Barlow,
  hazard stripes), Neff's (lavender/plum, Cormorant/Jost), Bryan Muffler
  (matte black + torch orange, Anton/Roboto, speed motif), and Limitless
  Diesel (forest green + sand, Bebas Neue/Work Sans).

## Notes for the close call with the owner

- If the owner provides real hours, their Google rating, real review text, or a
  real shop photo/logo, swap them into `index.html`/`assets/` and re-publish —
  and if they have an actual logo/sign color, restyle the derived palette to
  match it. The current palette is explicitly a DERIVED placeholder brand, not
  the shop's own.
