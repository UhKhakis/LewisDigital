# Sam's Shoe Service — Demo Site

One-page demo website for **Sam's Shoe Service** (1110 E 24th St, Bryan, TX),
built in the shop's own researched brand — batch 9, one of two shoe-repair
demos built together (see "Structural distinctness vs. Gomez Shoe Repair"
below for the required diff against its same-trade sibling).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, Texas Treasure Award strip, services, heritage timeline, hours/find us, reviews, contact, footer) |
| `styles.css` | Client-brand theme only (leather/oxblood/brass) |
| `assets/hero-workshop.jpg` | Hero photo — free-license stock photo |
| `assets/boots-shelf.jpg` | Heritage-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital's own brand — gold/charcoal/cream, untouched) |

## Preview

```bash
cd demos/sams-shoe-service
python3 -m http.server 8101 --bind 127.0.0.1
```

## Research — why this business, and what shaped the design

**Source:** Google Maps listing, read live 2026-09-21
(https://www.google.com/maps/search/Sam%27s+Shoe+Service+Bryan+TX) — name,
category, address, phone, rating, and review text below all confirmed there.

**Review reading (internal design research — see §1 of `client-demo-site`;
never published on-page as review text/quotes):**
- Katelynn Kellogg (Local Guide, 5★): heel came off her favorite knee-high
  boots; chose Sam's specifically to "support local, small businesses."
- Ranchers Hat Store (5★): "Took 2 pairs of my favorite boots to get new
  soles and heels... beyond satisfied! ... good craftsmanship."
- Chloe Rose (5★): boots repainted, plus a same-day shine turnaround.
- Google's own review-topic tags on the listing: "quick turn around" (2),
  "purse repair" (2), "wait time" (2), "heel repair" (2), plus more not
  opened.
- Review-summary pull-quotes shown by Google itself: "They made my husband's
  boots look brand new!" / "I'd highly recommend this place because of the
  A+ service and hospitality." / "However the staff was very helpful and had
  alternative suggestions."

**Vocabulary/theme takeaway:** broad footwear + leather-goods shop (boots,
purses, shoe shines, heel repair), fast turnaround, craftsmanship,
small-business loyalty. This reads as an everyday, full-service neighborhood
shop — not a narrow boot-only specialist (that's the Gomez Shoe Repair
story, see below).

**Existing web presence:** No independent website — the Google listing's
"Add website" prompt confirms none is on file, and a directory page that
superficially resembled a website was independently confirmed to be an
auto-generated placeholder, not a real site (per the brief). A real
Facebook page exists (`facebook.com` search result "Sam's Shoe Service,
Bryan, TX. 44 likes... 1110 E 24th St, Bryan, TX") whose About text states:
**"Full service shoe store for fitting, sales, repairs and alterations. Two
generations of experience."** — this is the direct source for the "full
service" services framing and the "two generations" heritage-timeline copy.
Facebook photo/cover-image color extraction was attempted but the specific
profile could not be reliably reached without login (a same-named,
different Sam's Shoe Service in Auburn, NY, kept appearing instead) — so
the palette below is disclosed as **trade-material-derived**, not
pixel-extracted from a confirmed real photo.

**New fact discovered beyond the brief:** a live web search
(`"Sam's Shoe Service" Bryan "Texas Treasure" 1979`, 2026-09-21) surfaced
independent confirmation that Sam's Shoe Service is a **2025 Texas Treasure
Business Award recipient**, presented by the **Brazos County Historical
Commission** — a real Texas heritage-business recognition program for
long-established businesses. This is genuinely distinctive, real, and
became the page's central signature element (the award strip + heritage
timeline) rather than a generic "auto repair"/"cobbler shop" template. It is
cited on-page as "per the business's own Facebook posts, cross-checked via
public web search" since it was not independently verified directly with
the Historical Commission.

## Brand system

| Signal | Source | Value |
|---|---|---|
| Leather saddle-tan `#7a4a26` / oxblood `#6e2430` / brass `#b8873b` / cream `#f4ead9` | Trade-material derivation (leather, boot polish, brass rivets/hardware, stitching thread) — disclosed as derived, not pixel-extracted, since the real Facebook photo could not be reliably reached | Heritage/craftsmanship palette |
| Typography: Bevan (display) + Hind (body) + Fira Mono (claim-ticket/spec labels) | Stamped, heritage-badge display type to match the Texas Treasure Award framing; clean, legible body; monospace for "claim ticket" numbers, echoing an old repair-shop claim stub | Checked against the other 47 demos' font pairings in `demos/*/styles.css` — none use this combination |
| Layout: hanging claim-ticket tag on the hero photo, Texas Treasure Award strip, two-generation timeline, broad 6-item service grid | Original layout built from the real "full service" Facebook description + the real award | Distinct from Gomez Shoe Repair (see below) and from every other demo in the repo |

`ui-ux-pro-max` was queried for a shoe-repair/cobbler-shop design system
(`python .claude/skills/ui-ux-pro-max/scripts/search.py "shoe repair cobbler
leather workshop" --design-system` → no close product-type match in the
database) — no match found, stated plainly rather than forcing one; the
final direction (heritage/badge identity built around the real Texas
Treasure Award) came from the Builder's own judgment applied to this
business's real research, per `frontend-design`'s brainstorm → critique
process.

## Structural distinctness vs. Gomez Shoe Repair (required same-trade diff)

Both are shoe-repair shops built in the same batch, so per the
`client-demo-site` skill they must differ structurally, not just in color:

| Element | Sam's Shoe Service | Gomez Shoe Repair |
|---|---|---|
| Hero | Split hero, hanging "claim ticket" tag graphic overlapping the photo | Asymmetric hero, large single workbench photo, no hanging-tag motif |
| Signature element | Texas Treasure Award strip + two-generation timeline | Craftsman spotlight (single large restoration photo + story), stitched-seam dashed divider motif |
| Section order | Hero → Award strip → Services (broad 6-item grid) → Heritage timeline → Hours → Reviews → Contact | Hero → Craftsmanship spotlight → About (meet the Gomez family) → Services (narrow boot-focused list) → Reviews → Hours → Contact |
| Services framing | Broad: shoes, boots, purses, belts, shines, alterations (everyday full-service shop) | Narrow: boot restoration specialist (per real review vocabulary — "craftsmanship," "boot repair," "attention to detail") |
| Nav | Full sticky top nav with anchor links + phone CTA | Minimal nav — logo, phone, single CTA, no link list (smaller, more personal workshop feel) |
| Typography | Bevan (stamped/heritage) + Hind + Fira Mono | Literata (warm book-serif/craft) + Catamaran + Space Mono |
| Palette | Leather tan + oxblood + brass (heritage/badge) | Walnut + verdigris + rust (workbench/patina) — see Gomez README |

## What is REAL (verified & traceable)

Source: task brief + Google Maps listing, verified live 2026-09-21
(https://www.google.com/maps/search/Sam%27s+Shoe+Service+Bryan+TX):

- Business name: **Sam's Shoe Service**
- Category: **Shoe repair shop**
- Address: **1110 E 24th St, Bryan, TX 77803**
- Phone: **(979) 779-0445**
- **Google rating: 4.9 stars, 31 reviews**
- No independent website (confirmed via the listing's "Add website" prompt
  and independently per the brief — a directory page resembling a website
  is an auto-generated placeholder, not a real site)
- **Established 1979** (per brief; consistent with the "47 years" framing
  and the Texas Treasure Award's longevity criteria)
- "Full service shoe store for fitting, sales, repairs and alterations. Two
  generations of experience." — quoted from the business's own Facebook
  About text, found via public web search 2026-09-21
- **2025 Texas Treasure Business Award**, presented by the Brazos County
  Historical Commission — found via public web search of the business's own
  Facebook posts, 2026-09-21; cited on-page with that sourcing caveat
- Partial hours: listing shows "Opens 9 AM Tue" — the only day/time
  published as of 2026-09-21

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hero photo** (`assets/hero-workshop.jpg`) and **heritage-section photo**
  (`assets/boots-shelf.jpg`): free-license Pexels stock photos, not photos
  of the real shop or its staff — labeled as such in `alt` text and
  captions.
- **Service categories**: generic examples informed by the shop's own "full
  service" Facebook description and real review vocabulary (boots, purses,
  shines, heel repair) — not a confirmed price list. Page carries an
  explicit note to confirm by phone.
- **Hours** beyond "Opens 9 AM Tuesday": shown as "Call or message for
  hours," clearly marked as unconfirmed.
- **Google reviews section**: only the real 4.9/31 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear
  here once connected") — no real review text is published as page copy.
- **Palette**: disclosed above as trade-material-derived (leather, boot
  polish, brass hardware), not measured from a confirmed real photo of this
  specific shop — the real Facebook profile could not be reliably reached.

## Photos

- **Hero** (`assets/hero-workshop.jpg`):
  [pexels.com/photo/14832520](https://www.pexels.com/photo/shoemaker-repairing-shoes-in-his-workshop-14832520/)
  ("Shoemaker Repairing Shoes in his Workshop"), photographer **Zeynep Sude
  Emek**.
- **Heritage section** (`assets/boots-shelf.jpg`):
  [pexels.com/photo/13106333](https://www.pexels.com/photo/photograph-of-leather-boots-13106333/)
  ("Photograph of Leather Boots"), photographer **Dominique BOULAY**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Sam's Shoe Service, its shop, or its staff.

## Brand-rule compliance

- Client-facing page uses ONLY client-brand colors (leather tan, oxblood,
  brass, cream — all disclosed above) and client-brand fonts (Bevan + Hind +
  Fira Mono). **No Lewis gold (#C9A227 family), no Lewis charcoal #16130e,
  no Lewis cream #fbf8f1** anywhere in `index.html`/`styles.css`.
- The word "Lewis Digital" does not appear anywhere on `index.html`. Footer
  reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/
  cream brand (it is OUR sales tool, the one page that's allowed to).
- **Google link confirmed present**: `index.html` contains three
  `<a href="https://www.google.com/maps/search/Sam%27s+Shoe+Service+Bryan+TX">`
  links (hero "See us on Google" button, reviews section, contact section),
  each pointing at the exact `source_url` given in the brief.
- Layout is structurally distinct from Gomez Shoe Repair (table above) and
  does not reuse any hero/section/signature-element combination from the
  other 57 demos already in `demos/`.
