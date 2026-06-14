export type LeadPayload = {
  id?: string;
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  service?: string;
  website?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  source?: string;
};

export type LeadEmail = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

export const ADMIN_EMAIL = "support@aitechinnovations.com";
export const CUSTOMER_SUBJECT = "Thanks for contacting AITech Innovations";
export const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ29kmaaQThmrdewMfPksmL8AuJR67EUDytKmyhAuakCNeIRyHNRMQ8-gQc82hxmjMc2fl8jPZCr";

function clean(value?: string) {
  return String(value || "").trim();
}

function escapeHtml(value?: string) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function buildAdminEmail(lead: LeadPayload): LeadEmail {
  const subjectName = clean(lead.business) || clean(lead.name) || "Website enquiry";
  const fields = [
    ["Lead ID", lead.id],
    ["Name", lead.name],
    ["Business", lead.business],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["Website", lead.website],
    ["Budget", lead.budget],
    ["Timeline", lead.timeline],
    ["Source", lead.source],
  ];

  return {
    to: ADMIN_EMAIL,
    subject: `New Strategy Call Lead - ${subjectName.replace(/[\r\n]+/g, " ")}`,
    html: `
      <h2>New Strategy Call Lead</h2>
      <p>A new enquiry has been submitted on the AITech Innovations website.</p>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
        ${fields
          .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
          .join("\n")}
      </table>
      <h3>Full message</h3>
      <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${escapeHtml(lead.message)}</pre>
    `,
    text: [
      "New Strategy Call Lead",
      "",
      ...fields.map(([label, value]) => `${label}: ${clean(value)}`),
      "",
      "Full message:",
      clean(lead.message),
    ].join("\n"),
  };
}

export function buildCustomerEmail(lead: LeadPayload): LeadEmail {
  const name = clean(lead.name) || "there";
  const service = clean(lead.service) || "your enquiry";

  return {
    to: clean(lead.email),
    subject: CUSTOMER_SUBJECT,
    html: `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for contacting AITech Innovations.</p>
      <p>We have received your enquiry about ${escapeHtml(service)}.</p>
      <p>I will review your message and follow up within one business day.</p>
      <p>If you would like to choose a call time now, you can book here:<br />
      <a href="${BOOKING_URL}">${BOOKING_URL}</a></p>
      <p>Regards,<br />
      Sheraz Khalid<br />
      AITech Innovations<br />
      ${ADMIN_EMAIL}</p>
    `,
    text: [
      `Hi ${name},`,
      "",
      "Thank you for contacting AITech Innovations.",
      "",
      `We have received your enquiry about ${service}.`,
      "",
      "I will review your message and follow up within one business day.",
      "",
      "If you would like to choose a call time now, you can book here:",
      BOOKING_URL,
      "",
      "Regards,",
      "Sheraz Khalid",
      "AITech Innovations",
      ADMIN_EMAIL,
    ].join("\n"),
  };
}
