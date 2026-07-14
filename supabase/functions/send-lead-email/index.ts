import { withSupabase } from "@supabase/server";

import {
  type LeadEmail,
  type LeadPayload,
  buildAdminEmail,
  buildCustomerEmail,
} from "./email-content.ts";

const resendEndpoint = "https://api.resend.com/emails";
const resendFrom = "AITech Innovations <support@aitechinnovations.com>";

async function sendEmail(email: LeadEmail, resendApiKey: string) {
  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFrom,
      to: [email.to],
      reply_to: "support@aitechinnovations.com",
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Resend request failed with status ${response.status}: ${JSON.stringify(result)}`);
  }

  return result;
}

const handler = withSupabase({ auth: "publishable" }, async (req, context) => {
  try {
    if (req.method !== "POST") {
      return Response.json({ success: false, error: "Method not allowed." }, { status: 405 });
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return Response.json({ success: false, error: "Email delivery is not configured." }, { status: 500 });
    }

    const requestedLead = (await req.json()) as LeadPayload;

    if (!requestedLead.id) {
      return Response.json({ success: false, error: "Missing lead ID." }, { status: 400 });
    }

    const leadResult = await context.supabaseAdmin
      .from("leads")
      .select("id, name, business, email, phone, service, website, budget, timeline, source, message")
      .eq("id", requestedLead.id)
      .single();
    const lead = leadResult.data as LeadPayload | null;

    if (leadResult.error || !lead?.email) {
      console.error("Lead lookup failed:", leadResult.error);
      return Response.json({ success: false, error: "Saved lead was not found." }, { status: 404 });
    }

    const [adminResult, customerResult] = await Promise.all([
      sendEmail(buildAdminEmail(lead), resendApiKey),
      sendEmail(buildCustomerEmail(lead), resendApiKey),
    ]);

    return Response.json({
      success: true,
      message: "Lead emails sent.",
      emailIds: [adminResult.id, customerResult.id].filter(Boolean),
    });
  } catch (error) {
    console.error("send-lead-email error:", error);

    return Response.json({ success: false, error: "Failed to send lead emails." }, { status: 500 });
  }
});

const edgeFunction = {
  fetch: handler,
};

export default edgeFunction;
