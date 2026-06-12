# Changelog

## 2026-06-12 - Remove homepage founder section

### Files Changed

- Updated `index.html`, `styles.css`, `scripts/check-static-site.js`, and project tracking files

### Summary

- Removed the founder-led delivery block and oversized company-logo panel from the homepage.
- Removed the now-unused founder grid and logo-panel CSS.
- Bumped the homepage stylesheet cache key.
- Deployed the updated homepage and stylesheet to Hostinger.

### Validation

- `npm run check`
- Confirmed the homepage no longer contains the founder section or related CSS selectors.
- Live HTTP checks confirmed the founder section is absent and the new stylesheet cache key is active.

### Next Task

Continue the Search Console and GA4 account setup work.

## 2026-06-12 - Improve sample systems cards and popouts

### Files Changed

- Updated `index.html`, `styles.css`, `scripts/check-static-site.js`, and project tracking files

### Summary

- Replaced tall stretched sample screenshots with compact 16:9 preview cards.
- Shortened and aligned the card content while keeping each example clearly labelled as a demonstration concept.
- Restored accessible full-size popouts for the clinic, solicitor and trade-business samples.
- Deployed the updated homepage and stylesheet to Hostinger.

### Validation

- `npm run check`
- Desktop and mobile browser checks confirmed equal image ratios, no horizontal overflow, correct sample selection, close-button behaviour and Escape-key closing.
- Live HTTP checks confirmed the new stylesheet cache key and all three preview triggers and panels are deployed.

### Next Task

Continue the Search Console and GA4 account setup work.

## 2026-06-12 - Rebuild site for client acquisition

### Files Changed

- Rebuilt `index.html`, shared styles and client-side lead/tracking behaviour
- Added `website-content-services.html`, `ads-setup-services.html`, `free-strategy-call.html`, `CLIENT_ACQUISITION_PLAN.md`, and strategy-call chatbot knowledge
- Updated service, blog, legal, location, chatbot, sitemap, robots, redirect, validation and deployment files
- Replaced three large portfolio PNG files with optimized WebP assets

### Summary

- Repositioned AITech Innovations as a founder-led digital growth systems agency for UK service businesses.
- Organized the offer into Website & Content, Ads & Lead Generation, and Automation & Chatbots with clear starting prices and one primary Free Strategy Call CTA.
- Added contextual WhatsApp messages, a complete strategy-call form workflow, honest sample systems, paid pilot positioning, and the 30-day outreach playbook.
- Standardized the canonical hostname on `https://www.aitechinnovations.com` and expanded discovery files to 20 public URLs.
- Deployed the rebuilt static package to Hostinger.

### Validation

- `npm run generate:seo`
- `npm run check` passed for 20 public routes
- JavaScript and PHP syntax checks passed
- All 20 pages plus sitemap and robots returned `200` locally
- Browser checks passed on desktop and mobile with no horizontal overflow and correct WhatsApp contexts
- Lighthouse: Performance 93, Accessibility 100, Best Practices 96, SEO 100, LCP 2.6s, CLS 0
- Live non-www redirects once to www; all 20 routes return `200` with matching self-canonicals
- Live sitemap and robots return `200`; WebP assets, chatbot responses and required analytics event names were verified

### Next Task

Submit the www sitemap in Google Search Console, then verify and mark the lead events in GA4.

## 2026-06-11 - Deploy SEO landing pages to Hostinger

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Created a clean Hostinger archive containing only production static files, assets, server rewrites, sitemap, robots, and the chatbot API.
- Deployed the SEO landing pages and clean URL structure to `aitechinnovations.com` through Hostinger.
- Kept the canonical site on the non-www hostname.

### Validation

- All 13 requested public routes return `200` on the live domain.
- Live `sitemap.xml` and `robots.txt` return `200`, and the sitemap contains 13 public URLs.
- `www.aitechinnovations.com` returns a `301` redirect to `https://aitechinnovations.com`.
- Live service metadata, self-canonical URLs, homepage internal links, cache-busted CSS/JavaScript, and required GA4 event names were confirmed.
- Live chatbot endpoint returns a scripted pricing response with status `200`.
- Desktop and mobile browser checks confirmed responsive rendering and no horizontal overflow.

