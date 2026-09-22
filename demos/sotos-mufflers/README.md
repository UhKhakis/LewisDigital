# Soto's Mufflers — Demo Site

One-page demo website for **Soto's Mufflers** (1312 Finfeather Rd, Bryan,
TX), built in the shop's own researched brand — batch 9, one of two
muffler/exhaust demos built together (see "Structural distinctness vs.
Exhaust Works LLC" below for the required diff against its same-trade
sibling, `demos/exhaust-works/`). Also checked against the pre-existing
`demos/bryan-muffler-performance/` (a different muffler shop already in the
repo) to avoid a third look-alike in the same trade — see "Notes vs. the
existing muffler demo" below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, quick-facts strip, services, shop-rules chalkboard, about, hours/find us, reviews, contact, footer) |
| `styles.css` | Client-brand theme only (gunmetal/rust/chrome/caution-yellow) |
| `assets/hero-garage.jpg` | Hero photo — free-license stock photo |
| `assets/undercarriage.jpg` | Shop-rules-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital's own brand — gold/charcoal/cream, untouched) |

## Preview

```bash
cd demos/sotos-mufflers
python3 -m http.server 8103 --bind 127.0.0.1
```

## Research — why this business, and what shaped the design

**Source:** Google Maps listing, read live 2026-09-21
(https://www.google.com/maps/search/Soto%27s+Mufflers+Bryan+TX) — name,
category, address, phone, rating, and review text below all confirmed
there.

**Review reading (internal design research — see §1 of `client-demo-site`;
never published on-page as review text/quotes):**
- "A" (Local Guide, 39 reviews, 75 photos): came in on a Friday afternoon,
  "they got to work immediately on replacing and upgrading my diesel
  muffler... great to see the father and son team up and they got it all
  done within a couple hours. One heads up: cash only, but..."
- Jaime Contreras (Local Guide): visited to look at exhaust options for a
  2024 F150 5.0L, "the owner was extremely helpful and gave me some
  options," roughly 90-minute wait.
- Giovanni Rousseau: "Very skillful and experienced... a great mechanic
  told me exactly what I need and showed me exactly what was going on."
- Google's own review-topic tags on the listing: "muffler installation" (7),
  "flowmaster installation" (2), "father and son team" (3), "honest
  mechanic" (2), plus more not opened.
- Review-summary pull-quotes shown by Google itself: "He does muffler
  service, some mechanic service, oil change, and restores rims." / "The
  owner was extremely helpful and gave me some options." / "Amazing work,
  super friendly, and extremely reasonable price."

**Vocabulary/theme takeaway:** a real father-and-son garage — diesel
exhaust, Flowmaster performance installs, rim restoration, general light
mechanic work, straight talk about options before work starts, and (per one
reviewer) cash-only payment. This is a working, no-frills toolbox operation
— the design leans into that (shop-rules chalkboard aside, ticket-stub
hours card) rather than a red-signboard "performance shop" look, which is
deliberately reserved for the design language of the pre-existing
`demos/bryan-muffler-performance/` (see notes below).

**Existing web presence:** No independent website — confirmed via the
listing's "Add website" prompt and per the brief. Facebook/Instagram color
extraction was not attempted for this shop given the time budget for this
batch; the palette below is disclosed as **trade-material-derived**
(gunmetal, oxidized exhaust-pipe rust, chrome, a caution-tag yellow), not
pixel-extracted from a confirmed real photo — an honest fallback per
`client-demo-site` §1.

## Brand system

| Signal | Source | Value |
|---|---|---|
| Gunmetal `#23262b` / oxidized rust `#b5502a` / chrome `#b9c2c6` / caution yellow `#e8a53d` | Trade-material derivation (exhaust-pipe steel, rust/oxidation, chrome trim, work-order caution tags) — disclosed as derived, not pixel-extracted | Toolbox/garage identity, deliberately different hue family from Exhaust Works LLC's racing-green/spark-orange palette and from Bryan Muffler & Performance's red-signboard/asphalt palette |
| Typography: Khand (condensed industrial display) + Overpass (body) + JetBrains Mono (ticket labels) | Condensed, utilitarian type to match a working toolbox shop, distinct from Bryan Muffler & Performance's Alfa Slab One sign-board type and from Exhaust Works LLC's rounded, friendly display type | Checked against the other 47 demos' font pairings in `demos/*/styles.css` — none use this combination |
| Layout: quick-facts strip, shop-rules chalkboard, ticket-stub hours card | Original layout built from the real father-son/cash-only/honest-mechanic review vocabulary | Distinct from Exhaust Works LLC and from Bryan Muffler & Performance (notes below) |

`ui-ux-pro-max` was queried for a muffler/exhaust-shop design system
(`python .claude/skills/ui-ux-pro-max/scripts/search.py "muffler exhaust
repair garage" --design-system` → no close product-type match) — no match
found, stated plainly; the final direction came from the Builder's own
judgment applied to this business's real research.

## Structural distinctness vs. Exhaust Works LLC (required same-trade diff)

| Element | Soto's Mufflers | Exhaust Works LLC |
|---|---|---|
| Hero | Split hero, garage/undercarriage photography | Full-width hero built around a welding/spark photo, single-owner framing |
| Signature element | Quick-facts strip (father & son, rating, muffler+mechanic) + shop-rules chalkboard aside | "How we work" 3-step transparency process (diagnose &rarr; show you &rarr; fix it) + clean-weld spotlight |
| Section order | Hero &rarr; Quick-facts strip &rarr; Services (list) &rarr; Shop-rules chalkboard &rarr; About &rarr; Hours &rarr; Reviews &rarr; Contact | Hero &rarr; How-we-work process &rarr; Services (cards) &rarr; Weld spotlight &rarr; About (single owner) &rarr; Reviews &rarr; Hours &rarr; Contact |
| Voice | Gritty, no-frills, father-son team, cash-only note | Personable, single owner who replies to every review, custom-project energy |
| Typography | Khand (condensed industrial) + Overpass + JetBrains Mono | Righteous (rounded friendly) + Readex Pro + Chivo Mono |
| Palette | Gunmetal + rust + chrome + caution yellow | Racing green + spark orange + brushed aluminum |
| Nav/interaction | Standard sticky top bar | Sticky bottom-right call bubble on mobile (distinct interaction) |

## Notes vs. the existing muffler demo (`demos/bryan-muffler-performance/`)

That demo (a different, unrelated muffler shop already in the repo) uses a
bold red-signboard, dark-asphalt, Alfa Slab One "performance shop" identity
with a hanging tag-board and vehicle spec-plate motif. Soto's deliberately
avoids all three of those signature devices (signboard red, spec-plate,
hanging tag-board) and uses a different hue family (gunmetal/rust/chrome
vs. asphalt/sign-red/steel-blue), a condensed industrial typeface instead
of a slab display face, and a chalkboard/ticket-stub motif not used there.

## What is REAL (verified & traceable)

Source: task brief + Google Maps listing, verified live 2026-09-21
(https://www.google.com/maps/search/Soto%27s+Mufflers+Bryan+TX):

- Business name: **Soto's Mufflers**
- Category: **Muffler shop**
- Address: **1312 Finfeather Rd, Bryan, TX 77803**
- Phone: **(979) 422-6448**
- **Google rating: 4.7 stars, 44 reviews**
- No independent website, confirmed via listing and brief
- Real reviews describe a **father-and-son team**, diesel muffler
  replacement/upgrade work, Flowmaster performance installs, oil changes,
  rim restoration, and light mechanic work
- Partial hours: listing shows "Opens 9 AM Tue" — the only day/time
  published as of 2026-09-21

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hero photo** (`assets/hero-garage.jpg`) and **shop-rules-section photo**
  (`assets/undercarriage.jpg`): free-license Pexels stock photos, not
  photos of the real shop or its staff — labeled as such in `alt` text and
  captions.
- **Service categories**: generic examples informed by real review-topic
  tags — not a confirmed price list. Page carries an explicit note to
  confirm by phone.
- **Shop-notes chalkboard** ("Family owned & operated," "Walk-ins
  welcome," "Ask about payment options when you call," "Reasonable
  pricing, per real reviews"): worded as an honest, non-committal summary
  of what real reviews suggest — the "cash only" detail from a single
  review is deliberately **not** stated as a hard fact on the page (only
  one reviewer mentioned it, and policies can change), hence "ask about
  payment options" rather than a flat claim.
- **Hours** beyond "Opens 9 AM Tuesday": shown as "Call or message for
  hours," clearly marked as unconfirmed.
- **Google reviews section**: only the real 4.7/44 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear
  here once connected") — no real review text is published as page copy.
- **Palette**: disclosed above as trade-material-derived, not measured from
  a confirmed real photo of this specific shop.

## Photos

- **Hero** (`assets/hero-garage.jpg`):
  [pexels.com/photo/8985613](https://www.pexels.com/photo/man-in-blue-coverall-checking-under-a-vehicle-8985613/)
  ("Man in Blue Coverall Checking Under A Vehicle"), photographer **Artem
  Podrez**.
- **Shop-rules section** (`assets/undercarriage.jpg`):
  [pexels.com/photo/8986137](https://www.pexels.com/photo/photo-of-automobile-under-chassis-8986137/)
  ("Photo of Automobile Under Chassis"), photographer **Artem Podrez**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Soto's Mufflers, its shop, or its staff.

## Brand-rule compliance

- Client-facing page uses ONLY client-brand colors (gunmetal, rust, chrome,
  caution yellow — all disclosed above) and client-brand fonts (Khand +
  Overpass + JetBrains Mono). **No Lewis gold (#C9A227 family), no Lewis
  charcoal #16130e, no Lewis cream #fbf8f1** anywhere in
  `index.html`/`styles.css`.
- The word "Lewis Digital" does not appear anywhere on `index.html`. Footer
  reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/
  cream brand (it is OUR sales tool, the one page that's allowed to).
- **Google link confirmed present**: `index.html` contains three
  `<a href="https://www.google.com/maps/search/Soto%27s+Mufflers+Bryan+TX">`
  links (hero "See us on Google" button, reviews section, contact section),
  each pointing at the exact `source_url` given in the brief.
- Layout is structurally distinct from Exhaust Works LLC (table above) and
  from Bryan Muffler & Performance (notes above), and does not reuse any
  hero/section/signature-element combination from the other 57 demos
  already in `demos/`.
