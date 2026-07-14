# Project Status

Date: 2026-07-14

## Current Phase

Production deployment and first-client acquisition for the rebuilt digital growth systems agency website.

## Completed Work

- Improved the website and AI receptionist pricing card presentation on 2026-07-14: the homepage and AI automation comparison now use a wider pricing-only container, more generous card padding and vertical rhythm, readable bullet line-height, condensed feature copy, restrained recommended-card emphasis and flexible spacers that align CTA bottoms on desktop. Tablet and 390px layouts now stack the cards cleanly without horizontal overflow. Prices, offer structures, CTA destinations, AI Platform CRM lead types, attribution and consent-gated PII-safe analytics are unchanged. TypeScript, lint, production build, static checks, focused pricing tests and browser QA passed; deployment remains pending.
- Refined the website and AI receptionist pricing for founding-client positioning on 2026-07-14: the existing-website offer is now a limited first-3–5-client £495 setup / £149 monthly 30-day pilot, with clearly bounded services, FAQs, user, location and support scope. Website + Managed AI now states its £1,995 tightly scoped entry point and typical £2,995–£3,995 project range; client-owned deployment now starts at £5,000 with a typical £6,000–£10,000+ range. Preserved package lead types, AI Platform CRM submissions, attribution, consent gating and PII-safe analytics. TypeScript, lint, build, static checks, focused tests and 390px no-overflow browser QA passed; deployment remains pending.
- Standardised website and AI receptionist pricing on 2026-07-14: added the £495 / £149 managed AI Receptionist Pilot, £1,995–£3,995 plus £199–£299/month Website + Managed AI Receptionist, and £4,000–£8,000+ client-owned deployment with optional £250–£750/month support. The accountant page now presents the managed pilot as the primary offer, with scoped ownership, fair-use, exclusions, and a secondary comparison path. Homepage, automation and directly conflicting website/location pricing now use the agreed model; package CTAs retain the AI Platform CRM path, attribution and consent-gated PII-safe analytics using distinct lead types. Local TypeScript, lint, build, static checks, focused tests and desktop/390px no-overflow QA passed. Deployment remains pending.
- Built the static `/ai-receptionist-for-accountants/` landing page on 2026-07-14. It positions the offer as a controlled AI receptionist for UK accountancy practices, keeps the separate accountant demo as a secondary destination, includes a 30-day custom-scoped pilot, and provides the requested safeguards around approved answers, human escalation and no personalised tax, legal, financial or regulated advice. The page reuses the shared AI-Platform enquiry path with `source: website`, page-specific lead metadata and existing UTM/GCLID/landing-page/referrer attribution. Local static-export, consent/no-PII, 1440px and 390px checks passed; production deployment and live CRM/GA4 verification remain next.
- Fixed the false strategy-form failure state after a successful AI Platform submission on 2026-07-11. The `201` API request is now isolated from analytics; the success state is rendered and the form reset before non-critical tracking runs in its own guarded block. A browser regression test forced tracking to throw, received the documented `201` payload, made one enquiry request, and still showed the required confirmation.
- Connected the homepage strategy-call form to the AI Platform enquiry API on 2026-07-11. It submits the complete enquiry once with `businessSlug: aitech-innovations`, handles only the documented `201` success response, preserves form data on failure, and no longer uses the old direct Supabase, Resend, Google Sheets, FormSubmit, WhatsApp, or mailto path. Added production/local API configuration, Hostinger CSP permission, and AI Platform CORS support. AI Platform and website builds passed; the browser form test returned `201`, showed the confirmation, and emitted no legacy delivery requests.
- Created the sales documentation foundation on 2026-07-11: added a structured `docs/` library for CRO audits, optimisation roadmaps and experiments; reusable sales, outreach and industry templates; CRM pipeline definitions and a header-only prospect tracker; and a client/prospect record template. No website, application, Supabase, or AI Platform files were changed.
- Top-aligned the homepage strategy-call section on 2026-07-10 by switching the desktop two-column grid and left content block to `start` alignment while preserving the existing widths and mobile stacking. Browser measurements showed a 1px eyebrow/form top difference at 1440px and no horizontal overflow at 1440px or 390px. Lint, tests, the 21-route checker, production build and `git diff --check` passed.
- Standardised website pricing on 2026-07-10 around three canonical packages: Website Starter (£499), Lead Generation Website (£995), and Industry Demo-Style Website (£1,495). The homepage now has one pricing section with three cards and one featured middle card; conflicting location, website-landing, ads, form-budget and chatbot pricing references were aligned or moved to custom-quote wording. Lint, tests, the 21-route checker, production build, desktop/390px browser checks and no-horizontal-overflow checks passed.
- Polished the homepage consultation form on 2026-07-10 with a balanced desktop grid, consistent field alignment, controlled form-card width, and cleaner mobile stacking. Replaced vague pricing cards with five detailed packages, starting prices, inclusion lists, relevant strategy-call CTAs, and scope/results caveats. Lint, tests, the 21-route checker, production build, desktop/mobile browser checks, CTA routing and no-horizontal-overflow checks passed.
- Implemented the Week 1 conversion foundation on 2026-07-10: rewrote the homepage around websites and lead systems, standardised primary CTAs to a free 20-minute strategy call, added reassurance and founder-led trust, reduced required form fields to four, made calendar booking primary, added the call agenda and ownership/support FAQs, and clarified live-demo positioning. Lint, tests, the 21-route checker, production build and desktop/390px browser checks passed with no horizontal overflow.
- Replaced the homepage generic sample systems with a “Sample systems” live-demo showcase: five responsive new-tab demo links, benefit badges, and a “Your business here” strategy-call CTA. Verified no old cards/modal remain, all demo domains and the strategy-call route return `200`, the static build passes, and desktop/390px browser checks show no horizontal overflow.
- Activated and retested the FormSubmit fallback on 2026-06-15. A clearly labelled fallback-only request from the live-site origin returned `HTTP 200` with `success: true`; it bypassed Supabase, Resend, Google Sheets, and all customer workflows. Direct inbox inspection remains unavailable because the connected Gmail app still requires reauthentication.
- Launched the separate outbound acquisition workspace on 2026-06-15: added admin-only `prospects` and immutable `prospect_activities` storage, CSV and manual entry/editing, duplicate-domain validation, filters, pagination, draft storage, archive/restore, activity logging, and responsive inbound/outbound tabs. Researched and imported 100 public-business prospects across Kent and London with 100 research activities, a broad seven-sector mix, public source/contact routes, three website findings, fit scoring, and draft-only email/contact-form copy. Added the approved-evidence case-study intake checklist, deployed only `out/` to Hostinger, and kept outbound records out of inbound lead counts and Resend.
- Launched the actionable inbound lead workflow on 2026-06-15: replaced the summary-first dashboard with UK-local Overdue, Due Today, and Upcoming queues; added editable next actions and contact/proposal cadence suggestions; added status/service/source/due/archive filters; created an immutable `lead_activities` audit timeline; added atomic activity, archive, and restore RPCs; and deployed the static Hostinger dashboard. Production checks covered anonymous/non-admin/admin permissions, protected columns, activity immutability, session restoration, activity logging, archive/restore, responsive desktop/390px layouts, noindex/sitemap exclusion, and final test-record archiving.
- Fixed and deployed admin password recovery on 2026-06-15: changed the Supabase Auth Site URL and redirect allow list from `http://localhost:3000` to the live `/admin/leads/` route, revoked the recovery session whose tokens were shared in chat, added a forgot-password action and `PASSWORD_RECOVERY` password form, and completed a controlled live reset/login test at 390px before restoring the existing password and revoking the temporary session.
- Launched the private lead dashboard at `https://www.aitechinnovations.com/admin/leads/` on 2026-06-15: applied the production RLS/column-privilege migration, preserved anonymous insert-only form access, disabled public Auth sign-up, created the confirmed `support@aitechinnovations.com` account with trusted `app_metadata.role = "admin"`, normalized the Supabase Auth base URL, and deployed the static route to Hostinger. Live desktop/mobile validation covered all four production leads, search, 50-row pagination with a cleaned-up temporary dataset, status and notes persistence/restoration, session restoration, sign-out, unauthorised handling, noindex metadata, sitemap exclusion, and protected-field rejection.
- Repaired and deployed the production Resend workflow on 2026-06-15 after confirming the morning submission never reached Supabase: cache-busted the immutable shared script, placed the quote handler on the Supabase-first path, added bounded browser and provider retries, and added deterministic idempotency keys. Controlled lead `55ab4e4f-32f7-440b-939b-c8f56eb338c5` returned `201` from Supabase, `200` from the Edge Function, two distinct Resend IDs, and `200` with `ok: true` from Google Sheets; a duplicate invocation returned the same IDs.
- Built and locally validated the private `/admin/leads/` dashboard on 2026-06-14: static-export-compatible Supabase Auth, trusted admin-role gating, newest-first 50-row pagination, database-backed search and summary counts, optimistic status updates with rollback, explicit notes saves, desktop/mobile lead detail views, noindex metadata, and scoped SaaS styling.
- Deployed the Resend-enabled static export to Hostinger on 2026-06-14 and completed a controlled production test using lead `745afcc6-1178-463d-a91b-375da9e1a3c1`: Supabase returned `201`, the Edge Function returned `200`, Resend accepted separate admin and customer emails, and Google Sheets returned `200` with `ok: true`.
- Completed the Resend infrastructure setup on 2026-06-14: verified the sending domain, added `RESEND_API_KEY` to the linked Supabase project, deployed `send-lead-email`, confirmed successful CORS preflight, and confirmed an authenticated request reaches function validation without sending an email.
- Implemented the Resend-based strategy lead email workflow locally on 2026-06-14: the browser now saves all structured lead fields and a client-generated UUID to Supabase, invokes the authenticated `send-lead-email` Edge Function, and continues to Google Sheets/FormSubmit even when email delivery fails; the function reloads the saved row server-side and sends the required admin and customer emails through Resend.
- Made Supabase `public.leads` the primary database for valid strategy-call submissions on 2026-06-14, storing `name`, `email`, `phone`, the full strategy-call message, and `status = New` before the existing secondary delivery workflow runs; deployed the change to Hostinger with the required Supabase CSP allowance.
- Completed the GA4 Admin configuration for property `540147140` on 2026-06-14: enabled `generate_lead` and `calendar_booking_click` as business key events, removed supporting/legacy key-event statuses, registered five event-scoped lead dimensions, and activated the tested internal-traffic exclusion filter after confirming 49 matched events from 2 internal users.
- Added and deployed the strategy-call lead form on the homepage on 2026-06-14, with homepage-specific GA4/lead-delivery context, calendar and WhatsApp alternatives, and right-aligned Ask us positioning across desktop and mobile.
- Migrated the production site to Next.js 16 App Router with React 19 and TypeScript on 2026-06-14 while preserving the existing design, content, PHP chatbot, consent controls, campaign attribution, forms and GA4 events.
- Added a Hostinger-compatible static export workflow: all 21 routes are prerendered as trailing-slash directories, former `.html` canonicals redirect permanently, and `out/` contains the complete deployment including PHP and security rules.
- Deployed the Next.js static export to Hostinger and verified the live Next assets, 21 routes, canonicals, sitemap, www redirect, legacy redirects, security headers, protected chatbot knowledge and successful chatbot response.
- Completed and deployed the website-side paid-ads readiness work on 2026-06-12: added a focused `/website-design-for-service-businesses` landing page, Consent Mode v2 with reversible cookie controls, UTM/GCLID session attribution, campaign context in lead delivery, honest pilot positioning, and a decision-complete Kent Google Search campaign plan.
- Added and verified HSTS, CSP, clickjacking, MIME-sniffing, referrer and permissions headers; blocked direct access to chatbot knowledge JSON; and added same-origin enforcement, request-size limits, no-store responses and IP-based rate limiting to the chatbot endpoint.
- Live validation confirmed 21 routes in the sitemap, the paid landing page at `200`, mobile width without overflow, current CSS/JS cache keys, successful synthetic lead delivery, and one `generate_lead` in GA4 Realtime.
- Cleaned up and deployed GA4 conversion tracking on 2026-06-12: successful strategy, quote, and chatbot leads now emit one canonical `generate_lead`; calendar selections emit one `calendar_booking_click`; duplicate legacy aliases were removed; and `?internal=1` / `?internal=0` manage a persistent `traffic_type=internal` browser marker.
- Strengthened static analytics validation across all 21 pages and verified the strategy form, chatbot lead path, calendar click, parameter values, PII-safe payload, Hostinger deployment, canonical redirect, and live internal-event output.
- Removed and deployed the homepage founder-led delivery section on 2026-06-12, then cleaned up its unused responsive CSS.
- Redesigned and deployed the homepage sample growth systems section on 2026-06-12 with compact 16:9 cards, corrected image dimensions, clear preview actions, and accessible full-size popouts for all three demonstration concepts.
- Completed the client-acquisition rebuild on 2026-06-12: repositioned the agency around Website & Content, Ads & Lead Generation, and Automation & Chatbots, with one primary Free Strategy Call CTA.
- Deployed the client-acquisition rebuild to Hostinger on 2026-06-12 and verified the non-www host redirects once to www, all 20 public routes return `200` with matching self-canonicals, and the live sitemap, robots, WebP assets, chatbot and required analytics event names are available.
- Added dedicated website/content, ads setup, and strategy-call pages; expanded service content, internal links, metadata, schema, FAQs, prices, pilot offer, founder-led copy, and honest sample growth systems.
- Standardized all canonicals, schema, sitemap, robots and redirect rules on `https://www.aitechinnovations.com`, with a single non-www to www `301` rule and short HTML revalidation caching.
- Fixed contextual WhatsApp behaviour and preserved `whatsapp_click`, `email_click`, `calendar_booking_click`, `quote_cta_click`, `chatbot_lead_submitted`, and `generate_lead`, while adding `strategy_call_lead_submitted`.
- Added the strategy-call fallback form with Google Sheets, email, WhatsApp and mail fallback paths; updated chatbot knowledge and scripted responses for the new offer.
- Replaced three large portfolio PNG files with WebP assets, removed render-blocking Google Fonts, deferred Clarity until after load, removed reveal delays, and improved button contrast.
- Added `CLIENT_ACQUISITION_PLAN.md` with the 100-account, 10-15 contacts per day, day-three/day-seven follow-up and paid-pilot workflow.
- Validated 20 public routes at `200`; local Lighthouse scored Performance 93, Accessibility 100, Best Practices 96 and SEO 100, with LCP 2.6s and CLS 0.
- Deployed the crawlable SEO page structure to Hostinger on 2026-06-11 and verified all 13 clean public routes, `sitemap.xml`, and `robots.txt` return `200`; verified `www` redirects to the canonical non-www hostname, required GA4 event names remain present, and the chatbot endpoint returns a scripted response.
- Added a crawlable SEO page structure on 2026-06-11 with 13 requested clean routes, five substantive automation service pages, a free audit page, a blog index, three long-form articles, unique metadata, self-referencing canonicals, internal links, FAQs, and audit CTAs.
- Added matching root and `public/` sitemap and robots files on 2026-06-11, plus Hostinger rewrite rules that standardize the canonical non-www hostname and serve clean URLs without hash routing.
- Preserved current GA4 event names and restored compatibility events `calendar_booking_click` and `chatbot_lead_submitted` alongside `book_appointment_click` and `chatbot_lead` on 2026-06-11.
- Expanded static validation and local preview tooling on 2026-06-11 to check metadata uniqueness, H1s, canonicals, content depth, sitemap parity, internal links, analytics events, clean routes, responsive layout, and `200` responses.
- GA4 lead event tracking update was deployed to Hostinger and verified live on 2026-06-07, including the `20260607-ga4-leads` script cache key, form event aliases, static pages, and chatbot endpoint.
- Missing GA4 quote form event aliases were added locally on 2026-06-07 so successful quote form submissions now emit `generate_lead`, `form_submit`, `submit_form`, `contact_submit`, and `lead_generated`.
- GA4 lead event tracking was updated locally on 2026-06-07 with reusable safe analytics helpers, new lead-focused event names, normalized CTA locations, PII-safe contact click parameters, cache-busted script references, and local browser validation.
- Homepage conversion flow and positioning update was deployed to Hostinger and verified live on 2026-06-06.
- Homepage conversion flow and positioning were updated on 2026-06-06 with website, booking system, and AI automation messaging, a standalone AI audit section, revised chatbot quick actions, schema markup, and requested GA4 event tracking.
- No-AI chatbot fallback and footer email update were deployed to Hostinger and verified live on 2026-06-04.
- No-AI chatbot fallback mode was added on 2026-06-04 so common chatbot questions are answered from scripted local knowledge without requiring an OpenAI API key.
- Chatbot launcher was restored to its original floating Ask us placement on 2026-06-04, and the footer support email was moved under the copyright line to avoid overlap.
- Chatbot launcher overlap with the footer email was fixed on 2026-06-04 by making the mobile launcher compact, hiding it when the footer is visible, and bumping CSS/JS cache keys.
- Chatbot font styling was fixed on 2026-06-04 so chat bubbles and controls explicitly use the website font, with the stylesheet cache key bumped to force the live browser to load the update.
- Low-cost AI support chatbot was added on 2026-06-04 with a Hostinger PHP backend endpoint, local JSON knowledge base, AI audit lead capture, GA4 chatbot events, and server-only OpenAI API key handling.
- Booking audit CTA order update was deployed to Hostinger and verified live on 2026-06-04.
- Google Calendar booking audit card was moved above the support email and WhatsApp CTAs in the homepage quote section on 2026-06-04.
- Footer company number line-break update was deployed to Hostinger and verified live on 2026-06-04.
- Footer company registration text was adjusted on 2026-06-04 so the company number and VAT number each appear on their own line.
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
- Next.js App Router and static-export structure are in place, with the existing HTML content, CSS and browser workflows preserved during migration.
- Homepage includes hero, services, pricing, demo work, process, proof, quote form, FAQ, and footer sections.
- Privacy and terms pages are present.
- Contact settings are centralized in `script.js`.
- Quote form supports FormSubmit email delivery with email fallback and WhatsApp fallback.
- Mobile navigation, sticky header state, reveal animations, and current-year footer hydration are implemented.
- Demo portfolio items are labelled as demo concepts.
- Static validation script exists at `scripts/check-static-site.js`.
- README documents local preview, static check, deployment files, and contact settings.

## In Progress

- The www Search Console property has the updated sitemap submitted and currently reports `Couldn't fetch`; independent checks confirm valid XML, `200` responses over IPv4/IPv6 and Googlebot access to all 21 URLs, so it is awaiting Google's retry.
- Google Ads still needs account sign-in, conversion import, auto-tagging and creation of the paused campaign documented in `ADS_LAUNCH_PLAN.md`; no advertising spend has been activated.
- Chatbot deployment can work without `OPENAI_API_KEY` for scripted answers; configuring the key is optional for unmatched AI-generated responses.
- The 100 outbound records are draft-only. Initial outreach and follow-up scheduling remain intentionally unsent pending manual review and approval.
- Portfolio examples are still demo concepts until real client screenshots are available.

## Known Issues

- The connected Gmail app still requires reauthentication, so automated inbox inspection is unavailable.

## Next 5 Logical Tasks

1. Monitor the submitted www sitemap until Search Console reports `Success`.
2. Review and approve the highest-scoring outbound drafts before manually contacting any prospect.
3. Reauthenticate the connected Gmail app so future mailbox delivery can be verified directly.
4. Configure the paused Kent Google Ads campaign when account-browser access is available.
5. Replace sample work with approved client case studies as pilot projects complete.
