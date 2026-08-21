import fs from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { addAnalyticsEvent } from "@/lib/analytics";
import { checkRateLimit, getClientIp, jsonError, sanitizeText, sanitizeUrl, sanitizeVisitorId } from "@/lib/security";
import { getSiteContent } from "@/lib/siteContent";

export async function GET(request: NextRequest) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`catalog:${ip}`, 20, 60 * 1000);

  if (!rate.allowed) {
    return jsonError("Too many requests.", 429, rate.retryAfter);
  }

  const content = await getSiteContent();
  const catalogFile = content.es.catalog.file || "/catalogo-equip-contract.pdf";
  const normalizedFile = normalizeCatalogFile(catalogFile);

  if (!normalizedFile) {
    return jsonError("Invalid catalog path.", 400);
  }

  const publicRoot = path.join(process.cwd(), "public");
  const publicPath = path.join(publicRoot, normalizedFile);
  const resolvedPath = path.resolve(publicPath);
  const canTrackDownload = request.nextUrl.searchParams.get("analytics") === "1";
  const visitorId = sanitizeVisitorId(request.nextUrl.searchParams.get("visitorId"));

  if (!resolvedPath.startsWith(path.resolve(publicRoot) + path.sep)) {
    return jsonError("Invalid catalog path.", 400);
  }

  if (canTrackDownload) {
    await addAnalyticsEvent({
      type: "catalog_download",
      path: `/${normalizedFile}`,
      visitorId,
      referrer: sanitizeUrl(request.headers.get("referer")),
      userAgent: sanitizeText(request.headers.get("user-agent"), 240) || undefined,
      ip,
    });
  }

  try {
    await fs.access(publicPath);
  } catch {
    return new NextResponse("Catalogo no disponible todavia.", { status: 404 });
  }

  return NextResponse.redirect(new URL(`/${normalizedFile}`, request.url));
}

function normalizeCatalogFile(catalogFile: string) {
  const normalizedFile = catalogFile.startsWith("/") ? catalogFile.slice(1) : catalogFile;

  if (
    normalizedFile.includes("..") ||
    normalizedFile.includes("\\") ||
    normalizedFile.startsWith("/") ||
    !/^[a-zA-Z0-9/_ .-]+\.pdf$/.test(normalizedFile)
  ) {
    return null;
  }

  return normalizedFile;
}
