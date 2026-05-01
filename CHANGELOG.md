# Changelog

## 2026-05-01 - Refresh Hostinger static deployment

### Files Changed

- Updated `.htaccess`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Redeployed the static site to Hostinger because the live domain was still serving the old Next.js design.
- Added no-cache headers for HTML files so future homepage HTML changes are less likely to remain stale.
- Verified `/index.html` and cache-busted homepage URLs serve the new static website.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- Live `/index.html` returns the new web design agency site

### Next Task

Confirm the plain homepage URL has fully refreshed across Hostinger CDN edge cache.

## 2026-04-30 - Commit static site migration

### Files Changed

- Added static site files: `index.html`, `styles.css`, `script.js`, `privacy.html`, `terms.html`, `.htaccess`, `assets/`, and `scripts/`
- Updated project metadata and documentation files
- Removed previous Next.js application files and configuration

### Summary

- Committed the project state as a static HTML/CSS/JavaScript website ready for Hostinger-style deployment.
- Preserved the small-business web design positioning, pricing sections, enquiry form, and static validation workflow.

### Validation

- `npm run check`

### Next Task

Add final contact settings and test the live enquiry flow.

## 2026-04-30 - Project audit + tracking system setup

### Files Created or Changed

- Created `PROJECT_STATUS.md`
- Created `TASKS.md`
- Created `CHANGELOG.md`
- Created `PROJECT_PLAN.md`
- Updated `AGENTS.md`

### Summary

- Added lightweight project tracking for the existing static AITech Innovations website.
- Inferred current progress from the static HTML/CSS/JavaScript files, package scripts, README, and validation script.
- Captured launch-prep status, immediate tasks, known issues, and the high-level project plan.

### Validation

- Documentation-only update.
- No application code modified.

### Next Task

Add final contact settings and test the live enquiry flow.
