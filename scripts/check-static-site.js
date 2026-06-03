const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
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
const script = fs.readFileSync(path.join(process.cwd(), "script.js"), "utf8");
const checks = [
  "Trust-building websites that bring in better enquiries.",
  "Starter Website",
  "Business Website",
  "Premium Website",
  "Get a free quote",
  "Send enquiry",
  "data-email-link",
  "data-whatsapp-link",
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

const scriptChecks = ["CONTACT_SETTINGS", "buildWhatsAppUrl", "_honey", "openPreview", "closePreview"];
for (const text of scriptChecks) {
  if (!script.includes(text)) {
    console.error(`Missing expected script text: ${text}`);
    failed = true;
  }
}

if (index.includes("_next/") || index.includes("/_next")) {
  console.error("Homepage should not reference Next.js build assets.");
  failed = true;
}

if (failed) process.exit(1);

console.log("Static site check passed.");
