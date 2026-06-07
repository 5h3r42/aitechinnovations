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
  "Web Design & AI Automation for Service Businesses",
  "AITech Innovations builds trust-focused websites, booking systems and AI automation support for professional service businesses.",
  "Websites and AI automation that bring in better enquiries.",
  "We design fast, mobile-friendly websites, booking flows, and simple AI automations",
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
  "Free AI Automation Audit",
  "Book Free AI Audit",
  "Book a free 30-minute AI Automation Audit. We'll review your current workflow",
  "application/ld+json",
  "Organization",
  "LocalBusiness",
  "Service",
  "FAQPage",
  "script.js?v=20260607-ga4-leads",
  "data-chatbot-open",
  "data-chatbot-panel",
  "data-chatbot-form",
  "data-chatbot-whatsapp",
  "data-chatbot-booking",
  "AITech Assistant",
  "Website quote",
  "Book AI audit",
  "Pricing",
  "Hi, I can help you choose the right website package, request a quote, or book a free AI automation audit. What would you like help with?",
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
    "script.js?v=20260607-ga4-leads",
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
  "trackEvent",
  "getSafeLinkUrl",
  "trackWhatsappClick",
  "trackBookingClick",
  "trackPhoneClick",
  "trackEmailClick",
  "trackGenerateLead",
  "trackChatbotOpened",
  "trackChatbotLead",
  "debug_analytics",
  "chatbot_opened",
  "chatbot_message_sent",
  "chatbot_lead_started",
  "chatbot_lead",
  "AI audit chatbot lead",
  "_honey",
  "openPreview",
  "closePreview",
  "getAnalyticsLocation",
  "generate_lead",
  "form_submit",
  "submit_form",
  "contact_submit",
  "lead_generated",
  "whatsapp_click",
  "book_appointment_click",
  "phone_click",
  "email_click",
  "phone_target",
  "email_target",
  "quote_cta_click",
  "pricing_cta_click",
  "portfolio_preview_opened",
  bookingUrl,
];
for (const text of scriptChecks) {
  if (!script.includes(text)) {
    console.error(`Missing expected script text: ${text}`);
    failed = true;
  }
}

const obsoleteScriptChecks = [
  "calendar_booking_click",
  "chatbot_lead_submitted",
  "chatbot_whatsapp_clicked",
  "chatbot_booking_clicked",
  "trackAnalyticsEvent",
];
for (const text of obsoleteScriptChecks) {
  if (script.includes(text)) {
    console.error(`Obsolete analytics text should be removed from script.js: ${text}`);
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