### Next Task

Resubmit `https://aitechinnovations.com/sitemap.xml` in Google Search Console and request indexing for representative URLs.

## 2026-06-11 - Add crawlable SEO landing pages and clean routes

### Files Changed

- Added five automation service pages, `free-ai-audit.html`, `blog.html`, and three blog article HTML files
- Added `sitemap.xml`, `robots.txt`, `public/sitemap.xml`, and `public/robots.txt`
- Added `scripts/generate-seo-pages.js` and `scripts/dev-server.js`
- Updated `.htaccess`, `index.html`, legal/location pages, `styles.css`, `script.js`, validation, deployment docs, and tracking files

### Summary

- Added 13 crawlable public routes with unique titles, descriptions, H1s, self-canonicals, internal links, and audit CTAs.
- Added substantive, distinct problem, solution, benefits, use case, FAQ, and related-service content to each automation service page.
- Standardized the canonical hostname on `https://aitechinnovations.com` and added clean Hostinger rewrites without hash routing.
- Preserved current GA4 tracking and added compatibility events for `calendar_booking_click` and `chatbot_lead_submitted`.

### Validation

- `node --check script.js`
- `node --check scripts/generate-seo-pages.js`
- `node --check scripts/check-static-site.js`
- `npm run generate:seo`
- `npm run check`
- Local route check confirmed `200` for all 13 public routes, `sitemap.xml`, and `robots.txt`.
- Browser checks confirmed desktop metadata/sections, mobile article rendering, working mobile navigation, and no horizontal overflow.

### Next Task

Deploy the SEO files to Hostinger, verify the live clean routes, then resubmit the sitemap in Google Search Console.

## 2026-06-07 - Deploy GA4 lead tracking update to Hostinger

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Created a clean Hostinger `public_html` archive containing the updated static pages, `.htaccess`, `assets/`, and `api/`.
- Deployed the GA4 lead event tracking update to `aitechinnovations.com` through Hostinger.
- Kept the deployment static and Hostinger-ready.

### Validation

- Hostinger static deployment accepted.
- Live homepage returns the new `script.js?v=20260607-ga4-leads` cache key.
- Live `script.js` contains `generate_lead`, `form_submit`, `submit_form`, `contact_submit`, `lead_generated`, `whatsapp_click`, `book_appointment_click`, `phone_click`, `email_click`, and `chatbot_lead`.
- Live About, privacy, terms, Maidstone, Kent, and London pages return `200`.
- Live chatbot endpoint returns a scripted pricing response for a POST request.

### Next Task

Verify the deployed lead events in GA4 DebugView, then mark the required events as Key Events.

## 2026-06-07 - Add GA4 quote form event aliases

### Files Changed

- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added `form_submit`, `submit_form`, `contact_submit`, and `lead_generated` as success-only aliases for the existing quote form `generate_lead` event.
- Kept all form lead events on the successful submission path, not the submit-button click path.
- Reused the existing safe lead parameters: `form_name`, `lead_type`, `page_path`, `page_title`, and debug mode where applicable.

### Validation

- `node --check script.js`
- `npm run check`
- Local Chrome automation with mocked successful form delivery confirmed `generate_lead`, `form_submit`, `submit_form`, `contact_submit`, and `lead_generated` fire together.
- Local Chrome automation with a honeypot submission confirmed the form lead events do not fire for spam-filtered submissions.

### Next Task

Deploy the GA4 lead event tracking update to Hostinger, then verify all lead and form alias events in GA4 DebugView.

## 2026-06-07 - Update GA4 lead event tracking

### Files Changed

