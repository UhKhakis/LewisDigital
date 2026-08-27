---
name: publish-demos-github-pages
description: Ship a finished client demo site to the repo (feature branch + PR, gallery index update). Use after a demo under demos/<slug>/ is built and verified locally, before ending the Builder's turn.
---

# Publish a demo (feature branch + PR)

This covers publishing a **demo** (pre-sale, `demos/<slug>/`). It is a
different pipeline from `business/live-kit/` — that kit is the *production*
site pushed to a client's own cPanel *after* they've paid, and is never
gated by demo-confirmation. Don't confuse the two.

## Steps

1. **Verify before publishing** — no unresolved `TODO`s left in copy, images
   return 200, no console errors, no layout overflow at common widths. This
   is the last checkpoint before the work is visible outside your own
   session.
2. **Branch.** Create a feature branch off the current default branch (per
   `business/WORKFLOW.md`) — never commit demo work directly to the default
   branch.
3. **Commit** the whole `demos/<slug>/` folder (`index.html`, `styles.css`,
   `assets/*`, `README.md`, `pitch-sheet.html`).
4. **Update the gallery index** (the repo root `index.html`/demo gallery
   listing, per `README.md`) so the new demo is discoverable — don't leave a
   demo folder that nothing links to.
5. **Open a PR** against the default branch. Leave the default branch
   checked out and clean when you finish — never leave uncommitted work on
   it.
6. **If you run low on budget mid-build**, stop at a clean committed point
   on the feature branch and say plainly what remains — never leave
   half-finished, uncommitted work.

## Definition of done

Distinct-from-others layout (checkable in the HTML structure, not just the
CSS), on-client-brand, verified facts only with placeholders marked, gallery
index updated, PR opened, default branch clean, render verified.
