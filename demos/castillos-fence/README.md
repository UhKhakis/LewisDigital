# Castillo's Fence — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **Castillo's Fence** (4109 Old Hearne Rd, Bryan,
TX 77803 · (979) 218-5206 · Fence contractor). Part of the same
owner-authorized five-demo batch as `petes-trees`,
`mikes-complete-tree-services`, `static-heating-air-conditioning`, and
`mk-fencing-construction` — the normal "no demo until the client confirms
interest" gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Castillo%27s+Fence+Bryan+TX`

- **5.0 stars, 5 reviews.** Full review texts read for tone/vocabulary
  research only, quoted here for internal reference per
  `client-demo-site` §1/§3 — none of this text appears on the page:
  - Rachel Doss: "I highly recommend Castillos. Erik and his crew were
    professional, efficient, and built a high quality fence."
  - Phillip Ward, Local Guide: "Castillo came out and fixed a couple of
    issues we had with our fence. Great service!"
  - Enrique Castillo (a self-review from an account named "Enrique
    Castillo," edited 6 years ago): "Makes the best Fences in the whole
    Brazos Valley! 110% efficient and fast paced!"
- **Naming discrepancy, noted honestly:** the task brief's pre-verified
  research names the owners as **Agustin Castillo & Brayan Castillo**.
  The Google reviews themselves reference a crew member/foreman named
  **"Erik"** and carry a self-review from an account named **"Enrique
  Castillo."** These names were not independently reconciled in this
  research pass. Per the task's own instruction, the page uses the
  family surname and general "Castillo family" framing rather than
  asserting specific unconfirmed first names on the client-facing page.
- **Caution flagged and handled per instruction:** a separate 1.0★ (1
  review) Yelp listing exists for this business ("This company put up my
  fence a year ago..."). Per the task brief's explicit instruction, this
  is disclosed here (not hidden) but not foregrounded on the page — the
  page features Google Maps (5.0★/5) as the review source, since that's
  the platform actually cited as this business's source_url and the one
  with the stronger, more consistent record.
- **No photos found** on the Google listing beyond a single roadside/
  field Street-View-style cover image — no owner-uploaded job photos, no
  business website, directory listings only (thin photo signal, similar
  in kind to `dean-plumbing-repair` from an earlier batch).

## Design direction

**Traditional, family-run, warm wood-and-metal.** Warm cedar/terracotta
(`--cedar`) + dark charcoal-metal + a soft cream base — a classic,
heritage-feeling palette that leans into "family business" rather than
"modern contractor." Zilla Slab (a sturdy display serif) + Mulish (a
clean, warm sans) — a type pairing not used by any other demo in this
repo.

**Signature element:** a horizontal "rail-and-post" divider (a simple
SVG fence-post silhouette) used as a recurring section break — a direct,
literal nod to the trade, distinct from the tag-cloud (Pete's Trees),
growth-ring (Mike's), and duotone bar (Static Heating) motifs used
elsewhere in this batch.

**Section order:** Hero (full-bleed photo, warm scrim, centered copy) →
Our Family (heritage/about story with a verified-facts card) → What We
Build (4-across service grid + a materials photo) → Reviews (honest
5.0/5 disclosure) → Hours/Find us (real street address) → Contact →
Footer.

## Structural distinctness vs. MK Fencing & Construction Services

Both are Bryan-area fence contractors, so this needed deliberate
differentiation beyond palette:

| | Castillo's Fence (this demo) | MK Fencing & Construction Services |
|---|---|---|
| Hero | Full-bleed photo, warm scrim, centered copy | Split grid: chip badges + copy left, boxed photo right |
| Framing | Family-run, address-anchored, heritage-driven | Small/newer business, service-area-driven, modern |
| "Where to find us" | Real street address + "Hours" section | "Service Area" section — Brazos County coverage, no fixed address, email included |
| Signature element | Rail-and-post divider (recurring, literal fence motif) | Chip/badge row (Woman-owned · Est. 2022 · Serving Brazos County) |
| Palette | Warm cedar/terracotta + dark charcoal + cream | Warm cedar (sourced from a real MK photo) + near-black charcoal + soft off-white, cooler/more minimal |
| Type pairing | Zilla Slab + Mulish | Poppins + Source Sans 3 |
| Nav / CTA style | Pill-shaped brand mark, warm accent nav | Rounded modern nav, gold accent, email CTA alongside phone |

No shared hero shape, "where to find us" architecture, signature element,
or type pairing between the two.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, our family, services, reviews, hours/find us, contact, footer) |
| `styles.css` | All styling — sourced client brand (cedar/charcoal/cream, Zilla Slab/Mulish) |
| `assets/hero-wood-fence.jpg` | Hero photo — free-license stock photo |
| `assets/lumber-stack.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both real, free-license Pexels stock photos — **not** photos of Castillo's
Fence, its crew, or its work:

- **Hero** (`assets/hero-wood-fence.jpg`):
  [pexels.com/photo/39247211](https://www.pexels.com/photo/wooden-fence-in-sunlit-autumn-garden-39247211/)
  ("Wooden Fence in Sunlit Autumn Garden"), photographer **Evandro Paula
  Alves**.
- **Services section** (`assets/lumber-stack.jpg`):
  [pexels.com/photo/30285503](https://www.pexels.com/photo/stack-of-freshly-cut-lumber-in-sunlight-30285503/)
  ("Stack of Freshly Cut Lumber in Sunlight"), photographer **Jean Marc
  Pampuch** — chosen to reinforce "quality fence" material without
  claiming to show Castillo's own stock.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/castillos-fence
python -m http.server 8204 --bind 127.0.0.1   # preview on localhost:8204
```

Verified locally 2026-09-03: all images return HTTP 200, no console errors,
content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Castillo's Fence**
- Address: **4109 Old Hearne Rd, Bryan, TX 77803**
- Phone: **(979) 218-5206**
- Category: **Fence contractor**
- **Google rating: 5.0 out of 5, from 5 reviews** — Castillo's Fence's
  public Google Maps listing, verified 2026-09-03.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Owner names**: the page uses "the Castillo family" generically rather
  than naming specific individuals, given the unreconciled discrepancy
  between the task brief's pre-verified names (Agustin & Brayan Castillo)
  and the names appearing in actual Google reviews (Erik, Enrique
  Castillo) — see "Research" above.
- **Service tiles** (wood privacy fences, chain link fencing, gates &
  hardware, fence repair): generic examples of fence-contractor work, not
  an itemized, owner-confirmed service menu. The page states this
  directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Castillo's Fence, its crew, or its work.
- **Reviews section**: only the real 5.0/5 rating is shown — no review
  text, no named customers appear on the page. The full review texts read
  during research (Rachel Doss, Phillip Ward, Enrique Castillo, plus 2
  more not individually quoted) stayed internal to this README, per
  `client-demo-site` §1/§3. The separate 1.0★ Yelp listing is disclosed
  here only, per instruction — not shown on the client-facing page.
- **Hours**: no published hours were found on the listing — shown as
  "Call or message to check availability," never a guessed schedule.
- **About-section copy** ("no showroom, no big ad budget," "lets the
  finished fence line speak for itself"): original marketing language
  informed by the thin online footprint and real review vocabulary above
  — not a quote, not an invented testimonial or statistic.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (cedar, charcoal, cream, rust) and fonts (Zilla Slab, Mulish). **Zero
  Lewis Digital gold (`#C9A227` family), zero Lewis charcoal `#16130e`,
  zero Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`
  (note: this demo's own `--charcoal`/`--cream` tokens use different hex
  values from Lewis Digital's reserved palette — confirmed by inspection).
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream
  brand (it's our sales tool) — per `client-demo-site` §4.
- Structurally and visually distinct from `demos/mk-fencing-construction/`
  (its direct sibling in this batch) — see comparison table above.

## Notes for outreach

- Lead with the real 5.0/5 Google rating and the specific "high quality
  fence" / "professional, efficient" review language (kept internal here,
  but safe to reference verbally in a call).
- Do not bring up the Yelp review proactively; if the owner raises it,
  it's already logged here honestly rather than hidden.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
