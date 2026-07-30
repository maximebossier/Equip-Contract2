import { NextRequest, NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/siteContent";
import type { SiteContent } from "@/lib/siteContent.shared";

function isAuthorized(request: NextRequest) {
  const configuredPassword = process.env.ADMIN_PASSWORD || "equipcontract-admin";
  return request.headers.get("x-admin-password") === configuredPassword;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await getSiteContent());
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = (await request.json()) as SiteContent;
  await saveSiteContent(content);

  return NextResponse.json({ ok: true });
}
