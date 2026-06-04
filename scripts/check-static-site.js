const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "about.html",
  "privacy.html",
  "terms.html",
  "assets/logo.webp",
];

let failed = false;

for (const file of requiredFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing required file: ${file}`);
    failed = true;
  }
}

const index = fs.readFileSync(path.join(process.cwd(), "index.html"), "utf8");
const about = fs.readFileSync(path.join(process.cwd(), "about.html"), "utf8");
const script = fs.readFileSync(path.join(process.cwd(), "script.js"), "utf8");
const checks = [
  "Trust-building websites that bring in better enquiries.",
  "Starter Website",
  "Business Website",
  "Premium Website",
  "Get a free quote",
  "Send enquiry",
  "about.html",
  "data-email-link",
  "data-whatsapp-link",
  "data-analytics-cta",
  "data-analytics-location",
  "Private Clinic Website",
  "Solicitor Website",
  "Roofing Company Website",
  "Other professional service business",
];

for (const text of checks) {
  if (!index.includes(text)) {
    console.error(`Missing expected homepage text: ${text}`);
    failed = true;
  }
}

const aboutChecks = ["About Us | AITech Innovations", "Practical websites for professional service businesses.", "data-email-link"];
for (const text of aboutChecks) {
  if (!about.includes(text)) {
    console.error(`Missing expected about page text: ${text}`);
    failed = true;
  }
}

const scriptChecks = [
  "CONTACT_SETTINGS",
  "buildWhatsAppUrl",
  "_honey",
  "openPreview",
  "closePreview",
  "trackAnalyticsEvent",
  "getAnalyticsLocation",
  "generate_lead",
  "whatsapp_click",
  "email_click",
  "quote_cta_click",
  "portfolio_preview_opened",
];
for (const text of scriptChecks) {
  if (!script.includes(text)) {
    console.error(`Missing expected script text: ${text}`);
    failed = true;
  }
}

const requiredWhatsappUrl = "https://wa.me/447882111810?text=Hi%20AITech%20Innovations,%20I'd%20like%20a%20website%20quote.";
if (!index.includes(requiredWhatsappUrl)) {
  console.error("Homepage WhatsApp links should include the direct WhatsApp quote URL.");
  failed = true;
}

if (index.includes('href="#" data-whatsapp-link')) {
  console.error("WhatsApp links should not depend on placeholder href values.");
  failed = true;
}

if (index.includes("_next/") || index.includes("/_next")) {
  console.error("Homepage should not reference Next.js build assets.");
  failed = true;
}

if (failed) process.exit(1);

console.log("Static site check passed.");
