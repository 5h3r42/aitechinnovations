# Project Status

Date: 2026-06-04

## Current Phase

Launch preparation for a static Hostinger-ready agency website.

## Completed Work

- Google Calendar booking CTA update was deployed to Hostinger and verified live on 2026-06-04.
- Google Calendar booking CTA for free AI automation audit calls was added under the homepage WhatsApp enquiry CTA on 2026-06-04.
- Maidstone, Kent, and London website design landing pages were deployed to Hostinger and verified live on 2026-06-04.
- Maidstone, Kent, and London website design landing pages were added on 2026-06-04 with unique SEO metadata, location-specific content, homepage internal links, and local FAQs.
- GA4 conversion tracking update was deployed to Hostinger and verified live on 2026-06-04.
- GA4 custom conversion tracking was added on 2026-06-04 for quote CTAs, WhatsApp clicks, email clicks, portfolio preview opens, and successful quote form submissions.
- Example work popout click handling was fixed on 2026-06-03 so each card/image opens the correct preview modal.
- Example work card image clipping was fixed on 2026-06-03 so card titles and descriptions sit below the screenshots.
- About page and footer VAT line-break update were deployed to Hostinger and verified live on 2026-06-03.
- Static About Us page was added on 2026-06-03 and linked from the homepage navigation and footer.
- Example work card labels were cleaned up on 2026-06-03, all three card-triggered popout previews were verified locally, and the fix was deployed to Hostinger.
- Example work popout preview images update was deployed to Hostinger and verified live on 2026-06-03.
- Popout preview images were added to the example work cards on 2026-06-03 without changing the card copy or preview behavior.
- Responsive UI audit and polish pass completed on 2026-06-03 across homepage alignment, spacing, typography, cards, CTAs, forms, footer, mobile navigation, and demo preview modal behavior.
- WhatsApp enquiry links were fixed on 2026-06-03 so the static HTML points directly to the WhatsApp quote URL before JavaScript hydration.
- Professional service client repositioning update was deployed to Hostinger and verified live on 2026-06-03.
- Homepage positioning was updated for higher-value professional service businesses including clinics, solicitors, accountants, trades, estate agents, and care providers.
- Demo work now shows clickable Private Clinic, Solicitor, and Roofing Company website concepts with unique in-page preview popups.
- Quote form business type options were updated for the new target industries.
- WhatsApp Click-to-Chat update was deployed to Hostinger and verified live on 2026-06-03.
- WhatsApp Click-to-Chat links now open the final business WhatsApp quote enquiry URL without displaying the phone number publicly.
- Site-wide text spacing has been tightened for hero copy, section intros, cards, pricing, FAQ, footer, and legal pages.
- Microsoft Clarity `x1bt97hjsh` has been installed, deployed to Hostinger, and verified live.
- Live browser network testing confirmed GA4 `page_view` collection requests fire for `G-LTL4JXMYP2`.
- Google tag `G-LTL4JXMYP2` was deployed to Hostinger and verified live on 2026-06-03.
- Google tag `G-LTL4JXMYP2` has been installed on the homepage, privacy page, and terms page.
- Reusable `static-lead-form` Codex skill was created from the site contact form pattern on 2026-05-30.
- Final live desktop/mobile browser review of the typography update was completed on 2026-05-01.
- Live quote form delivery was tested in-browser and confirmed to submit through the configured Google Sheets endpoint.
- Final contact settings were checked; no WhatsApp number, phone number, or booking URL was available to add.
- Rebuilt and redeployed the clean static site package to Hostinger on 2026-05-01.
- Plain homepage `/`, `/index.html`, CSS, and JavaScript now serve the new static web design agency site.
- Live Hostinger deployment was refreshed with the static site files.
- A temporary generic Hostinger Node deployment was used to serve the static files without bringing Next.js back into the repository.
- HTML caching headers were added to reduce the risk of stale homepage HTML after future deployments.
- Static migration from the previous Next.js structure has been committed into the project state.
- Static HTML/CSS/JavaScript site structure is in place.
- Homepage includes hero, services, pricing, demo work, process, proof, quote form, FAQ, and footer sections.
- Privacy and terms pages are present.
- Contact settings are centralized in `script.js`.
- Quote form supports FormSubmit email delivery with email fallback and WhatsApp fallback.
- Mobile navigation, sticky header state, reveal animations, and current-year footer hydration are implemented.
- Demo portfolio items are labelled as demo concepts.
- Static validation script exists at `scripts/check-static-site.js`.
- README documents local preview, static check, deployment files, and contact settings.

## In Progress

- FormSubmit fallback needs email activation before it can be relied on.
- Booking still needs a final business URL if that channel should be live.
- Portfolio examples are still demo concepts until real client screenshots are available.

## Known Issues

- `CONTACT_SETTINGS.bookingUrl` is currently blank, so the booking path remains hidden.
- FormSubmit returned an activation-required response on 2026-05-01 and sent an activation email to `support@aitechinnovations.com`.
- Hostinger still has historical Next.js deployments listed for the domain, but the live root URL now serves the static site.

## Next 5 Logical Tasks

1. Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.
2. Add the final booking URL if that channel should be live.
3. Verify live domain, SSL, favicon, and key page routing after upload.
4. Replace demo portfolio concepts with real client screenshots when available.
5. Verify GA4 custom events in DebugView on the live domain.
