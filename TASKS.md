# Tasks

## Today

- Monitor the submitted www sitemap until Google changes `Couldn't fetch` to `Success`; the live XML and all 21 URLs validate correctly.
- Sign in to Google Ads, import `generate_lead` as the primary conversion, enable auto-tagging, and build the paused Kent Search campaign from `ADS_LAUNCH_PLAN.md`.

## This Week

- Review and approve the strongest outbound drafts, then manually record any initial contact before scheduling follow-ups.
- Replace demo work with real portfolio screenshots when client work is available.
- Add an approved founder photo when available.

## Backlog

- Add real case studies with screenshots, outcomes, and client permission.
- Add a dedicated thank-you or confirmation page if needed.
- Add more niche landing sections for target business types.
- Add image optimization notes for future portfolio assets.

## Done

- Polished the homepage consultation form and replaced the vague pricing cards with five detailed starting-price packages, clear inclusions, package-specific strategy-call CTAs, and honest scope notes. Verified desktop/390px layouts and no horizontal overflow.
- Implemented the Week 1 conversion foundation: clearer homepage positioning, standard 20-minute strategy-call CTAs, founder-led trust block, lower-friction forms, calendar-first strategy-call page, call agenda, ownership/support FAQs, and clearer live-demo positioning.
- Replaced the homepage generic sample systems with a responsive “Sample systems” live-demo showcase for Canterbury Smile Studio, Luxe Aesthetics Studio, Canterbury Home Repairs, Canterbury & Coast Property, and Canterbury Ledger & Tax, plus the “Your business here” strategy-call CTA.
- Activated the FormSubmit fallback for `support@aitechinnovations.com` and verified a controlled fallback-only hosted-origin submission returned `HTTP 200` with `success: true`, without creating a Supabase lead, invoking Resend, or updating Google Sheets.
- Launched the separate Outbound Prospects workspace: admin-only Supabase tables and append-only activities, CSV/manual workflows, 100 researched Kent and London service-business prospects, personalised email/contact-form drafts, production import, responsive Hostinger deployment, and an approved-evidence case-study intake checklist. No outreach was sent.
- Launched the actionable lead follow-up workflow: UK-time Overdue/Due Today/Upcoming queues, editable next actions with suggested cadence, structured append-only activity timelines, quick contact logging, active/archived filters, restore support, admin-only atomic workflow RPCs, production deployment, and cleanup of controlled test records.
- Fixed admin password recovery by replacing the localhost Supabase Site URL with the live admin route, adding an explicit forgot-password action and recovery form, revoking the exposed recovery session, and validating a real live password change and login before restoring the existing password.
- Launched `/admin/leads/` in production: applied admin-only RLS and column privileges, disabled public Auth sign-up, provisioned `support@aitechinnovations.com` with trusted admin metadata, fixed Supabase Auth URL normalization, deployed to Hostinger, and verified real lead access, search, pagination, status/notes updates, session restoration, sign-out, unauthorised handling, and responsive layouts.
- Repaired and deployed Resend form delivery by cache-busting the immutable browser script, moving the quote handler onto the Supabase-first workflow, adding bounded retries and provider idempotency, and validating Supabase, two Resend messages, Google Sheets, and duplicate-safe retries with a controlled production lead.
- Built the statically exported `/admin/leads/` dashboard with Supabase email/password Auth, admin-role access handling, newest-first paginated leads, server-side search, summary counts, status updates, editable notes, responsive detail views, scoped SaaS styling, and an unapplied RLS/column-privilege migration.
- Deployed the refreshed 21-route static export to Hostinger and completed a controlled production lead test: Supabase saved the lead, the Edge Function returned success, Resend accepted the admin and customer emails, and Google Sheets accepted the backup payload.
- Verified the AITech Innovations sending domain in Resend, added `RESEND_API_KEY` to Supabase, deployed `send-lead-email`, and confirmed its live CORS and publishable-key request handling.
- Implemented Resend delivery for saved strategy-call leads through a Supabase Edge Function, including admin and customer emails, server-side lead lookup, non-blocking email failure handling, and retention of Google Sheets and FormSubmit backups.
- Made Supabase `public.leads` the primary database for strategy-call forms, with native validation, required lead fields, a clear non-destructive failure state, and the existing Google Sheets, FormSubmit, WhatsApp, and email workflow retained after a successful insert.
- Configured GA4 property `540147140`: retained `generate_lead` and `calendar_booking_click` as the business key events, removed key-event status from supporting and legacy events, registered all five lead dimensions, and activated the verified internal-traffic exclusion filter.
- Added the full strategy-call enquiry form to the homepage with homepage-specific lead attribution, and moved the Ask us launcher to the right edge on desktop and mobile.
- Migrated the full 21-route website to Next.js 16 App Router with React 19 and TypeScript, retained static Hostinger hosting and the PHP chatbot, and deployed the generated `out/` site.
- Verified the Next.js migration with a production build, TypeScript, ESLint, dependency audit, PHP syntax, static SEO checks, desktop/mobile browser testing, all 21 local and live routes, legacy redirects, security headers and chatbot behavior.
- Built and deployed the paid-ads acquisition foundation: Consent Mode v2 and reversible cookie choices, campaign attribution through lead delivery, a focused website-design landing page, a complete Kent Search campaign plan, stronger security headers, protected chatbot knowledge, and chatbot abuse controls.
- Verified the live paid landing page on desktop and mobile, successful lead delivery, one `generate_lead` in GA4 Realtime, 21 sitemap URLs, current cache keys, security headers, consent behaviour, and protected API files.
- Cleaned up and deployed GA4 conversion tracking so successful forms and chatbot captures emit one `generate_lead`, calendar selections emit one `calendar_booking_click`, supporting clicks remain non-conversion events, and marked browsers send `traffic_type=internal`.
- Removed and deployed the founder-led delivery block from the homepage and cleaned up its unused styles.
- Redesigned and deployed the sample growth systems cards and restored full-size clinic, solicitor and trade-business preview popouts on desktop and mobile.
- Deployed the client-acquisition rebuild to Hostinger and verified the single non-www to www redirect, 20 live routes and self-canonicals, discovery files, optimized assets, chatbot response and required analytics event names.
- Rebuilt the agency website around three service pillars, one Free Strategy Call CTA, contextual WhatsApp messages, the strategy-call lead workflow, honest sample systems, founder-led positioning, paid pilots, and a 30-day client-acquisition campaign.
- Standardized the site on the www canonical host, expanded the sitemap to 20 public URLs, optimized portfolio images to WebP, removed render-blocking fonts, improved contrast and caching, and validated Lighthouse targets locally.
- Deployed the 13-route SEO structure, clean URL rewrites, sitemap, robots file, updated assets, and analytics compatibility events to Hostinger; verified every public route, sitemap, robots, canonical host redirect, and chatbot endpoint live.
- Added 13 crawlable SEO routes with unique metadata, self-canonicals, substantive service/blog content, internal links, audit CTAs, clean Hostinger rewrites, sitemap and robots files, and compatibility tracking for the required GA4 event names.
- Deployed the GA4 lead event tracking update to Hostinger and verified the live homepage, cache-busted script, lead event aliases, static pages, and chatbot endpoint.
- Added the missing GA4 form event aliases `form_submit`, `submit_form`, `contact_submit`, and `lead_generated` to the successful quote form lead path.
- Implemented the GA4 lead event tracking update with safe reusable tracking helpers, normalized CTA locations, updated script cache keys, and local browser validation for click, form lead, chatbot lead, and no-gtag fallback behavior.
- Deployed the homepage conversion flow and positioning update to Hostinger and verified the live homepage, cache-busted CSS/JS, static pages, and chatbot endpoint.
- Updated the homepage conversion flow and positioning with website, booking system, and AI automation messaging; a standalone AI audit section; revised chatbot quick actions; schema markup; and GA4 events for booking, pricing, chatbot open, WhatsApp, and form submit interactions.
- Deployed the no-AI chatbot fallback, chatbot endpoint, knowledge base, footer email update, and updated static files to Hostinger.
- Added no-AI chatbot fallback mode so common questions are answered from scripted local knowledge without requiring an OpenAI API key.
- Restored the floating Ask us chatbot launcher and moved the footer support email under the copyright line to avoid overlap.
- Fixed chatbot launcher overlap with the footer email by using a compact mobile launcher, footer visibility handling, and fresh CSS/JS cache keys.
- Fixed chatbot font styling and bumped the stylesheet cache key so chat bubbles, input, and controls load the website font.
- Added a low-cost AI support chatbot with a Hostinger PHP backend endpoint, local JSON knowledge base, AI audit lead capture, GA4 chatbot events, and server-only OpenAI API key handling.
- Deployed the booking audit CTA order update to Hostinger and verified the live homepage.
- Moved the Google Calendar booking audit card above the support email and WhatsApp CTAs in the homepage quote section.
- Deployed the footer company number line-break update to Hostinger and verified the live homepage and location pages.
- Moved the footer company number onto its own line across the homepage and location landing pages.
- Deployed the Google Calendar booking CTA update to Hostinger and verified the live homepage and script cache-bust.
- Added the Google Calendar booking CTA under the homepage WhatsApp enquiry CTA for free AI automation audit bookings.
- Deployed the Maidstone, Kent, and London website design landing pages to Hostinger and verified the live URLs.
- Created Maidstone, Kent, and London website design landing pages with unique SEO metadata, internal links, and local FAQs.
- Deployed the GA4 conversion tracking update to Hostinger and verified the live homepage serves the new analytics script.
- Added GA4 custom conversion tracking for quote CTAs, WhatsApp clicks, email clicks, portfolio previews, and successful quote form submissions.
- Fixed example work popout click handling so clicking any card/image opens the correct preview modal.
- Fixed example work card image clipping so titles and descriptions no longer cover the screenshots.
- Deployed the About page and footer VAT line-break update to Hostinger and verified the live pages.
- Added a static About Us page and linked it from the homepage navigation and footer.
- Removed the example work card `Demo concept` labels, verified all three cards still open their popout previews, and deployed the fix to Hostinger.
- Deployed the example work popout preview images update to Hostinger and verified the live homepage and image assets.
- Added popout preview images to the example work cards without changing the section copy or card behavior.
- Completed a responsive UI audit and polish pass for homepage alignment, spacing, typography, cards, CTAs, forms, footer, and mobile layouts.
- Fixed WhatsApp enquiry links so they include the direct WhatsApp URL in the static HTML and no longer depend on placeholder links.
- Deployed the professional service client repositioning update to Hostinger and verified the live homepage, demo previews, dropdown, and WhatsApp links.
- Repositioned the homepage for higher-value professional service businesses and added clickable clinic, solicitor, and roofing demo previews.
- Deployed the WhatsApp Click-to-Chat update to Hostinger and verified the live site serves the updated links.
- Added the final WhatsApp Click-to-Chat link for website quote enquiries and removed public call CTAs.
- Installed Microsoft Clarity `x1bt97hjsh`, deployed it to Hostinger, and verified the live pages serve the snippet.
- Confirmed the live Google tag fires GA4 `page_view` collection requests for `G-LTL4JXMYP2`.
- Deployed the Google tag update to Hostinger and verified the live pages serve `G-LTL4JXMYP2`.
- Prepared and uploaded the Hostinger `public_html` static deployment package.
- Installed the Google tag `G-LTL4JXMYP2` on the homepage, privacy page, and terms page.
- Created a reusable `static-lead-form` Codex skill from the site contact form pattern.
- Checked final contact settings; no WhatsApp number, phone number, or booking URL was available in the project files, so existing hidden/fallback behavior remains unchanged.
- Completed a final live desktop/mobile browser review of the typography update.
- Tested the live quote form delivery path and confirmed Google Sheets receives the primary browser submission route.
- Tightened site-wide text spacing for hero copy, section intros, cards, pricing, FAQ, footer, and legal pages.
- Rebuilt and redeployed the clean static site package to Hostinger.
- Verified the plain homepage `/`, `/index.html`, CSS, and JavaScript serve the new static site.
- Redeployed the static site to Hostinger after the live domain served the old Next.js design.
- Deployed a temporary generic Hostinger Node wrapper to serve the static files while the old Next.js route/cache remains attached.
- Added no-cache headers for HTML files in `.htaccess`.
- Committed the static migration from Next.js to a Hostinger-ready static HTML/CSS/JavaScript site.
