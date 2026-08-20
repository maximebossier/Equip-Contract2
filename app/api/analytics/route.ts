import { NextRequest, NextResponse } from "next/server";
import { addAnalyticsEvent, type AnalyticsEventType } from "@/lib/analytics";
import {
  checkRateLimit,
  getClientIp,
  hasAllowedContentLength,
  jsonError,
  MAX_ANALYTICS_BODY_BYTES,
  sanitizePath,
  sanitizeScreen,
  sanitizeText,
  sanitizeUrl,
  sanitizeVisitorId,
} from "@/lib/security";

const validTypes: AnalyticsEventType[] = ["page_view", "section_view", "catalog_download"];

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`analytics:${ip}`, 80, 60 * 1000);

  if (!rate.allowed) {
    return jsonError("Too many requests.", 429, rate.retryAfter);
  }

  if (!hasAllowedContentLength(request, MAX_ANALYTICS_BODY_BYTES)) {
    return jsonError("Request body too large.", 413);
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object" || !validTypes.includes(body.type)) {
    return jsonError("Invalid event.", 400);
  }

  await addAnalyticsEvent({
    type: body.type,
    path: sanitizePath(body.path),
    section: body.section ? sanitizeText(body.section, 80) : undefined,
    visitorId: sanitizeVisitorId(body.visitorId),
    referrer: sanitizeUrl(body.referrer),
    userAgent: sanitizeText(request.headers.get("user-agent"), 240) || undefined,
    ip,
    language: body.language ? sanitizeText(body.language, 32) : undefined,
    screen: sanitizeScreen(body.screen),
  });

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
