# MK Fencing & Construction Services — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **MK Fencing & Construction Services** (service
area: Brazos County, TX — no public street address · (979) 595-3050 ·
MKFencingCS@gmail.com · Fence contractor). Part of the same
owner-authorized five-demo batch as `petes-trees`,
`mikes-complete-tree-services`, `static-heating-air-conditioning`, and
`castillos-fence` — the normal "no demo until the client confirms
interest" gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/MK+Fencing+%26+Construction+Services+Bryan+TX`

- **5.0 stars, 5 reviews.** Full review texts read for tone/vocabulary
  research only, quoted here for internal reference per
  `client-demo-site` §1/§3 — none of this text appears on the page:
  - Amanda Payne: "The quality of workmanship was top tier and the
    customer service was even better!"
  - Scarlet Spikes: "Matt was awesome to work with! He kept us in the
    loop the whole time... honest, reliable, and easy to work with."
  - Jamie Ofczarzak: "His communication and attention to detail was
    excellent!"
- **Owner-name discrepancy, handled per instruction:** three separate
  reviews name **"Matt"** as the point of contact on jobs. The task
  brief's pre-verified research instead identifies the owner as
  **Kayla**, noting some listings reference "Matt." This research pass
  did not reconcile the two. Per the task's explicit instruction, **no
  owner name is asserted on the page** — the design lets the business's
  verified Google attribute (women-owned) and its own review language
  speak, rather than guessing at "Matt" vs. "Kayla." "Matt" is
  acknowledged here as a name that appears in real reviews, not published
  as a claimed-owner fact on the client page.
- **Verified Google attribute: "Identifies as women-owned."** This is a
  structured attribute Google itself shows on the listing (not
  inferred, not marketing copy) — used directly as a real, sourced fact
  on the page.
- Listing shows **no street address** (a service-area business) and
  **"Open 24 hours."**
- **Cover photo is a strong, real brand signal**: a natural cedar-plank
  privacy fence with a dark/black metal frame, shot straight-on next to a
  brick wall. This directly seeded the site's palette (warm cedar + near-
  black charcoal) and the choice of hero stock photo (a similar real
  modern cedar-and-black-metal fence, since Google's own photo isn't
  licensed for reuse here).
- No live business website found (a previously-referenced domain is
  described in the task brief as expired/parked). Facebook and Instagram
  (@mk.fencing) presence exists per the task brief but was not
  separately re-verified in this pass.

## Design direction

**Modern, clean, small-business-building-trust.** Warm cedar (`--gold`,
sourced from the real cover photo) + near-black charcoal + a soft
off-white base — directly pulled from MK's own real Google photo, not a
generic "fence company" default. Poppins (rounded, modern geometric
display) + Source Sans 3 (clean body) — a type pairing not used by any
other demo in this batch.

**Signature elements:**
- A **chip/badge row** at the top of the hero (Woman-owned · Est. 2022 ·
  Serving Brazos County) — three real, verifiable facts presented as
  scannable pills, replacing the usual rating-badge-only hero treatment.
- A **"Service Area" section** in place of a conventional "Hours & Find
  Us" block, since MK genuinely has no fixed address — a structural
  difference driven directly by a real fact, not an arbitrary design
  choice.

**Section order:** Hero (chip row + copy + photo) → About + Services
(two-column, services shown as a compact list rather than a card grid) →
full-width texture photo strip → Service Area (Brazos County coverage,
email + phone) → Reviews (honest 5.0/5 disclosure) → Contact (phone +
email, no address) → Footer.

## Structural distinctness vs. Castillo's Fence

See the comparison table in `demos/castillos-fence/README.md` for the
full side-by-side — summary: split modern hero with chip badges (vs.
Castillo's full-bleed warm-scrim hero), a Service Area section instead of
a Hours/Find Us section (a direct consequence of MK having no fixed
address vs. Castillo's real street address), a compact service list (vs.
Castillo's 4-across card grid), different signature element (chip row vs.
rail-and-post divider), different type pairing (Poppins/Source Sans 3 vs.
Zilla Slab/Mulish), and an email-forward contact treatment (MK is the
only business in this batch with a verified email address, so it's the
only demo to feature `mailto:` CTAs alongside `tel:`).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, about/services, service area, reviews, contact, footer) |
| `styles.css` | All styling — sourced client brand (cedar/charcoal/off-white, Poppins/Source Sans 3) |
| `assets/hero-modern-fence.jpg` | Hero photo — free-license stock photo |
| `assets/fence-panel-texture.jpg` | Texture-strip photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both real, free-license Pexels stock photos — **not** photos of MK
Fencing & Construction Services, its crew, or its work:

- **Hero** (`assets/hero-modern-fence.jpg`):
  [pexels.com/photo/922797](https://www.pexels.com/photo/photo-of-opened-brown-wooden-sliding-house-gate-922797/)
  ("Photo of Opened Brown Wooden Sliding House Gate"), photographer
  **Gerritt Tisdale** — a modern horizontal cedar-plank fence with a
  black metal frame and gate, matching the real style seen on MK's own
  Google cover photo.
- **Texture strip** (`assets/fence-panel-texture.jpg`):
  [pexels.com/photo/25785386](https://www.pexels.com/photo/logs-on-wooden-wall-25785386/)
  ("Logs on Wooden Wall"), photographer **Diana**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/mk-fencing-construction
python -m http.server 8205 --bind 127.0.0.1   # preview on localhost:8205
```

Verified locally 2026-09-03: all images return HTTP 200, no console errors,
content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **MK Fencing & Construction Services**
- Service area: **Brazos County, TX** (no public street address — a
  service-area business, per the Google listing itself)
- Phone: **(979) 595-3050**
- Email: **MKFencingCS@gmail.com**
- Category: **Fence contractor**
- **Google rating: 5.0 out of 5, from 5 reviews** — the business's public
  Google Maps listing, verified 2026-09-03.
- **"Identifies as women-owned"** — a verified, structured Google
  attribute shown directly on the listing.
- **Est. 2022** — per the task brief's pre-verified sourcing, used
  directly as instructed.
- **Hours**: shown as "Open 24 hours," per the listing's own live status
  when checked 2026-09-03.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Owner name**: not asserted, given the unreconciled Matt/Kayla
  discrepancy — see "Research" above. "Matt" is not published as a
  claimed-owner fact.
- **"Veteran-owned"**: the task brief mentions this descriptor, but no
  corresponding verified Google attribute was found for it (only
  "women-owned" appears on the listing) — it is **not** used on the page
  or asserted as fact in this README, to avoid stating an unverified
  claim.
- **Service list** (wood & cedar privacy fences, metal & ornamental
  fencing, fence repair, general construction services): generic
  examples informed by the business's own name ("& Construction
  Services") and the real cover-photo style — not an itemized,
  owner-confirmed menu. The page states this directly.
- **Both hero and texture-strip photos**: real stock photos, explicitly
  not photos of MK Fencing & Construction Services, its crew, or its
  work.
- **Reviews section**: only the real 5.0/5 rating is shown — no review
  text, no named customers (including "Matt") appear on the page. The
  full review texts read during research (Amanda Payne, Scarlet Spikes,
  Jamie Ofczarzak, plus 2 more not individually quoted) stayed internal
  to this README, per `client-demo-site` §1/§3.
- **About-section copy** ("a small business built on being easy to work
  with," "clear communication throughout a job"): original marketing
  language informed by the real review vocabulary above (paraphrased,
  never quoted verbatim) — not a direct quote, not an invented
  testimonial or statistic.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (cedar/
  gold, charcoal, off-white) and fonts (Poppins, Source Sans 3). **Zero
  Lewis Digital gold (`#C9A227` family), zero Lewis charcoal `#16130e`,
  zero Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`
  (note: this demo's `--gold` token uses a distinctly different, cooler
  cedar-brown hex value from Lewis Digital's reserved gold — confirmed by
  inspection).
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream
  brand (it's our sales tool) — per `client-demo-site` §4.
- Structurally and visually distinct from `demos/castillos-fence/` (its
  direct sibling in this batch) — see comparison table above.

## Notes for outreach

- Lead with the verified women-owned attribute and the real "honest,
  reliable, and easy to work with" review sentiment (kept internal here,
  but safe to reference verbally in a call) — strong trust signals for a
  business that's only a couple of years old.
- Clarify the Matt/Kayla ownership question directly with the business
  before publishing any owner-name copy live.
- If the owner can confirm a fixed service list or share real job
  photos, swap them into `index.html`/`assets/` and re-publish.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
