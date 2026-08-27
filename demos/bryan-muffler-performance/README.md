# Bryan Muffler & Performance — Demo Site (DERIVED CLIENT BRAND)

One-page demo website for **Bryan Muffler & Performance** (Bryan, TX), built in
a **fitting muffler/performance brand**. Contains **ZERO Lewis Digital gold** —
the client-facing page uses only the derived brand system below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Design direction (owner-assigned)

**"Performance/racing energy."** Near-black carbon + electric orange, condensed
ALL-CAPS display (Anton/Oswald). Distinctive architecture:

- **Scrolling keyword ticker** at the very top.
- **Full-bleed motion-capture hero** with oversized, aggressive ALL-CAPS title.
- **Oversized numeric index band** (01 / 02 / 03 — decorative section numerals,
  NOT business stats).
- **Skewed/clipped section dividers** and sharp chevron marks.
- **Asymmetric service grid** (cells of varying height), not a uniform card grid.
- **Condensed nav** with clipped CTA.

This layout is deliberately unlike Brazos Valley (light editorial split hero)
and Limitless Diesel (field-manual index with a fixed left rail).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (ticker, nav, full-bleed hero, index band, asymmetric services, reviews, about/hours, contact, footer) |
| `styles.css` | All styling — derived client brand (carbon + electric orange, Anton/Oswald/Roboto Condensed) |
| `assets/hero-muffler.png` | AI-generated **illustrative** hero photo (exhaust with motion blur and glow) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — Lewis Digital brand, untouched) |

## Preview

```bash
cd /home/agent-lead/LewisDigital/demos/bryan-muffler-performance
python3 -m http.server 8090 --bind 127.0.0.1   # preview on localhost:8090
```

Do NOT use port 3000 — that serves the agency site.

## BRAND SOURCES — this brand is DERIVED, not sourced

**Bryan Muffler & Performance has no usable brand imagery to draw from** (its
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
| Near-black carbon `#0b0b0c` | Dark, loud, kinetic | Performance/racing feel; clearly black, NOT Lewis charcoal `#16130e` |
| Electric orange `#ff5a00` | Aggressive accent | Racing/energy; clearly orange, NOT Lewis gold `#c9a227` |
| Anton (condensed ALL-CAPS display) + Oswald (subheads) + Roboto Condensed (body) | Loud, kinetic | Deliberately unlike the other demos (Fraunces/Inter; Bebas Neue/mono) |

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (row 4) — used verbatim per the owner's instruction
for this batch ("use EXACTLY these facts and nothing more"):

- Business name: **Bryan Muffler & Performance**
- Category: **auto repair** (muffler and performance shop)
- Town: **Bryan, TX**
- Address: **1309 S College Ave, Bryan, TX** (ZIP not provided in the leads
  file — deliberately omitted rather than guessed)
- Phone: **(979) 822-2612**
- Presence: **Google Maps listing only** (no website, no socials)

Directions links point to the real Google Maps search URL from the leads file.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Google rating & reviews**: the leads file carries **no rating or review
  count**, so the page claims **none**. The reviews section is an explicit
  placeholder — no fake stars, no invented score, no fabricated quotes.
- **Hours**: shown as **"Call for hours"** (hours were not in the leads file).
- **Service categories** (muffler/exhaust repair, custom exhaust, performance
  upgrades, catalytic converters, welding/fabrication, sound/flow tuning):
  generic list of what a muffler & performance shop typically offers — NOT
  sourced from Bryan Muffler & Performance. The page carries an on-page note
  saying services are examples and to confirm by phone.
- **Oversized index band** (01/02/03): decorative section numerals, NOT
  business statistics or performance claims.
- **Hero photo** (`assets/hero-muffler.png`): AI-generated atmospheric exhaust
  image for layout/feel — **illustrative, NOT a photo of the shop**.
- **Copy voice** ("LOUDER. FASTER. DONE RIGHT."): warm small-business tone per
  Lewis Digital voice direction — general marketing language, no invented
  facts, testimonials, or stats.

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