- Updated `script.js`
- Updated `index.html`
- Updated `about.html`
- Updated `privacy.html`
- Updated `terms.html`
- Updated `website-design-maidstone.html`
- Updated `website-design-kent.html`
- Updated `website-design-london.html`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Replaced the old analytics wrapper with a reusable `trackEvent()` helper that safely exits when `gtag` is unavailable, adds page context, and supports debug console output on localhost or `?debug_analytics=1`.
- Added lead-focused GA4 helpers for WhatsApp clicks, calendar booking clicks, phone clicks, email clicks, quote form leads, chatbot opens, and chatbot leads.
- Replaced legacy event names including `calendar_booking_click`, `chatbot_open`, `chatbot_lead_submitted`, and reserved `form_submit` with the approved event contract.
- Kept contact click parameters PII-safe by avoiding raw email addresses, phone numbers, and WhatsApp number URLs in GA4 payloads.
- Normalized CTA location values and bumped the script cache key to `20260607-ga4-leads`.

### Validation

- `npm run check`
- Local Chrome automation with `?debug_analytics=1` confirmed `whatsapp_click`, `book_appointment_click`, `email_click`, and `chatbot_opened` debug output.
- Local GA stub test confirmed successful quote form submission fires `generate_lead` only after the mocked success path.
- Local GA stub test confirmed completed chatbot lead capture fires `chatbot_lead`.
- Local no-gtag fallback check confirmed click tracking does not throw browser errors when `window.gtag` is unavailable.

### Next Task

Deploy the GA4 lead event tracking update to Hostinger, then verify the events in GA4 DebugView and mark the required events as Key Events.

## 2026-06-06 - Deploy homepage conversion update to Hostinger

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Created a clean Hostinger `public_html` archive from the committed static site files.
- Deployed the homepage conversion flow and positioning update to `aitechinnovations.com`.
- Kept the deployment static and Hostinger-ready.

### Validation

- Hostinger static deployment accepted.
- Live homepage returns `200` and includes `Websites and AI automation that bring in better enquiries`, `Free AI Automation Audit`, the Google Calendar booking URL, JSON-LD schema, and `styles.css?v=20260606-conversion` / `script.js?v=20260606-conversion`.
- Live `script.js` contains `calendar_booking_click`, `pricing_cta_click`, `form_submit`, `chatbot_open`, and `whatsapp_click`.
- Live About, privacy, terms, Maidstone, Kent, and London pages return `200`.
- Live chatbot endpoint returns a scripted pricing response for a POST request.

### Next Task

Verify the new GA4 conversion events in DebugView on the live domain.

## 2026-06-06 - Update homepage conversion flow and positioning

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated static HTML asset cache keys in `about.html`, `privacy.html`, `terms.html`, `website-design-maidstone.html`, `website-design-kent.html`, and `website-design-london.html`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Repositioned the homepage around websites, booking systems, and AI automations for professional service businesses.
- Added the hero `Book Free AI Audit` CTA and moved the AI audit offer into its own standalone section before the quote form.
- Kept the quote form focused on website project enquiries.
- Updated chatbot intro text and quick actions for website quote, AI audit booking, pricing, and WhatsApp.
- Added homepage JSON-LD for Organization, LocalBusiness, Service, and FAQPage.
- Added requested GA4 event names for booking, form submit, chatbot open, pricing CTA, and WhatsApp interactions while preserving existing conversion events.

### Validation

- `node scripts/check-static-site.js`
- Local desktop and mobile browser checks confirmed the hero CTA order, standalone AI audit section, quote form separation, chatbot intro/actions, booking/WhatsApp URLs, and no horizontal overflow.
- Local GA stub check confirmed `chatbot_open`, `calendar_booking_click`, `pricing_cta_click`, `whatsapp_click`, `form_submit`, and existing `generate_lead` events fire safely.

### Next Task

Deploy and verify the homepage conversion flow, AI audit booking CTA, chatbot quick actions, and GA4 events on the live domain.

