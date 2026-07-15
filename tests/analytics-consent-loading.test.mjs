import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");
const layout = read("app/layout.tsx");
const script = read("public/script.js");

test("defers GA4 loading until the visitor explicitly accepts analytics", () => {
  assert.doesNotMatch(layout, /googletagmanager\.com\/gtag\/js/);
  assert.doesNotMatch(layout, /aitech-consent-bootstrap/);
  assert.match(script, /const GA_MEASUREMENT_ID = "G-LTL4JXMYP2"/);
  assert.match(script, /function initializeGoogleAnalytics\(\)/);
  assert.match(script, /script\.src = `https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=\$\{GA_MEASUREMENT_ID\}`/);
  assert.match(script, /if \(savedChoice === "accepted"\) \{[\s\S]*initializeGoogleAnalytics\(\)/);
});

test("keeps analytics calls consent-gated while CRM attribution remains first-party", () => {
  assert.match(script, /localStorage\.getItem\(COOKIE_CONSENT_KEY\) !== "accepted"/);
  assert.match(script, /attribution: campaignAttribution/);
  assert.match(script, /await submitAiPlatformEnquiry/);
  const leadTracker = script.slice(script.indexOf("function trackGenerateLead"), script.indexOf("function trackChatbotLead"));
  assert.doesNotMatch(leadTracker, /\b(?:email|phone|business|message)\b/i);
});
