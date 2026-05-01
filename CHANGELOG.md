# Changelog

## 2026-05-01 - Rebuild live static site

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Rebuilt the Hostinger static deployment archive from the current static site files.
- Redeployed the clean static package to `aitechinnovations.com`.
- Confirmed the live root homepage now serves the new web design agency site rather than the old Next.js design.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- `https://www.aitechinnovations.com/` returns the new homepage marker
- `https://www.aitechinnovations.com/index.html` returns the new homepage marker
- `https://www.aitechinnovations.com/styles.css` returns the current static stylesheet

### Next Task

Complete a live desktop/mobile browser review and test the quote form.

## 2026-05-01 - Refresh Hostinger static deployment

### Files Changed

- Updated `.htaccess`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Redeployed the static site to Hostinger because the live domain was still serving the old Next.js design.
- Added no-cache headers for HTML files so future homepage HTML changes are less likely to remain stale.
- Deployed a temporary generic Hostinger Node wrapper from an archive so the static files can be served without reintroducing Next.js or React to the repository.
- Verified `/index.html` and cache-busted homepage URLs serve the new static website.
- Confirmed the plain `/` URL can still return the old Next.js HTML from Hostinger CDN cache.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- Hostinger generic Node deployment completed
- Live `/index.html` returns the new web design agency site

### Next Task

Purge Hostinger CDN/cache and disable the old Next.js app route in hPanel.

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
