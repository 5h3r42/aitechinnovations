import { NextResponse } from "next/server";

// Ensure this route runs on the Node.js runtime (server-side fetch to Google Apps Script)
export const runtime = "nodejs";

// Avoid any caching for form submissions
export const dynamic = "force-dynamic";

type LeadPayload = {
  name: string;
  email: string;
  website?: string;
  businessType: string;
  mainGoal: string;
  notes?: string;
};

function toStr(v: unknown) {
  return v === undefined || v === null ? "" : String(v);
}

function hasAnyValue(obj: any) {
  if (!obj || typeof obj !== "object") return false;
  const keys = [
    "name",
    "email",
    "website",
    "businessType",
    "mainGoal",
    "goal",
    "notes",
    "note",
    "message",
    "details",
    "comments",
  ];
  return keys.some((k) => toStr(obj?.[k]).trim().length > 0);
}

export async function POST(req: Request) {
  try {
    const scriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Missing Google Apps Script URL. Set GOOGLE_SCRIPT_URL (server) or NEXT_PUBLIC_GOOGLE_SCRIPT_URL (client) in Hostinger environment variables.",
        },
        { status: 500 },
      );
    }

    // Read raw body ONCE (most reliable in App Router)
    const raw = await req.text();

    // 1) Try JSON
    let body: any = {};
    try {
      body = raw ? JSON.parse(raw) : {};
      // Support nested payloads like { data: {...} }
      if (body?.data && typeof body.data === "object") body = body.data;
    } catch {
      body = {};
    }

    // 2) Fallback: urlencoded payloads
    if (!hasAnyValue(body) && raw) {
      try {
        const params = new URLSearchParams(raw);
        const obj: any = {};
        params.forEach((v, k) => (obj[k] = v));
        body = obj;
      } catch {
        // ignore
      }
    }

    // If still empty, return a helpful debug response
    if (!hasAnyValue(body)) {
      return NextResponse.json(
        {
          success: false,
          error: "Empty request body received by /api/lead",
          debug: { raw },
        },
        { status: 400 },
      );
    }

    // Normalize to the exact shape Apps Script expects
    const payload: LeadPayload = {
      name: toStr(body?.name).trim(),
      email: toStr(body?.email).trim(),
      website: toStr(body?.website).trim(),
      businessType: toStr(body?.businessType).trim(),
      mainGoal: toStr(body?.mainGoal || body?.goal).trim(),

      // ✅ CHANGED: accept multiple possible keys for notes (including capitalized and common alternatives)
      notes: toStr(
        body?.notes ??
          body?.Notes ??
          body?.note ??
          body?.Note ??
          body?.message ??
          body?.Message ??
          body?.details ??
          body?.Details ??
          body?.comments ??
          body?.Comments,
      ).trim(),
    };

    // Keep your original basic validation (required fields)
    if (
      !payload.name ||
      !payload.email ||
      !payload.businessType ||
      !payload.mainGoal
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          received: payload,
        },
        { status: 400 },
      );
    }

    const r = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const text = await r.text();
    let data: any;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }

    if (!r.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Google Script request failed",
          details: data,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message ?? "Unexpected server error" },
      { status: 500 },
    );
  }
}
