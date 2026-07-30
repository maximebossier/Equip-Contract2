import { NextRequest, NextResponse } from "next/server";
import { getAnalyticsEvents, getAnalyticsSummary } from "@/lib/analytics";

function isAuthorized(request: NextRequest) {
  const configuredPassword = process.env.ADMIN_PASSWORD || "equipcontract-admin";
  return request.headers.get("x-admin-password") === configuredPassword;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const events = await getAnalyticsEvents();

  return NextResponse.json({
    events,
    summary: getAnalyticsSummary(events),
  });
}
