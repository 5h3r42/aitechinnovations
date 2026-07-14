# AITech Innovations

Next.js website for a digital growth systems agency serving UK service businesses.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Static export for Hostinger shared hosting
- Existing vanilla JavaScript conversion and lead workflows
- PHP chatbot endpoint

The project uses Next.js for routing, metadata and static generation. `content/pages/` contains the proven acquisition copy and page markup used by the build-time renderer, while shared styles remain in `styles.css` and browser behavior is centralized in `public/script.js`.

## Development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```sh
npm run build
npm run check
npm run lint
npm audit --omit=dev
```

`npm run build` creates the complete Hostinger deployment in `out/`. The build contains 22 prerendered public routes, Next.js assets, sitemap, robots file, security rules, images, the shared browser script and the PHP chatbot API.

## Hostinger Deployment

Deploy the contents of `out/` directly into Hostinger `public_html`. Do not upload `node_modules`, `.next`, the source repository or `package.json` to `public_html`.

The site remains a static Hostinger deployment. Next.js and React run at build time and in the browser; no Node.js production server is required. Hostinger continues to execute `out/api/chatbot.php` as PHP.

### GitHub Actions deployment

`.github/workflows/deploy-hostinger-static.yml` builds and validates the static export on pushes to `main` and manual dispatch, then uploads the contents of `out/` by SFTP. It intentionally does not delete remote files: set `HOSTINGER_REMOTE_PATH` only after verifying the live static serving directory in hPanel.

Configure these GitHub repository secrets before enabling a production upload:

- `HOSTINGER_HOST`
- `HOSTINGER_PORT` (normally `22`)
- `HOSTINGER_USERNAME`
- `HOSTINGER_SSH_PRIVATE_KEY`
- `HOSTINGER_SSH_KNOWN_HOSTS` (the verified server host-key entry)
- `HOSTINGER_REMOTE_PATH` (the confirmed site root, for example `public_html` only when hPanel verifies it)

The previous successful `main` commit remains the Git rollback target. Before the first automated upload, take a Hostinger file backup and retain the archive outside the deployment directory.

After deployment verify:

1. Non-www redirects once to `https://www.aitechinnovations.com`.
2. All 22 sitemap URLs return `200`.
3. Canonicals, schema, sitemap and robots use the www hostname and clean routes.
4. Cookie consent, contextual WhatsApp, email, calendar and lead forms still work.
5. The chatbot endpoint responds and `/api/knowledge/` remains blocked.
6. GA4 records only the documented lead and supporting events.

## Contact And Analytics

Contact, WhatsApp, calendar, lead delivery, campaign attribution and analytics event settings are centralized near the top of `public/script.js`.

GA4 property: `540147140`

Measurement ID: `G-LTL4JXMYP2`

Mark only `generate_lead` and `calendar_booking_click` as GA4 key events. Use `?internal=1` to persist the internal traffic marker in a browser and `?internal=0` to clear it.

## Paid Ads

Use `/website-design-for-service-businesses/` for the first Google Search campaign. Campaign structure, budget, keywords, negative keywords, advert copy and stop rules are documented in `ADS_LAUNCH_PLAN.md`.
