const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const output = path.join(root, "out");
const siteUrl = "https://www.aitechinnovations.com";
const pages = [
  ["/", "index.html", "home"],
  ["/website-content-services/", "website-content-services/index.html", "service"],
  ["/ads-setup-services/", "ads-setup-services/index.html", "service"],
  ["/ai-automation-services/", "ai-automation-services/index.html", "service"],
  ["/ai-chatbot-development/", "ai-chatbot-development/index.html", "service"],
  ["/ai-lead-generation-automation/", "ai-lead-generation-automation/index.html", "service"],
  ["/crm-automation-services/", "crm-automation-services/index.html", "service"],
  ["/appointment-booking-automation/", "appointment-booking-automation/index.html", "service"],
  ["/free-strategy-call/", "free-strategy-call/index.html", "strategy"],
  ["/website-design-for-service-businesses/", "website-design-for-service-businesses/index.html", "landing"],
  ["/free-ai-audit/", "free-ai-audit/index.html", "audit"],
  ["/blog/", "blog/index.html", "blog"],
  ["/blog/how-small-businesses-use-ai/", "blog/how-small-businesses-use-ai/index.html", "article"],
  ["/blog/what-is-ai-workflow-automation/", "blog/what-is-ai-workflow-automation/index.html", "article"],
  ["/blog/ai-chatbots-for-customer-service/", "blog/ai-chatbots-for-customer-service/index.html", "article"],
  ["/about/", "about/index.html", "company"],
  ["/website-design-maidstone/", "website-design-maidstone/index.html", "location"],
  ["/website-design-kent/", "website-design-kent/index.html", "location"],
  ["/website-design-london/", "website-design-london/index.html", "location"],
  ["/privacy/", "privacy/index.html", "legal"],
  ["/terms/", "terms/index.html", "legal"],
];

let failed = false;
const fail = (message) => {
  console.error(message);
  failed = true;
};
const readOutput = (file) => fs.readFileSync(path.join(output, file), "utf8");
const matchOne = (html, pattern, label, file) => {
  const matches = [...html.matchAll(pattern)];
  if (matches.length !== 1) {
    fail(`${file} should contain exactly one ${label}; found ${matches.length}.`);
    return "";
  }
  return matches[0][1].replace(/<[^>]+>/g, " ").trim();
};
const wordCount = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

if (!fs.existsSync(output)) fail("Missing out/. Run npm run build before npm run check.");

for (const file of [
  "out/.htaccess",
  "out/script.js",
  "out/sitemap.xml",
  "out/robots.txt",
  "out/api/chatbot.php",
  "out/assets/logo.webp",
  "app/layout.tsx",
  "app/page.tsx",
  "app/[...slug]/page.tsx",
  "lib/site-pages.ts",
  "next.config.ts",
]) {
  if (!fs.existsSync(path.join(root, file))) fail(`Missing required file: ${file}`);
}

const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();

for (const [route, file, type] of pages) {
  const html = readOutput(file);
  const title = matchOne(html, /<title>([^<]+)<\/title>/gi, "title", file);
  const description = matchOne(html, /<meta\s+name="description"\s+content="([^"]+)"\s*\/?\s*>/gi, "meta description", file);
  const canonical = matchOne(html, /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?\s*>/gi, "canonical", file);
  matchOne(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi, "H1", file);

  if (titles.has(title)) fail(`Duplicate title: ${title}`);
  if (descriptions.has(description)) fail(`Duplicate meta description: ${description}`);
  if (canonicals.has(canonical)) fail(`Duplicate canonical: ${canonical}`);
  titles.add(title);
  descriptions.add(description);
  canonicals.add(canonical);

  const expectedCanonical = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
  if (canonical !== expectedCanonical) fail(`${file} canonical should be ${expectedCanonical}; found ${canonical}.`);
  if (/noindex/i.test(html)) fail(`${file} contains a noindex directive.`);
  if (!html.includes("G-LTL4JXMYP2")) fail(`${file} is missing GA4.`);
  if (!html.includes("aitech-consent-bootstrap")) fail(`${file} is missing Consent Mode bootstrap.`);
  if (!html.includes("/script.js")) fail(`${file} is missing the shared browser script.`);
  if (!html.includes("/_next/static/")) fail(`${file} is missing Next.js assets.`);

  if (!["strategy", "legal"].includes(type) && !html.includes('href="/free-strategy-call/"')) {
    fail(`${file} is missing the primary strategy-call CTA.`);
  }
  const internalLinks = (html.match(/href="\/(?!\/|#)[^"]*"/g) || []).length;
  if (internalLinks < 3) fail(`${file} should contain at least three internal links.`);

  if (type === "service") {
    for (const section of ["Problem", "Solution", "Benefits", "Use cases", "FAQ", "Book a Free Strategy Call"]) {
      if (!new RegExp(section, "i").test(html)) fail(`${file} is missing service section: ${section}`);
    }
    if (wordCount(html) < 550) fail(`${file} is too thin; expected at least 550 rendered words.`);
  }
  if (type === "article" && wordCount(html) < 450) fail(`${file} is too thin; expected at least 450 rendered words.`);
}

