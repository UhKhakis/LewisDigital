# Limitless Diesel & Offroad — Demo Site (DERIVED CLIENT BRAND)

One-page demo website for **Limitless Diesel & Offroad** (College Station, TX),
built in a **fitting diesel/offroad brand**. Contains **ZERO Lewis Digital
gold** — the client-facing page uses only the derived brand system below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Design direction (owner-assigned)

**"Rugged field manual / outpost."** Deep olive/khaki + rust + cream, chunky
industrial display (Bebas Neue) + monospace accents (Space Mono) + humanist body
(Karla). Distinctive architecture:

- **Fixed left rail** with the brand, a numbered "field index" nav, and shop
  meta — NOT a conventional top nav.
- **No conventional centered hero** — instead an "Opening Log" split panel with
  a stamped code line, a photo with a **topographic contour overlay**, and a
  caption bar.
- **Index-style service rows** — large numbered field-log entries in
  double-bordered stamped panels.
- **Stamped/bordered panels** throughout (dashed inner borders), heavy paper
  grain background, monospace "SECTION 01–04" labels.

This layout is deliberately unlike Brazos Valley (light editorial split hero)
and Bryan Muffler (dark, skewed, full-bleed motion).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (left rail, opening log, index services, the outfit, report in, word from the field, footer) |
| `styles.css` | All styling — derived client brand (olive/khaki/rust/cream, Bebas Neue/Space Mono/Karla) |
| `assets/hero-limitless.png` | AI-generated **illustrative** hero photo (diesel truck on dirt with topographic overlay) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — Lewis Digital brand, untouched) |

## Preview

```bash
cd /home/agent-lead/LewisDigital/demos/limitless-diesel-offroad
python3 -m http.server 8090 --bind 127.0.0.1   # preview on localhost:8090
```

Do NOT use port 3000 — that serves the agency site.

## BRAND SOURCES — this brand is DERIVED, not sourced

**Limitless Diesel & Offroad has no usable brand imagery to draw from** (its
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
| Deep olive `#3a3a2c` + khaki `#8a8266` | Earthy, gritty, outpost | Rugged field feel; deliberately NOT Lewis charcoal `#16130e` or gold |
| Rust `#b5542f` | Gritty accent | Warm rust, NOT Lewis gold `#c9a227` |
| Cream `#ece4d0` | Paper/field-log base | Earthy cream, NOT Lewis cream `#fbf8f1` |
| Bebas Neue (industrial display) + Space Mono (mono accents) + Karla (humanist body) | Stencil/manual | Deliberately unlike the other demos (Fraunces/Inter; Anton/Oswald) |

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (row 5) — used verbatim per the owner's instruction
for this batch ("use EXACTLY these facts and nothing more"):

- Business name: **Limitless Diesel & Offroad**
- Category: **auto repair** (diesel repair and offroad shop)
- Town: **College Station, TX**
- Address: **4011 Hicks Ln, College Station, TX** (ZIP not provided in the
  leads file — deliberately omitted rather than guessed)
- Phone: **(979) 209-9668**
- Presence: **Google Maps listing only** (no website, no socials)

Directions links point to the real Google Maps search URL from the leads file.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Google rating & reviews**: the leads file carries **no rating or review
  count**, so the page claims **none**. The reviews section is an explicit
  placeholder — no fake stars, no invented score, no fabricated quotes.
- **Hours**: shown as **"Call for hours"** (hours were not in the leads file).
- **Service categories** (diesel engine repair/diagnostics, suspension/lift,
  offroad accessories, transmission/drivetrain, turbo/fuel system, preventive
  maintenance): generic list of what a diesel & offroad shop typically offers —
  NOT sourced from Limitless Diesel & Offroad. The page carries an on-page note
  saying services are examples and to confirm by phone.
- **"EST. SECTOR: COLLEGE STATION" / "LOG ENTRY NO. 001"**: decorative
  field-manual framing, NOT real establishment dates or claims.
- **Hero photo** (`assets/hero-limitless.png`): AI-generated atmospheric diesel
  truck image for layout/feel — **illustrative, NOT a photo of the shop**.
  Marked "Illustrative" in the figure caption on the page itself.
- **Copy voice** ("bring your rig by"): warm small-business tone per Lewis
  Digital voice direction — general marketing language, no invented facts,
  testimonials, or stats.

## Brand-rule compliance

- Client-facing page uses ONLY the derived brand colors/fonts above. **No Lewis
  gold (#C9A227 family), no Lewis charcoal #16130e, no Lewis cream #fbf8f1**
  anywhere in `index.html`/`styles.css`.
- Footer keeps a single small credit: "Site by Lewis Digital — a DBA of Lewis
  Tech Services LLC".
- `pitch-sheet.html` is in Lewis Digital brand (it is OUR sales tool).

## Notes for the close call with the owner

- If the owner provides real hours, their Google rating, real review text, or a
  real shop photo/logo, swap them into `index.html`/`assets/` and re-publish —
  and if they have an actual logo/sign color, restyle the derived palette to
  match it. The current palette is explicitly a DERIVED placeholder brand, not
  the shop's own.
