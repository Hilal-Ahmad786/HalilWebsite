import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";
import { isDbConfigured, requireDb } from "@/db";
import { formSubmissions } from "@/db/schema";

export const runtime = "nodejs";

const NO_CONTENT = new Response(null, { status: 204 });
const ALLOWED_FORMS = new Set(["quote_form", "quick_contact_form", "contact_form"]);

function hashIp(ip: string) {
  const pepper = process.env.CLICK_PEPPER || "click-pepper";
  return createHmac("sha256", pepper).update(ip).digest("hex").slice(0, 16);
}

function clientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "";
}

const s = (v: unknown, max: number) =>
  typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;

export async function POST(req: NextRequest) {
  if (!isDbConfigured) return NO_CONTENT;

  let body: Record<string, unknown> = {};
  try {
    const t = await req.text();
    body = t ? JSON.parse(t) : {};
  } catch {
    return NO_CONTENT;
  }

  // Honeypot: real users never fill the hidden "website" field
  if (typeof body.website === "string" && body.website.trim()) return NO_CONTENT;

  const formName = String(body.formName ?? "").trim();
  const name = s(body.name, 100);
  const phone = s(body.phone, 30);
  if (!ALLOWED_FORMS.has(formName) || !name || !phone) return NO_CONTENT;

  const ip = clientIp(req);

  try {
    await requireDb().insert(formSubmissions).values({
      formName,
      name,
      phone,
      service: s(body.service, 50),
      brand: s(body.brand, 60),
      model: s(body.model, 60),
      year: s(body.year, 8),
      fuel: s(body.fuel, 20),
      damage: s(body.damage, 1000),
      message: s(body.message, 1000),
      contactMethod: s(body.contactMethod, 20),
      pageUrl: s(body.path, 500),
      sessionId: s(body.sessionId, 100),
      ipHash: ip && ip !== "0.0.0.0" ? hashIp(ip) : null,
      gclid: s(body.gclid, 200),
      utmSource: s(body.utmSource, 100),
      utmMedium: s(body.utmMedium, 100),
      utmCampaign: s(body.utmCampaign, 150),
    });
  } catch (e) {
    console.error("[track/form]", e instanceof Error ? e.message : e);
  }

  return NO_CONTENT;
}
