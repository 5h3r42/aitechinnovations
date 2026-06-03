# AITech Innovations

Static website for AITech Innovations, a UK web design agency for local businesses.

## Stack

- HTML
- CSS
- Vanilla JavaScript

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