## 2026-06-04 - Deploy no-AI chatbot fallback to Hostinger

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Created a clean Hostinger `public_html` archive containing the updated static files, `.htaccess`, assets, `api/chatbot.php`, and `api/knowledge/`.
- Deployed the archive to `aitechinnovations.com` through Hostinger.
- Confirmed the no-AI scripted chatbot works live without an OpenAI API key.

### Validation

- Hostinger static deployment accepted.
- Live homepage returns `200` and includes `styles.css?v=20260604-emailmove`, `script.js?v=20260604-emailmove`, and chatbot markup.
- Live `https://www.aitechinnovations.com/api/chatbot.php` returns a scripted pricing answer for a POST request.
- Live browser test confirmed the chatbot opens, sends “How much does a website cost?”, receives the scripted pricing response, fires chatbot open/message events, and has no horizontal overflow.
- Live About, privacy, terms, Maidstone, Kent, and London pages return `200`.

### Next Task

Verify chatbot lead capture, WhatsApp, booking, and GA4 chatbot events on the live domain.

## 2026-06-04 - Add no-AI chatbot fallback mode

### Files Changed

- Updated `api/chatbot.php`
- Updated `scripts/check-static-site.js`
- Updated `README.md`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added scripted chatbot answers for common services, pricing, AI audit, booking, WhatsApp, email, Hostinger, WordPress, timeline, automation, and chatbot questions.
- Made OpenAI optional: the backend now tries scripted answers first, then uses OpenAI only for unmatched questions when `OPENAI_API_KEY` is configured.
- Kept regulated-advice guardrails ahead of scripted and AI responses.
- Updated docs to explain that an API key is optional and only needed for unmatched AI-generated answers.

### Validation

- `npm run check`
- `php -l api/chatbot.php`
- Local no-key API tests for services, website pricing, free AI audit, WhatsApp, tax-advice refusal, and unknown-question fallback.
- Local mobile browser test confirmed scripted answer rendering, AI audit lead capture, WhatsApp/booking events, and no horizontal overflow.

### Next Task

Deploy the chatbot endpoint, knowledge base, and updated static files to Hostinger, then verify scripted answers and GA4 events on the live domain.

## 2026-06-04 - Restore floating Ask us and move footer email

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated `about.html`
- Updated `privacy.html`
- Updated `terms.html`
- Updated `website-design-maidstone.html`
- Updated `website-design-kent.html`
- Updated `website-design-london.html`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Removed the Company-column footer Ask us button.
- Restored the floating Ask us chatbot launcher behavior.
- Moved the footer support email under the copyright line and left-aligned it so the floating launcher no longer covers it.
- Bumped CSS and JS cache keys to `20260604-emailmove`.

### Validation

- `npm run check`
- `php -l api/chatbot.php`
- Local 615px browser check confirmed the floating Ask us launcher is back, the support email is left-aligned under the copyright line, the footer button hook is gone, and there is no overlap or horizontal overflow.

### Next Task

Configure `OPENAI_API_KEY` in Hostinger and deploy the chatbot endpoint, knowledge base, and updated static files.

## 2026-06-04 - Add footer Ask us button

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated `about.html`
- Updated `privacy.html`
- Updated `terms.html`
- Updated `website-design-maidstone.html`
- Updated `website-design-kent.html`
- Updated `website-design-london.html`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added an `Ask us` button to the right side of the Company footer heading.
- Wired the footer button to open the existing chatbot panel.
- Bumped CSS and JS cache keys to `20260604-footerask`.

### Validation

- `npm run check`
- `php -l api/chatbot.php`
- Local 727px browser check confirmed the footer button sits to the right of the Company heading, has no horizontal overflow, loads fresh CSS/JS, and opens the chatbot.

### Next Task

Configure `OPENAI_API_KEY` in Hostinger and deploy the chatbot endpoint, knowledge base, and updated static files.

## 2026-06-04 - Fix chatbot footer overlap

### Files Changed

