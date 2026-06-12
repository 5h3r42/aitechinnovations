const fs = require("fs");
const path = require("path");

const root = process.cwd();
const siteUrl = "https://www.aitechinnovations.com";
const pages = [
  { route: "/", file: "index.html", type: "home" },
  { route: "/website-content-services", file: "website-content-services.html", type: "service" },
  { route: "/ads-setup-services", file: "ads-setup-services.html", type: "service" },
  { route: "/ai-automation-services", file: "ai-automation-services.html", type: "service" },
  { route: "/ai-chatbot-development", file: "ai-chatbot-development.html", type: "service" },
  { route: "/ai-lead-generation-automation", file: "ai-lead-generation-automation.html", type: "service" },
  { route: "/crm-automation-services", file: "crm-automation-services.html", type: "service" },
  { route: "/appointment-booking-automation", file: "appointment-booking-automation.html", type: "service" },
  { route: "/free-strategy-call", file: "free-strategy-call.html", type: "strategy" },
  { route: "/free-ai-audit", file: "free-ai-audit.html", type: "audit" },
  { route: "/blog", file: "blog.html", type: "blog" },
  { route: "/blog/how-small-businesses-use-ai", file: "blog-how-small-businesses-use-ai.html", type: "article" },
  { route: "/blog/what-is-ai-workflow-automation", file: "blog-what-is-ai-workflow-automation.html", type: "article" },
  { route: "/blog/ai-chatbots-for-customer-service", file: "blog-ai-chatbots-for-customer-service.html", type: "article" },
  { route: "/about.html", file: "about.html", type: "company" },
  { route: "/website-design-maidstone.html", file: "website-design-maidstone.html", type: "location" },
  { route: "/website-design-kent.html", file: "website-design-kent.html", type: "location" },
  { route: "/website-design-london.html", file: "website-design-london.html", type: "location" },
  { route: "/privacy", file: "privacy.html", type: "legal" },
  { route: "/terms", file: "terms.html", type: "legal" },
];

const requiredFiles = [
  ...pages.map((page) => page.file),
  "styles.css",
  "script.js",
  ".htaccess",
  "sitemap.xml",
  "robots.txt",
  "public/sitemap.xml",
  "public/robots.txt",
  "assets/logo.webp",
  "assets/preview-clinic-popout.webp",
  "assets/preview-solicitor-popout.webp",
  "assets/preview-roofing-popout.webp",
  "api/chatbot.php",
  "api/knowledge/services.json",
  "api/knowledge/pricing.json",
  "api/knowledge/ai-audit.json",
  "api/knowledge/strategy-call.json",
  "api/knowledge/contact.json",
  "api/knowledge/faqs.json",
];

