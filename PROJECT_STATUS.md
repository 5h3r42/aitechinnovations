# Project Status

Date: 2026-04-30

## Current Phase

Launch preparation for a static Hostinger-ready agency website.

## Completed Work

- Live Hostinger deployment was refreshed with the static site files.
- A temporary generic Hostinger Node deployment was used to serve the static files without bringing Next.js back into the repository.
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
- Hostinger CDN is still serving the old Next.js homepage for the plain `/` URL on some edge nodes; `/index.html` and cache-busted URLs serve the new static site.
- Hostinger still has historical Next.js deployments for the domain. The old app/cache should be disabled or purged in hPanel.

## Next 5 Logical Tasks

1. Add the final WhatsApp number, phone number, and booking URL if those channels should be live.
2. Purge Hostinger CDN/cache and disable the old Next.js app route in hPanel.
3. Confirm FormSubmit activation and test the quote form end to end.
4. Replace demo portfolio concepts with real client screenshots when available.
5. Prepare the Hostinger `public_html` upload package and verify live SSL/domain routing.
