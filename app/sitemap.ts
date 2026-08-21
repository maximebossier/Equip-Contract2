import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://equipcontract.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: "https://equipcontract.com",
          en: "https://equipcontract.com?lang=en",
        },
      },
    },
  ];
}
