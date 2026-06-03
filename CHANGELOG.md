# Changelog

## 2026-06-03 - Reposition for professional service clients

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Repositioned homepage copy for dentists, private clinics, solicitors, accountants, builders, roofing companies, estate agents, and care providers.
- Replaced old demo examples with clickable Private Clinic, Solicitor, and Roofing Company website concepts.
- Added accessible in-page modal previews with distinct clinic, legal, and roofing visual treatments.
- Updated the quote form business type dropdown for the new target industries.
- Preserved centralized WhatsApp Click-to-Chat behavior and kept public phone-number text out of the page.

### Validation

- `npm run check`
- Local browser verification of desktop and mobile homepage layout, demo preview open/close behavior, ESC close, outside-click close, focus return, scroll lock, dropdown options, and WhatsApp CTA URLs.
- Searched public files for public phone-number display, `tel:` links, old demo niche copy, and WhatsApp `mailto:` misuse.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Add WhatsApp Click-to-Chat links

### Files Changed

- Updated `index.html`
- Updated `script.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added the final WhatsApp Click-to-Chat number to centralized contact settings.
- Updated all WhatsApp CTAs to open the quote enquiry link in a new tab with the required pre-filled message.
- Replaced public call CTAs with WhatsApp/free quote CTAs and kept the phone number out of visible page text.
- Deployed the updated static site package to Hostinger.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- Searched public files for WhatsApp `mailto:` fallbacks, public phone-number text, `tel:` links, and remaining call CTA labels.
- Local browser verification of hero, contact section, and mobile contact bar WhatsApp links.
- Live homepage serves the updated WhatsApp CTAs with the required URL, `target`, and `rel` values.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Install Microsoft Clarity

### Files Changed

- Updated `index.html`
- Updated `privacy.html`
- Updated `terms.html`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added the Microsoft Clarity tracking snippet for project ID `x1bt97hjsh`.
- Installed the snippet in the `<head>` of the homepage, privacy page, and terms page.
- Deployed the updated static site package to Hostinger.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- Live homepage, privacy page, and terms page return the Clarity snippet
- `https://www.clarity.ms/tag/x1bt97hjsh` returns `200`

### Next Task

Verify live domain, SSL, favicon, and key page routing after upload.

## 2026-06-03 - Verify Google tag firing

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Tested the live Google tag script directly and confirmed Google returns the configured tag JavaScript for `G-LTL4JXMYP2`.
- Loaded the live homepage in Chromium and inspected browser network requests.
- Confirmed GA4 `page_view` collection requests are sent for `tid=G-LTL4JXMYP2`.

### Validation

- Google Tag Manager script returned `200`
- Live homepage returned the Google tag snippet
- Browser network showed `region1.google-analytics.com/g/collect` `page_view` requests returning `204`

### Next Task

Verify live domain, SSL, favicon, and key page routing after upload.

## 2026-06-03 - Deploy Google tag to Hostinger

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Built a clean static deployment archive containing only the Hostinger-ready site files.
- Uploaded the static package to Hostinger for `aitechinnovations.com`.
- Verified the live homepage, privacy page, and terms page serve Google tag `G-LTL4JXMYP2`.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- `https://www.aitechinnovations.com/` returns the Google tag and current static homepage marker
- `https://www.aitechinnovations.com/privacy.html` returns the Google tag
- `https://www.aitechinnovations.com/terms.html` returns the Google tag

### Next Task

Verify live domain, SSL, favicon, and key page routing after upload.

## 2026-06-03 - Install Google tag

### Files Changed

- Updated `index.html`
- Updated `privacy.html`
- Updated `terms.html`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added the Google tag snippet for measurement ID `G-LTL4JXMYP2`.
- Installed the tag in the `<head>` of the homepage, privacy page, and terms page.
- Removed analytics confirmation from the pending task list.

### Validation

- `npm run check`
- Confirmed `G-LTL4JXMYP2` appears in all three public HTML pages.

### Next Task

Prepare the Hostinger `public_html` deployment package.

## 2026-05-30 - Create static lead form skill

### Files Changed

- Created `/Users/sherazkhalid/.codex/skills/static-lead-form/SKILL.md`
- Created `/Users/sherazkhalid/.codex/skills/static-lead-form/references/pattern.md`
- Created `/Users/sherazkhalid/.codex/skills/static-lead-form/scripts/check_static_lead_form.py`
- Created `/Users/sherazkhalid/.codex/skills/static-lead-form/agents/openai.yaml`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Turned the AITech Innovations static contact form pattern into a reusable Codex skill.
- Captured centralized contact settings, Google Sheets primary delivery, FormSubmit fallback activation, WhatsApp/email fallbacks, honeypot handling, and browser validation guidance.
- Added a small checker script that validates the static lead-form contract against plain HTML/CSS/JavaScript projects.

### Validation

- Skill validation passed with `quick_validate.py`
- Static lead-form checker passed against this project

### Next Task

Activate FormSubmit from the email, then retest fallback delivery.

## 2026-05-01 - Final contact and form delivery review

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Checked centralized contact settings and confirmed no final WhatsApp number, phone number, or booking URL is available yet.
- Completed the final live desktop/mobile browser review of the typography update.
- Tested the live quote form in-browser and confirmed the primary Google Sheets delivery path submits successfully.
- Checked FormSubmit directly from the live site origin and confirmed it still requires email activation.

### Validation

- `npm run check`
- Live homepage and deployed `script.js` verified on `https://www.aitechinnovations.com/`
- Live browser review at 1280px desktop and 390px mobile
- Live quote form showed the success state after a Google Sheets submission
- FormSubmit returned an activation-required response and sent an activation email to `support@aitechinnovations.com`

### Next Task

Activate FormSubmit from the email, then retest fallback delivery.

## 2026-05-01 - Tighten site typography spacing

### Files Changed

- Updated `styles.css`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Tightened line-height and spacing across the site so large paragraphs, cards, pricing lists, FAQ text, footer copy, and legal text read as cleaner blocks.
- Reduced overly loose hero paragraph spacing while keeping the layout accessible and mobile-friendly.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- Live stylesheet returns the tightened typography rules
- Live homepage still returns the new static site markers

### Next Task

Complete a final live desktop/mobile browser review of the typography update.

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
