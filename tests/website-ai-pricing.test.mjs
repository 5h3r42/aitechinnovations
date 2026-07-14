import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");
const home = read("content/pages/index.html");
const automation = read("content/pages/ai-automation-services.html");
const script = read("public/script.js");

test("publishes the three agreed website and AI receptionist offers", () => {
  for (const marker of [
    "Founding Client AI Receptionist Pilot",
    "£495 setup",
    "£149/month · 30-day pilot",
    "Founding-client availability: first 3–5 clients",
    "From £1,995",
    "Typical projects £2,995–£3,995",
    "From £5,000",
    "Typical projects £6,000–£10,000+",
    "Optional support £250–£750/month",
    "AI Receptionist Pilot",
    "Website + Managed AI Receptionist",
    "Fully Client-Owned Website and AI System",
  ]) {
    assert.ok(home.includes(marker), `missing homepage pricing marker: ${marker}`);
  }
  assert.doesNotMatch(home, /Website Starter|Lead Generation Website|Industry Demo-Style Website|From £499|From £995|From £1,495/);
});

test("states managed and client ownership clearly and keeps fair use bounded", () => {
  for (const marker of [
    "Managed AI Receptionist Service plans cover hosting",
    "AI usage within fair-use limits",
    "No plan includes unlimited AI usage",
    "Client-owned API configuration",
    "custom integrations",
  ]) {
    assert.ok(home.includes(marker) || automation.includes(marker), `missing pricing scope marker: ${marker}`);
  }
});

test("keeps the startup price points tied to their limited standard scopes", () => {
  for (const marker of [
    "approximately 5–7 core pages",
    "client-provided content",
    "one revision cycle",
    "highly standardised deployment",
    "without significant custom development",
    "future standard pricing is expected to be higher",
  ]) {
    assert.ok(home.includes(marker) || automation.includes(marker), `missing pricing qualifier: ${marker}`);
  }
  assert.doesNotMatch(`${home}\n${automation}`, /£4,000–£8,000\+|£1,995–£3,995 setup/);
});

test("uses the existing CRM and consent-gated analytics path with safe pricing lead types", () => {
  for (const leadType of ["ai_receptionist_existing_website", "website_managed_ai", "client_owned_ai_system"]) {
    assert.match(home, new RegExp(`package=${leadType}`));
    assert.match(script, new RegExp(`leadType: "${leadType}"`));
  }
  assert.match(script, /localStorage\.getItem\(COOKIE_CONSENT_KEY\) !== "accepted"/);
  const leadTracker = script.slice(script.indexOf("function trackGenerateLead"), script.indexOf("function trackChatbotLead"));
  assert.doesNotMatch(leadTracker, /\b(?:email|phone|business|message)\b/i);
});

test("includes a mobile-safe comparison and package CTA destinations", () => {
  assert.match(automation, /pricing-comparison/);
  assert.match(automation, /Request an AI Receptionist Pilot/);
  assert.match(automation, /Request a Website and AI Consultation/);
  assert.match(automation, /Discuss a Client-Owned Deployment/);
  const styles = read("styles.css");
  assert.match(styles, /\.pricing-comparison > div \{ display: grid; grid-template-columns: 1fr;/);
});