- Updated `index.html`
- Updated `about.html`
- Updated `privacy.html`
- Updated `terms.html`
- Updated `website-design-maidstone.html`
- Updated `website-design-kent.html`
- Updated `website-design-london.html`
- Updated `styles.css`
- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Changed the mobile/tablet collapsed chatbot launcher to a compact circular AI button so it does not cover the footer email.
- Added footer visibility handling so the collapsed chatbot hides while the footer is visible.
- Bumped shared CSS and JS cache keys to `20260604-chatfooter` so browsers load the updated layout and behavior.

### Validation

- `npm run check`
- `php -l api/chatbot.php`
- Local 615px browser check confirmed the updated CSS/JS cache keys load, the launcher is 54px wide, the `Ask us` label is hidden, footer visibility class is applied, and there is no email overlap or horizontal overflow.

### Next Task

Configure `OPENAI_API_KEY` in Hostinger and deploy the chatbot endpoint, knowledge base, and updated static files.

## 2026-06-04 - Fix chatbot font styling

### Files Changed

- Updated `styles.css`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added an explicit Plus Jakarta Sans font rule across the chatbot widget so message bubbles, inputs, buttons, links, and header text match the website font.
- Bumped the shared stylesheet cache key to `styles.css?v=20260604-chatfont` across all HTML pages so browsers load the updated CSS.

### Validation

- `npm run check`
- `php -l api/chatbot.php`
- Local browser computed-style check confirmed `.chatbot-message` uses `Plus Jakarta Sans` and the homepage loads `styles.css?v=20260604-chatfont`.

### Next Task

Configure `OPENAI_API_KEY` in Hostinger and deploy the chatbot endpoint, knowledge base, and updated static files.

## 2026-06-04 - Add AI support chatbot

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `script.js`
- Updated `privacy.html`
- Updated `README.md`
- Updated `scripts/check-static-site.js`
- Added `api/chatbot.php`
- Added `api/knowledge/services.json`
- Added `api/knowledge/pricing.json`
- Added `api/knowledge/ai-audit.json`
- Added `api/knowledge/contact.json`
- Added `api/knowledge/faqs.json`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added a bottom-right AITech Assistant chatbot with desktop/mobile responsive UI, accessible controls, and smooth open/close behavior.
- Added a Hostinger PHP chatbot API endpoint that reads `OPENAI_API_KEY` server-side, loads a local JSON knowledge base, calls OpenAI `gpt-5.4-mini`, and refuses regulated-advice topics.
- Added AI audit lead capture after chatbot interaction, reusing the existing Google Sheets/FormSubmit/WhatsApp/email lead handoff pattern.
- Added GA4 chatbot events for open, message sent, lead started, lead submitted, WhatsApp click, and booking click.
- Updated privacy and README documentation for chatbot data handling and deployment setup.

### Validation

- `npm run check`
- `php -l api/chatbot.php`
- Local desktop browser verification of chatbot open/close, message send fallback, GA4 events, and no horizontal overflow.
- Local mobile browser verification at 390px width for panel fit, visible input, and no horizontal overflow.
- Local lead capture verification for AI audit flow and chatbot GA4 events.
- Direct API checks for regulated-advice refusal and no-key server response.

### Next Task

Configure `OPENAI_API_KEY` in Hostinger and deploy the chatbot endpoint, knowledge base, and updated static files.

## 2026-06-04 - Deploy booking audit CTA order

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Deployed the homepage quote section order update to `aitechinnovations.com`.
- Verified the live homepage serves the booking audit card before the support email and WhatsApp enquiry CTAs.

### Validation

- Hostinger static deployment accepted.
- Live homepage markup contains `.booking-cta` before `.contact-options`.
- Live homepage, About, privacy, terms, Maidstone, Kent, and London pages return `200`.

### Next Task

Verify GA4 custom events in DebugView on the live domain.

## 2026-06-04 - Move booking audit CTA above contact CTAs

### Files Changed

- Updated `index.html`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Reordered the homepage quote section so the `Book Your Free AI Automation Audit` card appears above the support email and WhatsApp enquiry CTAs.
- Preserved the existing booking, email, WhatsApp, analytics, and form behavior.

