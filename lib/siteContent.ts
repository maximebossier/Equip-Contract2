import fs from "fs/promises";
import path from "path";
import { getDefaultSiteContent, type SiteContent } from "@/lib/siteContent.shared";

const contentPath = path.join(process.cwd(), "data", "site-content.json");

export async function getSiteContent(): Promise<SiteContent> {
  const defaultSiteContent = getDefaultSiteContent();

  try {
    const file = await fs.readFile(contentPath, "utf8");
    return JSON.parse(file) as SiteContent;
  } catch {
    return defaultSiteContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  await fs.mkdir(path.dirname(contentPath), { recursive: true });
  await fs.writeFile(contentPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}
