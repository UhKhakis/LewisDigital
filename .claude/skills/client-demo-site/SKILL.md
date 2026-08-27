---
name: client-demo-site
description: Build a one-page client demo website for a prospective Lewis Digital client — bespoke to the client's own brand, verified facts + honest placeholders, never a reskinned template. Use before writing any file under demos/<slug>/.
---

# Client demo site

The proven pattern (see `demos/neffs-majestic-hair-studio/` as the reference
example). Skipping any of these steps is how a demo turns into a cookie-cutter
reskin, which is the single most-flagged failure mode for this role.

## 1. Extract the client's real brand — don't invent one

Find the client's actual public presence (Facebook/Instagram page, Google
Maps listing, any signage/photos referenced in `business/leads/candidates.md`
or `business/leads/leads.csv`). Pull real colors from real photos (their
profile photo, cover photo) and note the extraction as evidence, e.g.:

> Dominant-color read of the Facebook profile photo: ~57% near-white
> `#f8f8f8` background, ~4-5% muted lavender `#a098b8` (blouse/backdrop).

Pick typography and layout mood to match the *vibe* of what you found (a
glam salon vs. a gritty auto shop should never share a type pairing or
section order). If the client genuinely has no derivable brand signal, pick
a distinct palette and say plainly in the README that it's derived, not
sourced.

**Never use Lewis Digital's own gold/charcoal/cream palette on a client
page.** That combination is reserved for `pitch-sheet.html` (our sales tool)
and the agency's own site.

## 2. Structural distinctness, not just recoloring

Every demo must differ from every other demo you've built in: hero style,
section architecture *and order*, navigation treatment, typography pairing,
texture/motifs, and interactions. Two demos may share a color temperature —
never a layout. Before finishing, mentally diff your section order and hero
treatment against the other folders in `demos/` and change something
structural if they're converging.

## 3. Verified facts vs. honest placeholders — keep them visually separable

From the leads file, only these are facts: business name, category, town,
phone, and anything the business's own public listing/page states (rating,
attributes, hours if published). Everything else is a placeholder, marked as
such on the page and logged in the README:

| Field | If unverified, show |
|---|---|
| Hours | "Call or message for hours" (state any single verified day/time separately, with a date) |
| Reviews | The real numeric rating only if the listing shows one; review text/cards = explicit "reviews will appear here once connected," never invented quotes |
| Services | Generic examples for the niche, labeled "confirm by phone" |
| Hero/portrait images | AI-generated, noted as illustrative in the README |
| ZIP / address details | Omit rather than guess |

Write a "What is REAL" / "What is PLACEHOLDER" section in the demo's README
(copy the structure from `demos/neffs-majestic-hair-studio/README.md`) — this
is the audit trail if the owner or client questions a claim later.

## 4. Deliverable shape

```
demos/<slug>/
  index.html       one-page site: hero, services, about/hours, reviews, contact, footer
  styles.css       client-brand theme only
  assets/          AI-generated or real client images
  README.md        brand sources + real-vs-placeholder log (see §3)
  pitch-sheet.html Lewis-Digital-branded printable sales sheet (kept in OUR brand — do not touch its palette)
```

Footer keeps a single small credit line: "Site by Lewis Digital — a DBA of
Lewis Tech Services LLC." No other Lewis Digital branding belongs on the
client page.

## 5. Before finishing

- Preview locally (`python3 -m http.server <port> --bind 127.0.0.1` from the
  demo folder — pick a port not already used by another running preview or
  the agency site on 3000) and check for overflow / broken assets.
- Confirm every fact traces to a source you can point to (leads.csv row,
  listing URL, screenshot) — if you can't point to a source, it's a
  placeholder, not a fact.
- **Do not build until the client has confirmed interest**, unless the Lead
  explicitly says this is an owner-authorized batch build.
- Read `.claude/skills/publish-demos-github-pages/SKILL.md` next for how to
  ship it.
