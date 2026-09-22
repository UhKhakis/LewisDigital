# Gomez Shoe Repair — Demo Site

One-page demo website for **Gomez Shoe Repair** (2418 Texas Ave B, College
Station, TX), built in the shop's own researched brand — batch 9, the
second of two shoe-repair demos built together (see "Structural
distinctness vs. Sam's Shoe Service" below for the required diff against
its same-trade sibling, `demos/sams-shoe-service/`).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, craftsmanship spotlight, about/meet Tomas & Eva, services, reviews, hours/find us, contact, footer) |
| `styles.css` | Client-brand theme only (walnut/verdigris/rust) |
| `assets/hero-cobbler.jpg` | Hero photo — free-license stock photo |
| `assets/leather-craft.jpg` | Craftsmanship-spotlight photo — free-license stock photo |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital's own brand — gold/charcoal/cream, untouched) |

## Preview

```bash
cd demos/gomez-shoe-repair
python3 -m http.server 8102 --bind 127.0.0.1
```

## Research — why this business, and what shaped the design

**Source:** Google Maps listing, read live 2026-09-21
(https://www.google.com/maps/search/Gomez+Shoe+Repair+College+Station+TX) —
name, category, address, phone, rating, and review text below all confirmed
there.

**Review reading (internal design research — see §1 of `client-demo-site`;
never published on-page as review text/quotes):**
- Restore Marketing (Local Guide, 5★): "outstanding job restoring my old,
  worn-out boots... craftsmanship and attention to detail were impressive."
- **Teresa Shanks (3 reviews):** "I have known Sr Tomas Gomez and his wife
  Eva for almost 40 years. Many years ago when I was at A&M Consolidated HS
  and then TAMU, my dad owned a shoe repair shop in College Station and Sr
  Gomez worked with him." — this review is the direct source for the "Tomas
  & Eva," family-run, ~40-year framing used in the About section (quoted
  here for internal design provenance; on the page it is paraphrased as
  original copy, not republished as a live review card).
- Ryan Dickey (5★): "Craftsmanship was top notch. My Lucchese look brand new
  thanks to Gomez Boot Repair." (Lucchese is a well-known premium Texas boot
  brand — signals the shop handles higher-end leatherwork.)
- Google's own review-topic tags on the listing: "craftsmanship" (6), "boot
  repair" (5), "quick turnaround" (3), "attention to detail" (2), plus more
  not opened.
- Review-summary pull-quotes shown by Google itself: "The craftsmanship was
  awesome I will bring my boots to no other place." / "Nice service and
  reasonably priced!" / "The quality of work is amazing."

**Vocabulary/theme takeaway:** narrow, craft-focused boot/shoe restoration
specialist — repeatedly praised for craftsmanship and attention to detail
on higher-end boots specifically, with a genuine multi-decade personal
story behind the counter. This is a different shop personality from Sam's
Shoe Service's broad "full service" everyday-footwear framing, and the page
is built to reflect that (see the distinctness table below).

**Existing web presence:** No independent website — the Google listing's
"Add website" prompt confirms none is on file; Facebook is the only real
link, per the brief. Facebook/Instagram color extraction was not attempted
for this shop given the time budget for this batch; the palette below is
disclosed as **trade-material-derived** (walnut leather-dye, aged-brass
patina, rust leather-dye), not pixel-extracted from a confirmed real photo
— an honest fallback per `client-demo-site` §1.

## Brand system

| Signal | Source | Value |
|---|---|---|
| Walnut `#4e3524` / verdigris (aged patina green) `#5c8a7c` / rust leather-dye `#b25b34` / parchment `#f2e8d5` | Trade-material derivation (walnut workbench, tool patina, leather dye, parchment paper) — disclosed as derived, not pixel-extracted | Craftsman's-workbench palette, deliberately different hue family from Sam's Shoe Service's leather-tan/oxblood/brass heritage-badge palette |
| Typography: Literata (warm book/craft serif) + Catamaran (body) + Space Mono (small labels) | Chosen to read as "hand-bound craft" rather than Sam's "stamped heritage badge" — checked against the other 47 demos' font pairings in `demos/*/styles.css`, none use this combination | |
| Layout: asymmetric large-photo hero, craftsmanship spotlight, minimal nav, simple service list (not a grid) | Original layout built to foreground the real "40 years, craftsmanship, Tomas & Eva" story ahead of a service list | Distinct from Sam's Shoe Service (see table below) and from every other demo in the repo |

