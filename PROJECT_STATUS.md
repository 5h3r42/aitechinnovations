# Project Status

Date: 2026-04-30

## Current Phase

Launch preparation for a static Hostinger-ready agency website.

## Completed Work

- Live Hostinger deployment was refreshed with the static site files.
- HTML caching headers were added to reduce the risk of stale homepage HTML after future deployments.
- Static migration from the previous Next.js structure has been committed into the project state.
- Static HTML/CSS/JavaScript site structure is in place.
- Homepage includes hero, services, pricing, demo work, process, proof, quote form, FAQ, and footer sections.
- Privacy and terms pages are present.
- Contact settings are centralized in `script.js`.
- Quote form supports FormSubmit email delivery with email fallback and optional WhatsApp fallback.
- Mobile navigation, sticky header state, reveal animations, and current-year footer hydration are implemented.
- Demo portfolio items are labelled as demo concepts.
- Static validation script exists at `scripts/check-static-site.js`.
- README documents local preview, static check, deployment files, and contact settings.

## In Progress

- Contact channels need final business values before launch.
- Portfolio examples are still demo concepts until real client screenshots are available.

## Known Issues

- `CONTACT_SETTINGS.whatsappNumber`, `phoneNumber`, and `bookingUrl` are currently blank, so WhatsApp, call, and booking paths are limited or hidden.
- FormSubmit may require first-use email activation before live enquiries are delivered.
- Hostinger CDN may briefly serve the old homepage from edge cache after deployment; `/index.html` and cache-busted URLs already serve the new static site.

## Next 5 Logical Tasks

1. Add the final WhatsApp number, phone number, and booking URL if those channels should be live.
2. Confirm Hostinger CDN cache has fully refreshed for the plain homepage URL.
3. Confirm FormSubmit activation and test the quote form end to end.
4. Replace demo portfolio concepts with real client screenshots when available.
5. Prepare the Hostinger `public_html` upload package and verify live SSL/domain routing.
