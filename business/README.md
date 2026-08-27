# Lewis Digital — Business Files (GitHub Backup)

This folder is the **GitHub mirror of Lewis Digital's operational business files**, kept in sync with the live working copies in `/home/team/shared/`. It exists so the business's documents and records survive in the repo even if the shared workspace is reset, and so they can be reused as a template for future businesses.

**Owner direction (2026-08-27):** save copies of all business files in the GitHub repo, now and moving forward.

## What's here

| Path | Contents |
|---|---|
| `agreements/` | Reusable client agreement package (Master Agreement, scope + fee schedule, usage README) |
| `ai-receptionist/DESIGN.md` | The AI Receptionist product design (Cloudflare Workers, channels, margin requirement) |
| `finance/FINANCIAL-WORKBOOK.md` | **Client-revenue source of truth** — ledger + monthly actuals vs. $5k MRR ramp |
| `leads/` | Lead database (`leads.csv`, `emails.csv`), outreach log, booking-platform findings, hunt reports |
| `live-kit/` | Production site kit for cPanel deployment (contact handler, sample HTML/CSS, deploy guide) |
| `outreach/` | Outreach + phone pitch kit, follow-up/template/playbook docs |
| `salons/` | Salon booking-platform research + recommendation |
| `WORKFLOW.md`, `TEAM-PLAYBOOK.md`, `EMPLOYEE-TEMPLATE.md`, `Payment-INVOICING-RUNBOOK.md` | Team operating + role template + invoicing docs |

Not mirrored (live outside git, so excluded deliberately): the published agency site engine under `site/` and the demo sites (those are built/published separately; `demos/` in the repo root is their source).

## Sync convention (moving forward)

Every time business files change in `/home/team/shared/`, mirror the changed files here and commit (feature branch + PR, per `WORKFLOW.md`). Keep this folder's structure matching `shared/` so it stays a faithful backup.

## ⚠️ Privacy / visibility note

This repo is currently **private**, which is required to safely store `leads.csv` (real business phone numbers), the Financial Workbook, and client-facing agreement/outreach material. **Do NOT make the repo public (or enable public Pages on it) without first reconsidering this folder** — exposing `business/` publicly would leak client data and internal pricing. If the owner wants public Pages for demos, separate the public demo content from this private business data first.