`ui-ux-pro-max` was queried for a shoe-repair/cobbler-shop design system
(same query as Sam's: `python .claude/skills/ui-ux-pro-max/scripts/search.py
"shoe repair cobbler leather workshop" --design-system` → no close
product-type match) — no match found, stated plainly; the final direction
came from the Builder's own judgment applied to this business's real
research.

## Structural distinctness vs. Sam's Shoe Service (required same-trade diff)

| Element | Gomez Shoe Repair | Sam's Shoe Service |
|---|---|---|
| Hero | Asymmetric, large single workbench photo dominant, no hanging-tag motif | Split hero, hanging "claim ticket" tag graphic overlapping the photo |
| Signature element | Craftsman spotlight (single large restoration photo + story), stitched-seam dashed divider motif | Texas Treasure Award strip + two-generation timeline |
| Section order | Hero → Craftsmanship spotlight → About (meet Tomas & Eva) → Services (narrow list) → Reviews → Hours → Contact | Hero → Award strip → Services (broad grid) → Heritage timeline → Hours → Reviews → Contact |
| Services framing | Narrow: boot restoration specialist, presented as a plain list | Broad: shoes, boots, purses, belts, shines, alterations, presented as a 6-item card grid |
| Nav | Minimal — logo, phone, single CTA, no link list (personal workshop feel) | Full sticky top nav with anchor links + phone CTA |
| Typography | Literata + Catamaran + Space Mono | Bevan + Hind + Fira Mono |
| Palette | Walnut + verdigris + rust (workbench/patina) | Leather tan + oxblood + brass (heritage/badge) |

## What is REAL (verified & traceable)

Source: task brief + Google Maps listing, verified live 2026-09-21
(https://www.google.com/maps/search/Gomez+Shoe+Repair+College+Station+TX):

- Business name: **Gomez Shoe Repair**
- Category: **Shoe repair shop**
- Address: **2418 Texas Ave B, College Station, TX 77840** (Parkway Square)
- Phone: **(979) 764-7750**
- **Google rating: 4.6 stars, 42 reviews**
- No independent website — Facebook only, confirmed via listing and brief
- Run by **Tomas Gomez and his wife Eva** — per a real customer review
  citing a personal, nearly-40-year connection (Teresa Shanks review, read
  2026-09-21)
- Real reviews specifically praise craftsmanship on boot restoration,
  including premium boot brands (Lucchese)
- Partial hours: listing shows "Opens 8 AM Tue" — the only day/time
  published as of 2026-09-21

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hero photo** (`assets/hero-cobbler.jpg`) and **spotlight photo**
  (`assets/leather-craft.jpg`): free-license Pexels stock photos, not
  photos of the real shop, Tomas, Eva, or their staff — labeled as such in
  `alt` text and captions.
- **Service categories**: generic examples informed by real review
  vocabulary (boot restoration, resoling, stitching) — not a confirmed
  price list. Page carries an explicit note to confirm by phone.
- **Hours** beyond "Opens 8 AM Tuesday": not shown as fact — no placeholder
  table is presented as if hours were fully known.
- **Google reviews section**: only the real 4.6/42 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear
  here once connected") — the About-section quote is clearly framed as a
  paraphrase of a real review used for internal design provenance, not a
  verbatim review card.
- **Palette**: disclosed above as trade-material-derived (walnut, tool
  patina, leather dye), not measured from a confirmed real photo of this
  specific shop.

## Photos

- **Hero** (`assets/hero-cobbler.jpg`):
  [pexels.com/photo/34510831](https://www.pexels.com/photo/skilled-cobbler-restoring-leather-shoes-in-workshop-34510831/)
  ("Skilled Cobbler Restoring Leather Shoes in Workshop"), photographer
  **Mahmut G&ouml;g&uuml;s**.
- **Craftsmanship spotlight** (`assets/leather-craft.jpg`):
  [pexels.com/photo/11676700](https://www.pexels.com/photo/close-up-photo-of-handcrafting-of-leather-11676700/)
  ("Close-up Photo of Handcrafting of Leather"), photographer **Lantip**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Gomez Shoe Repair, its shop, or its staff.

## Brand-rule compliance

- Client-facing page uses ONLY client-brand colors (walnut, verdigris,
  rust, parchment — all disclosed above) and client-brand fonts (Literata +
  Catamaran + Space Mono). **No Lewis gold (#C9A227 family), no Lewis
  charcoal #16130e, no Lewis cream #fbf8f1** anywhere in
  `index.html`/`styles.css`.
- The word "Lewis Digital" does not appear anywhere on `index.html`. Footer
  reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/
  cream brand (it is OUR sales tool, the one page that's allowed to).
- **Google link confirmed present**: `index.html` contains three
  `<a href="https://www.google.com/maps/search/Gomez+Shoe+Repair+College+Station+TX">`
  links (hero "See us on Google" button, reviews section, contact section),
  each pointing at the exact `source_url` given in the brief.
- Layout is structurally distinct from Sam's Shoe Service (table above) and
  does not reuse any hero/section/signature-element combination from the
  other 57 demos already in `demos/`.