### Validation

- `npm run check`
- Local browser verification of the quote section order and horizontal overflow.

### Next Task

Deploy the booking audit CTA order update to Hostinger if it should go live immediately.

## 2026-06-04 - Deploy footer company number line break

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Deployed the footer company number line-break update to `aitechinnovations.com`.
- Verified the live homepage serves `Registered in England & Wales.`, `Company No: 15076403.`, and `VAT No: GB498138444.` on separate markup lines.

### Validation

- Hostinger static deployment accepted.
- Live homepage, Maidstone, Kent, and London pages return `200`.
- Live homepage and Kent landing page contain the updated footer registration line breaks.

### Next Task

Verify GA4 custom events in DebugView on the live domain.

## 2026-06-04 - Footer company number line break

### Files Changed

- Updated `index.html`
- Updated `website-design-maidstone.html`
- Updated `website-design-kent.html`
- Updated `website-design-london.html`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Moved `Company No: 15076403.` onto its own footer line.
- Kept `VAT No: GB498138444.` on the next line and preserved all footer copy, links, and styling.

### Validation

- `npm run check`
- Local browser verification of the homepage footer registration text and horizontal overflow.

### Next Task

Deploy the footer line-break update to Hostinger if it should go live immediately.

## 2026-06-04 - Deploy Google Calendar booking CTA

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Deployed the homepage Google Calendar booking CTA update to `aitechinnovations.com`.
- Redeployed with a cache-busted `script.js?v=20260604-booking` reference so the live booking link is not hidden by the older cached script.

### Validation

- Hostinger static deployment accepted.
- Live homepage contains `Book Your Free AI Automation Audit`, `Book Free AI Audit`, the Google Calendar booking URL, and the existing WhatsApp enquiry CTA.
- Live `script.js?v=20260604-booking` contains the configured `bookingUrl` and `rel="noopener noreferrer"` hydration.
- Live About, privacy, terms, Maidstone, Kent, and London pages return `200`.

### Next Task

Verify GA4 custom events in DebugView on the live domain.

## 2026-06-04 - Add Google Calendar booking CTA

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added a `Book Your Free AI Automation Audit` CTA block directly under the homepage quote section contact/WhatsApp options.
- Added the Google Calendar booking link as the central `CONTACT_SETTINGS.bookingUrl`.
- Kept the existing WhatsApp enquiry CTA, quote form, email link, and mobile sticky contact bar unchanged.

### Validation

- `npm run check`
- Local browser verification of `index.html#quote` for the WhatsApp CTA, booking CTA, Google Calendar URL, and mobile/desktop layout.

### Next Task

Deploy the booking CTA update to Hostinger and verify the live homepage.

## 2026-06-04 - Deploy location landing pages

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Built a Hostinger static deployment archive from the committed location landing page update.
- Deployed the updated homepage, shared styles, three location landing pages, existing static pages, and assets to `aitechinnovations.com`.

### Validation

- Hostinger static deployment accepted.
- Live homepage serves the `Areas we serve` section, the three internal location links, and `styles.css?v=20260604-locations`.
- Live `website-design-maidstone.html`, `website-design-kent.html`, and `website-design-london.html` return `200` and contain their expected titles, canonical URLs, H1s, CTAs, stylesheet, and analytics script.
- Live `about.html`, `privacy.html`, and `terms.html` return `200`.

### Next Task

Verify GA4 custom events in DebugView on the live domain.

## 2026-06-04 - Add location landing pages

### Files Changed

- Added `website-design-maidstone.html`
- Added `website-design-kent.html`
- Added `website-design-london.html`
- Updated `index.html`
- Updated `styles.css`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Created unique Maidstone, Kent, and London website design landing pages with location-specific hero copy, benefits, audience sections, process steps, pricing cards, FAQs, and final CTAs.
- Added unique page titles, meta descriptions, canonical URLs, and Open Graph title/description metadata for each new page.
- Added a homepage `Areas We Serve` section linking to all three landing pages.
- Added footer text for Maidstone, Kent, London, and UK service coverage.
- No sitemap was updated because the project does not currently include a `sitemap.xml`.

