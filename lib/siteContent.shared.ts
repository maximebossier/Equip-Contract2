import defaultSiteContent from "@/data/site-content.json";

export type SiteContent = typeof defaultSiteContent;
export type SiteLanguage = keyof SiteContent;

export function getDefaultSiteContent(): SiteContent {
  return defaultSiteContent;
}

export function sanitizeSiteContent(input: unknown): SiteContent | null {
  if (!isRecord(input)) return null;

  return sanitizeAgainstTemplate(defaultSiteContent, input) as SiteContent;
}

function sanitizeAgainstTemplate(template: unknown, value: unknown): unknown {
  if (typeof template === "string") {
    return sanitizeEditableString(value, template);
  }

  if (Array.isArray(template)) {
    if (!Array.isArray(value)) return template;

    const itemTemplate = template[0];

    if (itemTemplate === undefined) {
      return value
        .filter((item): item is string => typeof item === "string")
        .slice(0, 30)
        .map((item) => sanitizeEditableString(item, ""));
    }

    return value.slice(0, 30).map((item) => sanitizeAgainstTemplate(itemTemplate, item));
  }

  if (isRecord(template)) {
    const source = isRecord(value) ? value : {};

    return Object.fromEntries(
      Object.entries(template).map(([key, childTemplate]) => [
        key,
        sanitizeAgainstTemplate(childTemplate, source[key]),
      ]),
    );
  }

  return template;
}

function sanitizeEditableString(value: unknown, fallback: string) {
  if (typeof value !== "string") return fallback;

  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 2200);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
