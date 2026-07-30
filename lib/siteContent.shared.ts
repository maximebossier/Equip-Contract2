import defaultSiteContent from "@/data/site-content.json";

export type SiteContent = typeof defaultSiteContent;
export type SiteLanguage = keyof SiteContent;

export function getDefaultSiteContent(): SiteContent {
  return defaultSiteContent;
}
