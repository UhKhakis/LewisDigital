# Allstar Carpet Cleaning & Repair — Demo Site

One-page demo website for **Allstar Carpet Cleaning & Repair** (1600 S Oaks
Dr, College Station, TX), built in the business's own researched brand —
batch 9. `demos/1st-choice-steam-cleaning/` already exists for the
carpet-cleaning trade in this repo, so this demo was deliberately built to
be structurally and visually distinct from it — see "Distinctness vs. 1st
Choice Steam Cleaning" below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (full-bleed hero, services, "The Chris difference" owner spotlight, Aggie-owned trust strip, reviews, service area, hours/find us, contact, floating mobile call button, footer) |
| `styles.css` | Client-brand theme only (Aggie maroon/sage/linen) |
| `assets/hero-living-room.jpg` | Hero photo — free-license stock photo |
| `assets/vacuum-rug.jpg` | Owner-spotlight-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital's own brand — gold/charcoal/cream, untouched) |

## Preview

```bash
cd demos/allstar-carpet-cleaning
python3 -m http.server 8105 --bind 127.0.0.1
```

## Research — why this business, and what shaped the design

**Source:** Google Maps listing, read live 2026-09-21
(https://www.google.com/maps/search/Allstar+Carpet+Cleaning+%26+Repair+College+Station+TX)
— name, category, address, phone, rating, and review text below all
confirmed there.

**Review reading (internal design research — see §1 of `client-demo-site`;
never published on-page as review text/quotes):**
- Ryan Gyllenband: "We've been using Allstar Carpet Cleaning & Repair for
  over 15 years, and Chris has always been fantastic to work with. It's
  rare to find a business that's consistently reliable, honest, and does
  such high-quality work year after year." Owner's public reply, signed
  personally, thanks Ryan and his parents by name.
- Michael Cantu: "Great work at a fair price! ... Got my carpet repaired
  and you wouldn't even be able to tell there was work done." Owner's
  reply signed "-Chris."
- Kari Newtown: "I had Chris come out and clean my carpet and area rug. He
  did an amazing job. Very professional, friendly and very affordable."
- Google's own review-topic tags on the listing: "pricing" (7), "friendly
  staff" (4), "job" (4), "quality work" (3), "carpet repair" (2), plus
  more not opened.
- Review-summary pull-quotes shown by Google itself: "Great people, fair
  price, quality work." / "Great communication and service!" / "Personable,
  Good Quality Work, At Good Rates!"

**Vocabulary/theme takeaway:** owner Chris is named personally in nearly
every review and replies to each one himself, often signing "-Chris" —
this is a small, personal, long-tenured local business, not a franchise.
Longevity is a real theme (a 15+ year customer relationship) that lines up
directly with the brief's "Aggie owned & operated since 2009" fact. The
page's central signature (the "Chris difference" spotlight section + the
Aggie-owned trust strip) is built directly from this.

