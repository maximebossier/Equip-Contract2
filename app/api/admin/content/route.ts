import { NextRequest, NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/siteContent";
import { sanitizeSiteContent } from "@/lib/siteContent.shared";
import {
  assertValidOrigin,
  checkRateLimit,
  getClientIp,
  hasAllowedContentLength,
  jsonError,
  MAX_ADMIN_BODY_BYTES,
  verifyAdminRequest,
} from "@/lib/security";

function guardAdminRequest(request: NextRequest) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`admin:${ip}`, 20, 15 * 60 * 1000);

  if (!rate.allowed) {
    return jsonError("Too many attempts.", 429, rate.retryAfter);
  }

  if (!assertValidOrigin(request)) {
    return jsonError("Invalid origin.", 403);
  }

  const auth = verifyAdminRequest(request);

  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  return null;
}

export async function GET(request: NextRequest) {
  const blocked = guardAdminRequest(request);
  if (blocked) return blocked;

  return NextResponse.json(await getSiteContent(), {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function PUT(request: NextRequest) {
  const blocked = guardAdminRequest(request);
  if (blocked) return blocked;

  if (!hasAllowedContentLength(request, MAX_ADMIN_BODY_BYTES)) {
    return jsonError("Request body too large.", 413);
  }

  const body = await request.json().catch(() => null);
  const content = sanitizeSiteContent(body);

  if (!content) {
    return jsonError("Invalid content payload.", 400);
  }

  await saveSiteContent(content);

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
