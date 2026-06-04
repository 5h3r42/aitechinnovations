# AITech Innovations

Static website for AITech Innovations, a UK web design agency for local businesses.

## Stack

- HTML
- CSS
- Vanilla JavaScript
- PHP endpoint for the server-side chatbot API

The site is designed for simple Hostinger deployment to `public_html`.

## Local Preview

```sh
npm run dev
```

Then open:

```text
http://localhost:4173
```

## Static Check

```sh
npm run check
```

## Deployment

Deploy these files to Hostinger `public_html`:

```text
index.html
styles.css
script.js
about.html
privacy.html
terms.html
api/
assets/
```

Optional server config:

```text
.htaccess
```

## Contact Settings

Update the contact settings near the top of `script.js`:

```js
const CONTACT_SETTINGS = {
  email: "support@aitechinnovations.com",
  whatsappNumber: "",
  phoneNumber: "",
  bookingUrl: "",
};
```

## Chatbot Setup

The website chatbot frontend calls:

```text
api/chatbot.php
```

The chatbot can answer common scripted questions without an OpenAI API key. It covers services, pricing guidance, the free AI Automation Audit, booking, WhatsApp, email, Hostinger, WordPress, timelines, and basic chatbot capability questions.

OpenAI is optional. Configure this environment variable in Hostinger only if you want unmatched questions to use the AI fallback:

```text
OPENAI_API_KEY=your_openai_api_key
```

The API key must stay server-side. Do not add it to `index.html`, `styles.css`, or `script.js`.

If `OPENAI_API_KEY` is not configured, unmatched questions return a handoff message asking the visitor to request a free AI Audit or contact the team.

The chatbot knowledge base lives in:

```text
api/knowledge/
```
