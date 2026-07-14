import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");
const page = read("content/pages/ai-receptionist-for-accountants.html");
const routes = read("lib/site-pages.ts");
const script = read("public/script.js");
const widget = read("public/ai-chat-widget.js");

test("registers the accountant receptionist route with its canonical metadata and schema", () => {
  assert.match(routes, /"ai-receptionist-for-accountants"/);
  assert.match(page, /<title>AI Receptionist for Accountants \| AITech Innovations<\/title>/);
  assert.match(page, /https:\/\/www\.aitechinnovations\.com\/ai-receptionist-for-accountants/);
  assert.match(page, /"@type":"Service"/);
  assert.match(page, /"@type":"FAQPage"/);
  assert.match(page, /"@type":"BreadcrumbList"/);
});

test("uses the accountant demo as a tracked secondary destination", () => {
  const demoLinks = page.match(/href="https:\/\/accountant\.aitechinnovations\.com/g) || [];
  assert.equal(demoLinks.length, 4);
  assert.match(script, /trackEvent\("view_demo", \{ industry, location \}\)/);
});

test("keeps the landing form on the shared AI Platform CRM path", () => {
  assert.match(page, /data-form-name="accountant_ai_receptionist_landing"/);
  assert.match(page, /data-lead-type="accountant_ai_receptionist"/);
  assert.match(page, /data-lead-source="website"/);
  assert.match(page, /data-submission-source="website"/);
  assert.match(script, /const submissionSource = strategyForm\.dataset\.submissionSource \|\| "strategy_call"/);
  assert.match(script, /source: submissionSource/);
  assert.match(script, /attribution: campaignAttribution/);
  assert.match(script, /if \(response\.status !== 201 \|\| body\?\.success !== true \|\| body\?\.data\?\.status !== "submitted"\)/);
  const strategyHandler = script.slice(script.indexOf('strategyForm?.addEventListener("submit"'));
  assert.ok(strategyHandler.indexOf("await submitAiPlatformEnquiry") < strategyHandler.lastIndexOf("trackStrategyLead();"));
});

test("keeps conversion analytics consent-gated and free of lead PII", () => {
  assert.match(script, /localStorage\.getItem\(COOKIE_CONSENT_KEY\) !== "accepted"/);
  assert.match(script, /trackEvent\("form_started"/);
  assert.match(script, /trackEvent\("generate_lead"/);
  const leadTracker = script.slice(script.indexOf("function trackGenerateLead"), script.indexOf("function trackChatbotLead"));
  assert.doesNotMatch(leadTracker, /\b(?:email|phone|business|message)\b/i);
});

test("retains chat and booking event support and clears the mobile CTA bar", () => {
  for (const eventName of ["chat_started", "chat_qualified_lead", "booking_request"]) {
    assert.match(widget, new RegExp(`"${eventName}"`));
  }
  assert.match(widget, /\.launcher \{ right:12px; bottom:84px; \}/);
});
