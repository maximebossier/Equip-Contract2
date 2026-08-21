import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/admin", "/api/", "/login", "/panel", "/private"],
    },
    sitemap: "https://equipcontract.com/sitemap.xml",
    host: "https://equipcontract.com",
  };
}
