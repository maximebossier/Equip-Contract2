import fs from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { addAnalyticsEvent } from "@/lib/analytics";
import { getSiteContent } from "@/lib/siteContent";

export async function GET(request: NextRequest) {
  const content = await getSiteContent();
  const catalogFile = content.es.catalog.file || "/catalogo-equip-contract.pdf";
  const normalizedFile = catalogFile.startsWith("/") ? catalogFile : `/${catalogFile}`;
  const publicPath = path.join(process.cwd(), "public", normalizedFile);
  const visitorId = request.nextUrl.searchParams.get("visitorId") || "unknown";
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined;

  await addAnalyticsEvent({
    type: "catalog_download",
    path: normalizedFile,
    visitorId,
    referrer: request.headers.get("referer") || undefined,
    userAgent: request.headers.get("user-agent") || undefined,
    ip,
  });

  try {
    await fs.access(publicPath);
  } catch {
    return new NextResponse("Catalogo no disponible todavia.", { status: 404 });
  }

  return NextResponse.redirect(new URL(normalizedFile, request.url));
}