let failed = false;
function fail(message) {
  console.error(message);
  failed = true;
}
function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}
function matchOne(html, pattern, label, file) {
  const matches = [...html.matchAll(pattern)];
  if (matches.length !== 1) {
    fail(`${file} should contain exactly one ${label}; found ${matches.length}.`);
    return "";
  }
  return matches[0][1].replace(/<[^>]+>/g, " ").trim();
}
function textWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing required file: ${file}`);
}

const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();

for (const page of pages) {
  const html = read(page.file);
  const title = matchOne(html, /<title>([^<]+)<\/title>/gi, "title", page.file);
  const description = matchOne(html, /<meta\s+name="description"\s+content="([^"]+)"\s*\/?>/gi, "meta description", page.file);
  const canonical = matchOne(html, /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?>/gi, "canonical", page.file);
  matchOne(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi, "H1", page.file);

  if (titles.has(title)) fail(`Duplicate title: ${title}`);
  if (descriptions.has(description)) fail(`Duplicate meta description: ${description}`);
  if (canonicals.has(canonical)) fail(`Duplicate canonical: ${canonical}`);
  titles.add(title);
  descriptions.add(description);
  canonicals.add(canonical);

  const expectedCanonical = `${siteUrl}${page.route}`;
  if (canonical !== expectedCanonical) fail(`${page.file} canonical should be ${expectedCanonical}; found ${canonical}.`);
  if (/noindex/i.test(html)) fail(`${page.file} contains a noindex directive.`);
  if (!html.includes("G-LTL4JXMYP2")) fail(`${page.file} is missing GA4.`);
  if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(html)) fail(`${page.file} still loads render-blocking Google Fonts.`);
  const expectedAssetVersion = page.type === "home" ? "20260612-founder-removed" : "20260611-growth-systems";
  if (!html.includes(expectedAssetVersion)) fail(`${page.file} is missing the current asset version.`);

  if (page.type !== "strategy" && page.type !== "legal" && !html.includes('href="/free-strategy-call"')) {
    fail(`${page.file} is missing the primary strategy-call CTA.`);
  }

  const internalLinks = (html.match(/href="\/(?!\/|#)[^"]*"/g) || []).length;
  if (internalLinks < 3) fail(`${page.file} should contain at least three internal links.`);

  if (page.type === "service") {
    for (const section of ["Problem", "Solution", "Benefits", "Use cases", "FAQ", "Book a Free Strategy Call"]) {
      if (!new RegExp(section, "i").test(html)) fail(`${page.file} is missing service section text: ${section}`);
    }
    if (textWordCount(html) < 550) fail(`${page.file} is too thin; expected at least 550 rendered words.`);
  }

  if (page.type === "article" && textWordCount(html) < 450) {
    fail(`${page.file} is too thin; expected at least 450 rendered words.`);
  }

  const whatsappLinks = [...html.matchAll(/<a[^>]+data-whatsapp-link[^>]*>/gi)].map((match) => match[0]);
  for (const link of whatsappLinks) {
    if (!/data-whatsapp-message="(website|ads|automation|strategy)"/i.test(link)) {
      fail(`${page.file} contains a WhatsApp link without a contextual message identifier.`);
    }
  }
}

const index = read("index.html");
for (const route of ["/website-content-services", "/ads-setup-services", "/ai-automation-services", "/free-strategy-call", "/blog"]) {
  if (!index.includes(`href="${route}"`)) fail(`Homepage is missing internal link to ${route}.`);
}
for (const image of ["preview-clinic-popout.webp", "preview-solicitor-popout.webp", "preview-roofing-popout.webp"]) {
  if (!index.includes(image)) fail(`Homepage is missing optimized image: ${image}`);
}
for (const preview of ["clinic", "solicitor", "roofing"]) {
  if (!index.includes(`data-preview-trigger="${preview}"`)) fail(`Homepage is missing preview trigger: ${preview}`);
  if (!index.includes(`data-preview-panel="${preview}"`)) fail(`Homepage is missing preview panel: ${preview}`);
}
for (const marker of ["data-preview-modal", "data-preview-dialog", "data-preview-close"]) {
  if (!index.includes(marker)) fail(`Homepage is missing sample preview marker: ${marker}`);
}

const strategy = read("free-strategy-call.html");
for (const field of ["name", "business", "email", "phone", "service", "goal", "website", "budget", "timeline"]) {
  if (!new RegExp(`name="${field}"`).test(strategy)) fail(`Strategy-call form is missing field: ${field}`);
}
for (const marker of ["data-strategy-form", "data-booking-link", "data-strategy-status"]) {
  if (!strategy.includes(marker)) fail(`Strategy-call page is missing ${marker}.`);
}

const sitemap = read("sitemap.xml");
const publicSitemap = read("public/sitemap.xml");
if (sitemap !== publicSitemap) fail("Root and public sitemap.xml files must match exactly.");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = pages.map((page) => `${siteUrl}${page.route}`);
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) {
  fail(`Sitemap URLs do not match the public routes.\nExpected: ${expectedUrls.join(", ")}\nFound: ${sitemapUrls.join(", ")}`);
}

const robots = read("robots.txt");
if (robots !== read("public/robots.txt")) fail("Root and public robots.txt files must match exactly.");
for (const directive of ["User-agent: *", "Allow: /", `Sitemap: ${siteUrl}/sitemap.xml`]) {
  if (!robots.includes(directive)) fail(`robots.txt is missing: ${directive}`);
}

const htaccess = read(".htaccess");
if (!htaccess.includes("^aitechinnovations\\.com$")) fail(".htaccess should redirect non-www to the canonical www host.");
if (!htaccess.includes("https://www.aitechinnovations.com%{REQUEST_URI}")) fail(".htaccess is missing the canonical www redirect.");
if (/no-store/i.test(htaccess)) fail(".htaccess should not disable HTML caching with no-store.");
for (const page of pages.filter((page) => page.route !== "/" && !page.route.endsWith(".html"))) {
  const routePattern = page.route.replace(/^\//, "");
  if (!htaccess.includes(routePattern)) fail(`.htaccess is missing clean route coverage for ${page.route}.`);
  if (!htaccess.includes(page.file)) fail(`.htaccess is missing target file coverage for ${page.file}.`);
}

const script = read("script.js");
for (const eventName of [
  "whatsapp_click",
  "email_click",
  "calendar_booking_click",
  "quote_cta_click",
  "chatbot_lead_submitted",
  "generate_lead",
  "strategy_call_lead_submitted",
]) {
  if (!script.includes(eventName)) fail(`script.js is missing required analytics event: ${eventName}`);
}
for (const messageKey of ["website", "ads", "automation", "strategy"]) {
  if (!script.includes(`${messageKey}:`)) fail(`script.js is missing WhatsApp message context: ${messageKey}`);
}
for (const helper of ["CONTACT_SETTINGS", "getSafeLinkUrl", "trackBookingClick", "trackChatbotLead", "trackGenerateLead"]) {
  if (!script.includes(helper)) fail(`script.js is missing analytics helper: ${helper}`);
}

const chatbotApi = read("api/chatbot.php");
for (const text of ["getenv('OPENAI_API_KEY')", "function scripted_reply", "https://api.openai.com/v1/responses", "__DIR__ . '/knowledge'"]) {
  if (!chatbotApi.includes(text)) fail(`Missing expected chatbot API text: ${text}`);
}

if (index.includes("/_next") || index.includes("_next/")) fail("Homepage should not reference Next.js assets.");
if (failed) process.exit(1);
console.log(`Static site check passed for ${pages.length} public routes.`);
