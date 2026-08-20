import { NextRequest, NextResponse } from "next/server";
import { getAnalyticsEvents, getAnalyticsSummary } from "@/lib/analytics";
import { assertValidOrigin, checkRateLimit, getClientIp, jsonError, verifyAdminRequest } from "@/lib/security";

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

  const events = await getAnalyticsEvents();

  return NextResponse.json({
    events,
    summary: getAnalyticsSummary(events),
  }, { headers: { "Cache-Control": "no-store" } });
}