### Validation

- `npm run check`
- Local browser checks confirmed the three new pages and homepage load at 375px, 390px, 430px, 768px, 1024px, and 1440px without horizontal overflow.
- Browser checks confirmed each new page has one H1, the expected title/canonical/OG metadata, working quote links, hydrated WhatsApp links, and the updated stylesheet cache tag.

### Next Task

Deploy the location landing pages to Hostinger and verify the live URLs.

## 2026-06-04 - Deploy GA4 conversion tracking

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Created a Hostinger static deployment archive from the current committed site files.
- Deployed the GA4 conversion tracking update to `aitechinnovations.com`.

### Validation

- Hostinger static deployment accepted.
- Live homepage serves `script.js?v=20260604-analytics`.
- Live `script.js` contains `trackAnalyticsEvent`, `generate_lead`, `whatsapp_click`, `email_click`, `quote_cta_click`, and `portfolio_preview_opened`.
- Live privacy and terms pages return `200`.

### Next Task

Verify GA4 custom events in DebugView on the live domain.

## 2026-06-04 - Add GA4 conversion tracking

### Files Changed

- Updated `index.html`
- Updated `script.js`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added reusable GA4 event helpers with local and query-string DebugView support.
- Added explicit analytics location attributes for hero, pricing, contact, footer, mobile, and sticky contact actions.
- Tracked quote CTA clicks, WhatsApp clicks, email clicks, portfolio preview opens, and successful quote form submissions.
- Kept the existing GA4 tag, Clarity snippet, form delivery, links, and static Hostinger setup unchanged.

### Validation

- `npm run check`
- Local automated browser test with GA stub and blocked external requests confirmed: `quote_cta_click` 7, `whatsapp_click` 3, `email_click` 1, `portfolio_preview_opened` 3, and `generate_lead` 1.
- Form test used a stubbed `fetch`, so no real external lead was submitted.

### Next Task

Verify GA4 custom events in DebugView on the live domain after the next Hostinger upload.

## 2026-06-03 - Fix example work popout clicks

### Files Changed

- Updated `index.html`
- Updated `script.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Changed example work popout handling to delegated card click detection so clicks on the image, title, text, or card open the preview.
- Bumped the homepage script query string so the live site loads the corrected JavaScript.
- Deployed the fix to Hostinger.

### Validation

- `npm run check`
- Local browser check confirmed the clinic, solicitor, and roofing cards each open the correct preview modal.
- Hostinger static deployment accepted
- Live homepage references `script.js?v=20260603-popoutfix` and the live script contains delegated `[data-preview-trigger]` click handling.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Fix example work card image clipping

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added explicit clipping to the example work card image placeholders.
- Forced preview images to render as block-level fitted images inside the placeholder.
- Bumped the homepage stylesheet query string so the live page loads the corrected CSS.
- Deployed the fix to Hostinger.

### Validation

- `npm run check`
- Local browser check confirmed the card images load, the `Demo concept` text is absent, image containers clip overflow, and card titles sit below the image placeholders.
- Hostinger static deployment accepted
- Live homepage references `styles.css?v=20260603-popoutfix` and the live stylesheet contains the corrected `.work-preview` clipping rules.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Deploy About page and footer update

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Built a clean Hostinger static deployment archive from the current site files.
- Deployed the new About page, homepage navigation/footer updates, footer VAT line break, and preview card images to `aitechinnovations.com`.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- Live homepage contains the About links and the footer VAT line break
- Live `about.html` returns `200` and contains the About page heading plus analytics snippets

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Add About Us page

### Files Changed

- Added `about.html`
- Updated `index.html`
- Updated `styles.css`
- Updated `scripts/check-static-site.js`
- Updated `README.md`
- Updated `AGENTS.md`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added a static About Us page matching the existing site style.
- Linked the page from the homepage navigation and footer.
- Updated static deployment documentation and checks to include `about.html`.

### Validation

- `npm run check`
- Local browser check confirmed `about.html` loads, has no horizontal scroll on mobile width, and the homepage About links point to `about.html`.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Fix example work card popouts

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Removed the `Demo concept` text from the example work cards.
- Kept the card images, card titles, descriptions, and existing popout modal behavior intact.
- Deployed the fix to Hostinger.

### Validation

- `npm run check`
- Local browser check confirmed all three card images load and the clinic, solicitor, and roofing cards each open the correct popout preview.
- Hostinger static deployment accepted
- Live homepage no longer contains the example work card `Demo concept` text and still includes the three `data-preview-trigger` card buttons.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Deploy example work images to Hostinger

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Built a clean Hostinger static deployment archive from the current static site files.
- Deployed the homepage, stylesheet, script, legal pages, `.htaccess`, and assets to `aitechinnovations.com`.
- Verified the live homepage serves the new example work card image references.

### Validation

- Hostinger static deployment accepted
- Live homepage contains `assets/preview-clinic-popout.png`, `assets/preview-solicitor-popout.png`, and `assets/preview-roofing-popout.png`
- Live image assets return `200`
- `https://aitechinnovations.com/` redirects to `https://www.aitechinnovations.com/`

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Add example work popout images

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Added `assets/preview-clinic-popout.png`
- Added `assets/preview-solicitor-popout.png`
- Added `assets/preview-roofing-popout.png`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Added captured popout preview images into the existing example work card image areas.
- Kept the section copy, cards, links, and modal preview behavior unchanged.

