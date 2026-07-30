import { NextRequest, NextResponse } from "next/server";
import { addAnalyticsEvent, type AnalyticsEventType } from "@/lib/analytics";

const validTypes: AnalyticsEventType[] = ["page_view", "section_view", "catalog_download"];

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || !validTypes.includes(body.type)) {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined;

  await addAnalyticsEvent({
    type: body.type,
    path: String(body.path || "/"),
    section: body.section ? String(body.section) : undefined,
    visitorId: String(body.visitorId || "unknown"),
    referrer: body.referrer ? String(body.referrer) : undefined,
    userAgent: request.headers.get("user-agent") || undefined,
    ip,
    language: body.language ? String(body.language) : undefined,
    screen: body.screen ? String(body.screen) : undefined,
  });

  return NextResponse.json({ ok: true });
}
