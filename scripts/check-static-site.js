const fs = require("fs");
const path = require("path");

const root = process.cwd();
const siteUrl = "https://aitechinnovations.com";
const pages = [
  { route: "/", file: "index.html", type: "home" },
  { route: "/ai-automation-services", file: "ai-automation-services.html", type: "service" },
  { route: "/ai-chatbot-development", file: "ai-chatbot-development.html", type: "service" },
  { route: "/ai-lead-generation-automation", file: "ai-lead-generation-automation.html", type: "service" },
  { route: "/crm-automation-services", file: "crm-automation-services.html", type: "service" },
  { route: "/appointment-booking-automation", file: "appointment-booking-automation.html", type: "service" },
  { route: "/free-ai-audit", file: "free-ai-audit.html", type: "audit" },
  { route: "/blog", file: "blog.html", type: "blog" },
  { route: "/blog/how-small-businesses-use-ai", file: "blog-how-small-businesses-use-ai.html", type: "article" },
  { route: "/blog/what-is-ai-workflow-automation", file: "blog-what-is-ai-workflow-automation.html", type: "article" },
  { route: "/blog/ai-chatbots-for-customer-service", file: "blog-ai-chatbots-for-customer-service.html", type: "article" },
  { route: "/privacy", file: "privacy.html", type: "legal" },
  { route: "/terms", file: "terms.html", type: "legal" },
];

const requiredFiles = [
  ...pages.map((page) => page.file),
  "about.html",
  "website-design-maidstone.html",
  "website-design-kent.html",
  "website-design-london.html",
  "styles.css",
  "script.js",
  ".htaccess",
  "sitemap.xml",
  "robots.txt",
  "public/sitemap.xml",
  "public/robots.txt",
  "assets/logo.webp",
  "api/chatbot.php",
  "api/knowledge/services.json",
  "api/knowledge/pricing.json",
  "api/knowledge/ai-audit.json",
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
  return matches[0][1].trim();
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
  if (page.route !== "/" && !html.includes('href="/free-ai-audit"') && page.type !== "audit") {
    fail(`${page.file} is missing the internal AI audit CTA.`);
  }

  const internalLinks = (html.match(/href="\/(?!\/|#)[^"]*"/g) || []).length;
  if (internalLinks < 3) fail(`${page.file} should contain at least three internal links.`);

  if (page.type === "service") {
    for (const heading of ["The problem", "The solution", "Benefits", "Use cases", "FAQ", "Request AI Audit"]) {
      if (!html.includes(heading)) fail(`${page.file} is missing service section text: ${heading}`);
    }
    if (textWordCount(html) < 550) fail(`${page.file} is too thin; expected at least 550 rendered words.`);
  }

  if (page.type === "article" && textWordCount(html) < 450) {
    fail(`${page.file} is too thin; expected at least 450 rendered words.`);
  }
}

const index = read("index.html");
for (const route of pages.filter((page) => page.type === "service" || page.type === "blog" || page.type === "audit").map((page) => page.route)) {
  if (!index.includes(`href="${route}"`)) fail(`Homepage is missing internal link to ${route}.`);
}

const sitemap = read("sitemap.xml");
const publicSitemap = read("public/sitemap.xml");
if (sitemap !== publicSitemap) fail("Root and public sitemap.xml files must match exactly.");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = pages.map((page) => `${siteUrl}${page.route}`);
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) {
  fail(`Sitemap URLs do not match the requested public routes.\nExpected: ${expectedUrls.join(", ")}\nFound: ${sitemapUrls.join(", ")}`);
}

const robots = read("robots.txt");
if (robots !== read("public/robots.txt")) fail("Root and public robots.txt files must match exactly.");
for (const directive of ["User-agent: *", "Allow: /", `Sitemap: ${siteUrl}/sitemap.xml`]) {
  if (!robots.includes(directive)) fail(`robots.txt is missing: ${directive}`);
}

const htaccess = read(".htaccess");
if (!htaccess.includes("^www\\.aitechinnovations\\.com$")) fail(".htaccess should redirect www to the canonical non-www host.");
if (htaccess.includes("https://www.aitechinnovations.com")) fail(".htaccess contains the non-canonical www hostname.");
for (const page of pages.filter((page) => page.route !== "/")) {
  const routePattern = page.route.replace(/^\//, "").replace(/\//g, "/");
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
  "book_appointment_click",
  "chatbot_lead",
]) {
  if (!script.includes(eventName)) fail(`script.js is missing required analytics event: ${eventName}`);
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
console.log(`Static SEO check passed for ${pages.length} public routes.`);