### Validation

- `npm run check`
- Local browser check confirmed all three preview images load and the clinic card still opens the existing popout modal.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Responsive UI audit and polish

### Files Changed

- Updated `index.html`
- Updated `styles.css`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Tightened shared section spacing, heading scale, card padding, button sizing, form spacing, footer alignment, and responsive grid gaps.
- Reduced the fixed mobile contact bar to the two core actions: free quote and WhatsApp.
- Improved mobile spacing for cards, hero actions, process rows, demo previews, and modal content while preserving the existing visual style and copy.

### Validation

- `npm run check`
- Local browser validation at 375px, 390px, 430px, 768px, 1024px, and 1440px confirmed no horizontal scrolling.
- Verified mobile navigation opens, the clinic demo preview modal opens and closes, quote form fields remain aligned, and privacy/terms pages still fit on mobile.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Fix WhatsApp enquiry links

### Files Changed

- Updated `index.html`
- Updated `scripts/check-static-site.js`
- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Changed WhatsApp enquiry anchors from placeholder `#` links to the direct WhatsApp quote URL in the static HTML.
- Kept centralized JavaScript hydration in place while making the links work even if JavaScript loads late.
- Added a static check to prevent WhatsApp links from shipping with placeholder href values again.

### Validation

- `npm run check`
- Searched public files for placeholder WhatsApp links, WhatsApp `mailto:` misuse, and `tel:` links.
- Live browser verification confirmed the hero WhatsApp enquiry button points to the required WhatsApp URL.

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

## 2026-06-03 - Deploy professional service repositioning

### Files Changed

- Updated `PROJECT_STATUS.md`
- Updated `TASKS.md`
- Updated `CHANGELOG.md`

### Summary

- Created a clean Hostinger static deployment archive from the committed `codex/b2b-repositioning` branch.
- Deployed the homepage, stylesheet, script, legal pages, assets, and `.htaccess` to `aitechinnovations.com`.
- Verified the live homepage serves the new professional service positioning and demo examples.

### Validation

- `npm run check`
- Hostinger static deployment accepted
- Live homepage contains the new B2B hero copy and clinic, solicitor, and roofing demo titles
- Live browser check confirmed the new dropdown options, WhatsApp URL, modal opening, scroll lock, and ESC close

### Next Task

Activate FormSubmit from the email sent to `support@aitechinnovations.com`, then retest the fallback delivery path.

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
