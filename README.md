# AITech Innovations

Static website for a founder-led digital growth systems agency serving UK service businesses.

## Offer

- Website & Content from £499
- Google or Meta Ads Setup from £399 plus ad spend
- Automation & Chatbots from £499
- Combined systems quoted after a free strategy call

## Stack

- HTML
- CSS
- Vanilla JavaScript
- PHP chatbot endpoint
- Hostinger static hosting

## Local Validation

```sh
npm run generate:seo
npm run check
npm run dev
```

Local preview: `http://127.0.0.1:4173`.

## Hostinger Deployment

Upload the production files to `public_html`:

```text
.htaccess
index.html
website-content-services.html
ads-setup-services.html
ai-automation-services.html
ai-chatbot-development.html
ai-lead-generation-automation.html
crm-automation-services.html
appointment-booking-automation.html
free-strategy-call.html
free-ai-audit.html
blog.html
blog-how-small-businesses-use-ai.html
blog-what-is-ai-workflow-automation.html
blog-ai-chatbots-for-customer-service.html
about.html
website-design-maidstone.html
website-design-kent.html
website-design-london.html
privacy.html
terms.html
styles.css
script.js
sitemap.xml
robots.txt
api/
assets/
```

Do not upload the `public/` source mirrors. Upload the root `sitemap.xml` and `robots.txt` so they resolve at the domain root.

After deployment verify:

1. `https://aitechinnovations.com/` redirects once to `https://www.aitechinnovations.com/`.
2. All 20 sitemap URLs return `200`.
3. Canonicals, schema, sitemap and robots use `www.aitechinnovations.com`.
4. Website, ads, automation and strategy WhatsApp links open different contextual messages.
5. The calendar link, fallback form, chatbot and GA4 events still work.

## Contact and Lead Settings

Contact, WhatsApp and calendar settings are centralized near the top of `script.js`. The strategy-call form sends to the existing Google Sheets endpoint, then FormSubmit, then WhatsApp or email fallback.

The chatbot frontend calls `api/chatbot.php`. It supports scripted replies without an API key. Set `OPENAI_API_KEY` in Hostinger only if unmatched questions should use the optional AI fallback; never place the key in client-side files.

## Search Console and GA4

Add or verify the `https://www.aitechinnovations.com/` URL-prefix property in Google Search Console, submit `https://www.aitechinnovations.com/sitemap.xml`, and request indexing for the homepage, one service page and one article.

In GA4, mark only `generate_lead` and `calendar_booking_click` as key events. Keep WhatsApp, email, CTA, chatbot-open and portfolio-preview events as supporting engagement signals.

To mark a browser as internal traffic, visit any page once with `?internal=1`. The setting persists in that browser and adds `traffic_type=internal` to GA4 page views and events. Use `?internal=0` to clear it. Configure the matching GA4 internal-traffic data filter in testing mode before activating it.

One-time GA4 Admin setup for property `540147140`:

1. Mark `generate_lead` and `calendar_booking_click` as key events.
2. Remove key-event status from `quote_cta_click`, `whatsapp_click`, `email_click`, `chatbot_lead_submitted`, `strategy_call_lead_submitted`, and old form aliases.
3. Register `lead_source`, `lead_type`, `service_interest`, `form_name`, and `location` as event-scoped custom dimensions.
4. Create an internal-traffic data filter for `traffic_type=internal`, verify it in testing mode, and then activate it.
5. If Google Ads is linked, import only `generate_lead` and `calendar_booking_click` as conversion actions.

`calendar_booking_click` measures booking intent because Google Calendar does not send a confirmed appointment event back to this static site.
