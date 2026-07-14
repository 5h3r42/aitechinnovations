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
  ["/ai-receptionist-for-accountants/", "ai-receptionist-for-accountants/index.html", "accountant"],
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
    for (const section of ["Problem", "Solution", "Benefits", "Use cases", "FAQ", "Book a free 20-minute strategy call"]) {
      if (!new RegExp(section, "i").test(html)) fail(`${file} is missing service section: ${section}`);
    }
    if (wordCount(html) < 550) fail(`${file} is too thin; expected at least 550 rendered words.`);
  }
  if (type === "article" && wordCount(html) < 450) fail(`${file} is too thin; expected at least 450 rendered words.`);
  if (type === "accountant") {
    for (const marker of [
      "Never miss another accountancy enquiry",
      "A controlled route from website question to staff follow-up",
      "How it works",
      "Accountancy use cases",
      "Safeguards and handover",
      "AI Receptionist Pilot",
      "Questions about an AI receptionist for accountants",
      "data-strategy-form",
      "data-form-name=\"accountant_ai_receptionist_landing\"",
      "data-lead-type=\"ai_receptionist_existing_website\"",
      "data-lead-source=\"website\"",
      "data-submission-source=\"website\"",
      "https://accountant.aitechinnovations.com",
    ]) {
      if (!html.includes(marker)) fail(`${file} is missing accountant receptionist content: ${marker}`);
    }
    if (wordCount(html) < 900) fail(`${file} is too thin; expected at least 900 rendered words.`);
    if ((html.match(/https:\/\/accountant\.aitechinnovations\.com/g) || []).length < 3) {
      fail(`${file} should include the accountant demo CTA in each intended campaign location.`);
    }
  }
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
  "https://app.aitechinnovations.com",
  "https://*.supabase.co",
  "api/knowledge",
]) {
  if (!htaccess.includes(marker)) fail(`.htaccess is missing: ${marker}`);
}
if (/no-store/i.test(htaccess)) fail(".htaccess should not use no-store for HTML pages.");

const script = readOutput("script.js");
for (const eventName of ["click_whatsapp", "click_email", "click_phone", "calendar_booking_click", "view_demo", "form_started", "quote_cta_click", "generate_lead"]) {
  if (!script.includes(eventName)) fail(`script.js is missing analytics event: ${eventName}`);
}
for (const feature of ["/api/chatbot.php", "aitech_cookie_consent", "aitech_campaign_attribution", "data-cookie-accept", "data-cookie-reject"]) {
  if (!script.includes(feature)) fail(`script.js is missing required feature: ${feature}`);
}

