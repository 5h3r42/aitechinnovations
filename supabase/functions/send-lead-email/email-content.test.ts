import assert from "node:assert/strict";
import test from "node:test";

import {
  ADMIN_EMAIL,
  CUSTOMER_SUBJECT,
  buildAdminEmail,
  buildCustomerEmail,
} from "./email-content.ts";

const lead = {
  id: "lead-123",
  name: "Alex & Sam",
  business: "Example <Studio>",
  email: "alex@example.com",
  phone: "07123 456789",
  service: "Website & Content",
  website: "https://example.com",
  budget: "£750 - £1,499",
  timeline: "Within 30 days",
  source: "homepage_form",
  message: "First line\nSecond <line>",
};

test("admin email includes every required lead field and escapes HTML", () => {
  const email = buildAdminEmail(lead);

  assert.equal(email.to, ADMIN_EMAIL);
  assert.match(email.subject, /Example <Studio>/);
  for (const value of [
    "lead-123",
    "Alex &amp; Sam",
    "Example &lt;Studio&gt;",
    "alex@example.com",
    "07123 456789",
    "Website &amp; Content",
    "https://example.com",
    "£750 - £1,499",
    "Within 30 days",
    "homepage_form",
    "First line\nSecond &lt;line&gt;",
  ]) {
    assert.ok(email.html.includes(value), `missing ${value}`);
  }
});

test("customer email uses the required subject, service, booking link, and signature", () => {
  const email = buildCustomerEmail(lead);

  assert.equal(email.to, lead.email);
  assert.equal(email.subject, CUSTOMER_SUBJECT);
  assert.match(email.html, /Hi Alex &amp; Sam,/);
  assert.match(email.html, /received your enquiry about Website &amp; Content/);
  assert.match(email.html, /follow up within one business day/);
  assert.match(email.html, /calendar\.google\.com\/calendar/);
  assert.match(email.html, /Sheraz Khalid/);
  assert.match(email.html, /support@aitechinnovations\.com/);
});