const sitemap = readOutput("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = pages.map(([route]) => (route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`));
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) {
  fail("Sitemap URLs do not match the 21 exported public routes in order.");
}

const robots = readOutput("robots.txt");
for (const directive of ["User-agent: *", "Allow: /", `Sitemap: ${siteUrl}/sitemap.xml`]) {
  if (!robots.includes(directive)) fail(`robots.txt is missing: ${directive}`);
}

const htaccess = readOutput(".htaccess");
for (const marker of [
  "^aitechinnovations\\.com$",
  "https://www.aitechinnovations.com%{REQUEST_URI}",
  "RewriteRule ^about\\.html$ /about/",
  "Strict-Transport-Security",
  "Content-Security-Policy",
  "https://*.supabase.co",
  "api/knowledge",
]) {
  if (!htaccess.includes(marker)) fail(`.htaccess is missing: ${marker}`);
}
if (/no-store/i.test(htaccess)) fail(".htaccess should not use no-store for HTML pages.");

const script = readOutput("script.js");
for (const eventName of ["whatsapp_click", "email_click", "calendar_booking_click", "quote_cta_click", "generate_lead"]) {
  if (!script.includes(eventName)) fail(`script.js is missing analytics event: ${eventName}`);
}
for (const feature of ["/api/chatbot.php", "aitech_cookie_consent", "aitech_campaign_attribution", "data-cookie-accept", "data-cookie-reject"]) {
  if (!script.includes(feature)) fail(`script.js is missing required feature: ${feature}`);
}

for (const feature of [
  "window.aitechSupabaseConfig",
  "validateLeadForm",
  "insertLeadIntoSupabase",
  "invokeLeadEmailFunction",
  "/rest/v1/leads",
  "/functions/v1/send-lead-email",
  'endsWith("/rest/v1")',
  "crypto.randomUUID()",
  'status: "New"',
  "We could not save your request",
]) {
  if (!script.includes(feature)) fail(`script.js is missing Supabase lead feature: ${feature}`);
}

const strategyHandler = script.slice(script.indexOf('strategyForm?.addEventListener("submit"'));
const validationIndex = strategyHandler.indexOf("validateLeadForm");
const supabaseIndex = strategyHandler.indexOf("await insertLeadIntoSupabase");
const emailIndex = strategyHandler.indexOf("await invokeLeadEmailFunction");
const sheetsIndex = strategyHandler.indexOf("await fetch(GOOGLE_SHEETS_ENDPOINT");
if (
  validationIndex < 0 ||
  supabaseIndex < 0 ||
  emailIndex < 0 ||
  sheetsIndex < 0 ||
  !(validationIndex < supabaseIndex && supabaseIndex < emailIndex && emailIndex < sheetsIndex)
) {
  fail("Strategy form must validate, insert into Supabase, invoke lead email, then continue to Google Sheets in that order.");
}

const landing = readOutput("website-design-for-service-businesses/index.html");
for (const text of ["Turn more website visitors into useful enquiries", "From £499", "data-strategy-form", "paid_landing_page"]) {
  if (!landing.includes(text)) fail(`Paid landing page is missing: ${text}`);
}

const homepage = readOutput("index.html");
if (!homepage.includes("window.aitechSupabaseConfig")) {
  fail("Homepage is missing the static Supabase browser configuration.");
}
if (/service_role/i.test(homepage)) fail("Homepage must not expose a Supabase service-role key.");
for (const marker of [
  'id="homepage-strategy-form"',
  'data-form-name="homepage_strategy_form"',
  'data-lead-source="homepage_form"',
  'data-analytics-location="homepage_form"',
  "Request your free strategy call.",
]) {
  if (!homepage.includes(marker)) fail(`Homepage strategy form is missing: ${marker}`);
}

if (failed) process.exit(1);
console.log(`Next.js static export check passed for ${pages.length} public routes.`);
