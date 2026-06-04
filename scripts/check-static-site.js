const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "about.html",
  "website-design-maidstone.html",
  "website-design-kent.html",
  "website-design-london.html",
  "privacy.html",
  "terms.html",
  "assets/logo.webp",
  "api/chatbot.php",
  "api/knowledge/services.json",
  "api/knowledge/pricing.json",
  "api/knowledge/ai-audit.json",
  "api/knowledge/contact.json",
  "api/knowledge/faqs.json",
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
const bookingUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ29kmaaQThmrdewMfPksmL8AuJR67EUDytKmyhAuakCNeIRyHNRMQ8-gQc82hxmjMc2fl8jPZCr";
const locationPages = [
  {
    file: "website-design-maidstone.html",
    title: "Website Design Maidstone | AITech Innovations",
    h1: "Website design Maidstone",
    canonical: "https://aitechinnovations.com/website-design-maidstone.html",
  },
  {
    file: "website-design-kent.html",
    title: "Website Design Kent | AITech Innovations",
    h1: "Website design Kent",
    canonical: "https://aitechinnovations.com/website-design-kent.html",
  },
  {
    file: "website-design-london.html",
    title: "Website Design London | AITech Innovations",
    h1: "Website design London",
    canonical: "https://aitechinnovations.com/website-design-london.html",
  },
];
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
  "Areas we serve",
  "website-design-maidstone.html",
  "website-design-kent.html",
  "website-design-london.html",
  "Serving professional service businesses across Maidstone, Kent, London and the United Kingdom.",
  "Book Your Free AI Automation Audit",
  "Book Free AI Audit",
  "Prefer to schedule a call? Book a free 30-minute AI Automation Audit",
  "data-chatbot-open",
  "data-chatbot-panel",
  "data-chatbot-form",
  "data-chatbot-lead-start",
  "data-chatbot-whatsapp",
  "data-chatbot-booking",
  "AITech Assistant",
  bookingUrl,
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

for (const page of locationPages) {
  const html = fs.readFileSync(path.join(process.cwd(), page.file), "utf8");
  const pageChecks = [
    page.title,
    `<h1>${page.h1}</h1>`,
    `rel="canonical" href="${page.canonical}"`,
    "Get a Free Quote",
    "WhatsApp Enquiry",
    "Mobile responsive design",
    "Fast loading pages",
    "Trust-building layout",
    "Local SEO basics",
    "WhatsApp enquiry flow",
    "Ready to improve your business website?",
    "script.js?v=20260604-emailmove",
  ];

  for (const text of pageChecks) {
    if (!html.includes(text)) {
      console.error(`Missing expected ${page.file} text: ${text}`);
      failed = true;
    }
  }

  const h1Count = (html.match(/<h1>/g) || []).length;
  if (h1Count !== 1) {
    console.error(`${page.file} should contain exactly one H1.`);
    failed = true;
  }
}

const scriptChecks = [
  "CONTACT_SETTINGS",
  "buildWhatsAppUrl",
  "CHATBOT_API_ENDPOINT",
  "api/chatbot.php",
  "chatbot_opened",
  "chatbot_message_sent",
  "chatbot_lead_started",
  "chatbot_lead_submitted",
  "chatbot_whatsapp_clicked",
  "chatbot_booking_clicked",
  "AI audit chatbot lead",
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
  bookingUrl,
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

const chatbotApi = fs.readFileSync(path.join(process.cwd(), "api/chatbot.php"), "utf8");
const chatbotApiChecks = [
  "getenv('OPENAI_API_KEY')",
  "function scripted_reply",
  "message_matches",
  "'source' => 'scripted'",
  "'source' => 'fallback'",
  "The free AI Automation Audit is a 30-minute review",
  "Website pricing starts from £499",
  "gpt-5.4-mini",
  "https://api.openai.com/v1/responses",
  "__DIR__ . '/knowledge'",
  "legal, medical, financial, tax",
];
for (const text of chatbotApiChecks) {
  if (!chatbotApi.includes(text)) {
    console.error(`Missing expected chatbot API text: ${text}`);
    failed = true;
  }
}

if (index.includes("OPENAI_API_KEY") || script.includes("OPENAI_API_KEY")) {
  console.error("OpenAI API key environment variable must not appear in frontend files.");
  failed = true;
}

if (failed) process.exit(1);

console.log("Static site check passed.");