for (const feature of [
  "window.aitechSupabaseConfig",
  "validateLeadForm",
  "AI_PLATFORM_API_URL",
  "submitAiPlatformEnquiry",
  "http://localhost:3000/api/public/enquiries",
  "https://ai-platform-topaz-nine.vercel.app/api/public/enquiries",
  'businessSlug: "aitech-innovations"',
  'data?.status !== "submitted"',
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
const aiPlatformSubmitIndex = strategyHandler.indexOf("await submitAiPlatformEnquiry");
if (validationIndex < 0 || aiPlatformSubmitIndex < 0 || validationIndex >= aiPlatformSubmitIndex) {
  fail("Strategy form must validate before submitting the enquiry to AI Platform.");
}
if (
  strategyHandler.includes("await insertLeadIntoSupabase") ||
  strategyHandler.includes("await invokeLeadEmailFunction") ||
  strategyHandler.includes("await fetch(GOOGLE_SHEETS_ENDPOINT") ||
  strategyHandler.includes("fetch(FORM_ENDPOINT)")
) {
  fail("Strategy form must not use the legacy Supabase, email, Google Sheets, or FormSubmit workflow.");
}
for (const feature of [
  'const submissionSource = strategyForm.dataset.submissionSource || "strategy_call"',
  "source: submissionSource",
  "Lead type: ${leadType}",
  "Lead source: ${leadSource}",
]) {
  if (!strategyHandler.includes(feature)) fail(`Strategy form is missing accountant-safe CRM metadata support: ${feature}`);
}
if (strategyHandler.indexOf("await submitAiPlatformEnquiry") > strategyHandler.lastIndexOf("trackStrategyLead();")) {
  fail("Strategy form must not track a lead before a successful CRM submission.");
}

const landing = readOutput("website-design-for-service-businesses/index.html");
for (const text of ["Turn more website visitors into useful enquiries", "Website and AI receptionist pricing", "data-strategy-form", "paid_landing_page"]) {
  if (!landing.includes(text)) fail(`Paid landing page is missing: ${text}`);
}

const homepage = readOutput("index.html");
if (!homepage.includes("/script.js?v=20260714-client-acquisition-analytics")) {
  fail("Homepage is missing the current shared-script cache key.");
}
if (!homepage.includes("window.aitechSupabaseConfig")) {
  fail("Homepage is missing the static Supabase browser configuration.");
}
if (/service_role/i.test(homepage)) fail("Homepage must not expose a Supabase service-role key.");
const homepagePricingSection = homepage.match(/<section[^>]*id="pricing"[^>]*>[\s\S]*?<\/section>/i)?.[0] ?? "";
if ((homepage.match(/id="pricing"/g) ?? []).length !== 1) fail("Homepage must contain exactly one pricing section.");
if ((homepagePricingSection.match(/<article class="detailed-price-card/g) ?? []).length !== 3) {
  fail("Homepage pricing must contain exactly three package cards.");
}
for (const marker of ["WEBSITE &amp; AI RECEPTIONIST PRICING", "AI Receptionist Pilot", "Setup from £495", "Then from £149/month", "Website + Managed AI Receptionist", "£1,995–£3,995 setup", "Fully Client-Owned Website and AI System", "From £4,000–£8,000+", "OpenAI usage within fair-use limits"]) {
  if (!homepagePricingSection.includes(marker)) fail(`Homepage pricing is missing: ${marker}`);
}
if (/Website Starter|Lead Generation Website|Industry Demo-Style Website|From £499|From £995|From £1,495/i.test(homepagePricingSection)) {
  fail("Homepage pricing contains an outdated or conflicting package.");
}

const accountantLanding = readOutput("ai-receptionist-for-accountants/index.html");
for (const marker of [
  "AI Receptionist Pricing for Accountants UK | AITech Innovations",
  "https://www.aitechinnovations.com/ai-receptionist-for-accountants/",
  'type="application/ld+json"',
  'data-form-name="accountant_ai_receptionist_landing"',
  'data-lead-type="ai_receptionist_existing_website"',
  'data-lead-source="website"',
  'data-submission-source="website"',
  "No automatic financial or tax advice",
  "Setup from £495",
  "Then from £149/month",
  "Recommended for most small businesses",
  "https://accountant.aitechinnovations.com",
]) {
  if (!accountantLanding.includes(marker)) fail(`Accountant receptionist landing page is missing: ${marker}`);
}
if ((accountantLanding.match(/href="https:\/\/accountant\.aitechinnovations\.com/g) || []).length !== 4) {
  fail("Accountant receptionist landing page should include exactly four demo CTA links, including the mobile action.");
}
const generateLeadTracker = script.slice(script.indexOf("function trackGenerateLead"), script.indexOf("function trackChatbotLead"));
if (/\b(?:email|phone|business|message)\b/i.test(generateLeadTracker)) {
  fail("Strategy analytics handler must not add form PII to GA4 parameters.");
}
for (const marker of [
  'id="homepage-strategy-form"',
  'data-form-name="homepage_strategy_form"',
  'data-lead-source="homepage_form"',
  'data-analytics-location="homepage_form"',
  "Book your free 20-minute strategy call.",
]) {
  if (!homepage.includes(marker)) fail(`Homepage strategy form is missing: ${marker}`);
}

if (failed) process.exit(1);
console.log(`Next.js static export check passed for ${pages.length} public routes.`);