**Existing web presence:** No independent website — a same-named domain
belongs to an unrelated California business, confirmed not to be this
company (per the brief). Facebook page confirmed to exist via web search
("Allstar Carpet Cleaning & Repair, College Station. 473 likes...
Professional Carpet & Tile Cleaning Service") but was not opened for photo
color extraction given the time budget for this batch; the palette below
is disclosed as **derived** — a deliberate, legitimate nod to the real,
business-stated "Aggie owned & operated" identity (Texas A&M's own maroon)
paired with a fresh sage green — not pixel-extracted from a confirmed real
photo.

## Brand system

| Signal | Source | Value |
|---|---|---|
| Aggie maroon `#5c1a2e` / sage green `#7a9b7e` / linen `#f7f2e7` | Deliberate, disclosed derivation from the business's own real "Aggie owned & operated" positioning (per brief) — Texas A&M's own maroon, paired with a fresh "clean" sage rather than the blue most cleaning/HVAC demos in this repo default to | Warm, trustworthy, distinctly non-blue palette |
| Typography: Rokkitt (sturdy slab) + Asap (body) + DM Mono (small labels) | Chosen for a trustworthy, approachable, blue-collar-home-service feel — checked against the other 47 demos' font pairings in `demos/*/styles.css`, none use this combination | |
| Layout: non-sticky header, full-bleed photo hero, list-style services (not cards), "Chris difference" spotlight, diagonal-sweep trust strip, floating mobile call button | Original layout built to foreground the real "Chris, personally, for 17 years" story | Distinct from 1st Choice Steam Cleaning (see below) and from every other demo in the repo |

`ui-ux-pro-max` was queried for a carpet-cleaning/home-service design system
(`python .claude/skills/ui-ux-pro-max/scripts/search.py "carpet cleaning
home service local business" --design-system` → no close product-type
match) — no match found, stated plainly; the final direction came from the
Builder's own judgment applied to this business's real research.

## Distinctness vs. 1st Choice Steam Cleaning (required same-trade diff)

| Element | Allstar Carpet Cleaning & Repair | 1st Choice Steam Cleaning |
|---|---|---|
| Header | Static, not sticky | Sticky teal header |
| Hero | Full-bleed background photo with gradient overlay | Split hero, swirl-gradient graphic + separate photo panel |
| Signature element | "The Chris difference" owner spotlight + diagonal maroon-sweep Aggie-owned trust strip | Trust ribbon top strip + 4-stat stats band + social-card sidebar |
| Services layout | Icon list rows | 3-column card grid with top accent border |
| Section order | Hero &rarr; Services &rarr; Owner spotlight &rarr; Trust strip &rarr; Reviews &rarr; Service area &rarr; Hours &rarr; Contact | Hero &rarr; Stats strip &rarr; Services &rarr; About (w/ social sidebar) &rarr; Reviews &rarr; Service area &rarr; Contact |
| Typography | Rokkitt + Asap + DM Mono | Bricolage Grotesque + Instrument Sans + Fragment Mono |
| Palette | Aggie maroon + sage + linen | Deep water-teal + warm terracotta + cream |
| Photos | Different Pexels photos entirely (verified against 1st Choice's README to avoid reusing the same images — see Photos below) | — |
| Nav/interaction | Floating full-width mobile call button | No floating CTA |

## What is REAL (verified & traceable)

Source: task brief + Google Maps listing, verified live 2026-09-21
(https://www.google.com/maps/search/Allstar+Carpet+Cleaning+%26+Repair+College+Station+TX):

- Business name: **Allstar Carpet Cleaning & Repair**
- Category: **Carpet cleaning service**
- Address: **1600 S Oaks Dr, College Station, TX 77845**
- Phone: **(979) 229-6150**
- **Google rating: 4.9 stars, 19 reviews**
- No independent website — a same-named domain belongs to an unrelated
  California business, confirmed not this company (per brief)
- **Owner named Chris** — confirmed repeatedly across multiple real Google
  reviews and owner replies, each signed personally
- **Aggie owned & operated since 2009** (per brief) — consistent with a
  real review describing a 15+ year customer relationship
- **Hours: Open 24 hours**, as published on the Google Business Profile,
  verified 2026-09-21

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hero photo** (`assets/hero-living-room.jpg`) and **owner-spotlight
  photo** (`assets/vacuum-rug.jpg`): free-license Pexels stock photos, not
  photos of the real business, Chris, or its work — labeled as such in
  `alt` text and captions.
- **Service categories**: generic examples for the carpet-cleaning trade,
  informed by real review-topic tags — not a confirmed price list. Page
  carries an explicit note to confirm by phone.
- **Service-area cards**: College Station and Bryan are named as the
  business's home area and a neighboring city Soto's/Exhaust Works/Sam's
  operate in per this same batch's research; the third card explicitly
  says "Call to confirm your area" rather than guessing a list of towns.
- **Google reviews section**: only the real 4.9/19 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear
  here once connected") — the owner-spotlight paragraph is clearly framed
  as paraphrased research, not a verbatim review card.
- **Palette**: disclosed above as a deliberate derivation from the real
  "Aggie owned" positioning, not measured from a confirmed real photo of
  this specific business.

## Photos

- **Hero** (`assets/hero-living-room.jpg`):
  [pexels.com/photo/6721107](https://www.pexels.com/photo/a-clean-and-cozy-living-room-6721107/)
  ("A Clean and Cozy Living Room"), photographer **Terry Magallanes**.
- **Owner-spotlight section** (`assets/vacuum-rug.jpg`):
  [pexels.com/photo/4107284](https://www.pexels.com/photo/black-vacuum-cleaner-on-area-rug-4107284/)
  ("Black Vacuum Cleaner on Area Rug"), photographer **cottonbro studio**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Allstar Carpet Cleaning & Repair or its work. Both photo IDs were
checked against `demos/1st-choice-steam-cleaning/README.md` (which used
Pexels photos 7045833 and 38325) to confirm no image is reused between the
two carpet-cleaning demos.

## Brand-rule compliance

- Client-facing page uses ONLY client-brand colors (Aggie maroon, sage,
  linen — all disclosed above) and client-brand fonts (Rokkitt + Asap + DM
  Mono). **No Lewis gold (#C9A227 family), no Lewis charcoal #16130e, no
  Lewis cream #fbf8f1** anywhere in `index.html`/`styles.css`.
- The word "Lewis Digital" does not appear anywhere on `index.html`. Footer
  reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/
  cream brand (it is OUR sales tool, the one page that's allowed to).
- **Google link confirmed present**: `index.html` contains three
  `<a href="https://www.google.com/maps/search/Allstar+Carpet+Cleaning+%26+Repair+College+Station+TX">`
  links (reviews section "See us on Google" button, hero, contact section),
  each pointing at the exact `source_url` given in the brief.
- Layout is structurally distinct from 1st Choice Steam Cleaning (table
  above) and does not reuse any hero/section/signature-element combination
  from the other 57 demos already in `demos/`.
