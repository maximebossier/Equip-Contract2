import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isLocalhost = ["localhost", "127.0.0.1"].includes(request.nextUrl.hostname);

  if (process.env.NODE_ENV === "production" && forwardedProto === "http" && !isLocalhost) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/admin") || request.nextUrl.pathname.startsWith("/api/admin")) {
    response.headers.set("Cache-Control", "no-store");
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
