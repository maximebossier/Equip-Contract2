import fs from "fs/promises";
import path from "path";

export type AnalyticsEventType = "page_view" | "section_view" | "catalog_download";

export type AnalyticsEvent = {
  id: string;
  type: AnalyticsEventType;
  path: string;
  section?: string;
  visitorId: string;
  referrer?: string;
  userAgent?: string;
  ip?: string;
  language?: string;
  screen?: string;
  createdAt: string;
};

const analyticsPath = path.join(process.cwd(), "data", "analytics-events.json");

export async function getAnalyticsEvents(): Promise<AnalyticsEvent[]> {
  try {
    const file = await fs.readFile(analyticsPath, "utf8");
    return JSON.parse(file) as AnalyticsEvent[];
  } catch {
    return [];
  }
}

export async function addAnalyticsEvent(event: Omit<AnalyticsEvent, "id" | "createdAt">) {
  const events = await getAnalyticsEvents();
  const nextEvent: AnalyticsEvent = {
    ...event,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const nextEvents = [nextEvent, ...events].slice(0, 1000);

  await fs.mkdir(path.dirname(analyticsPath), { recursive: true });
  await fs.writeFile(analyticsPath, `${JSON.stringify(nextEvents, null, 2)}\n`, "utf8");

  return nextEvent;
}

export function getAnalyticsSummary(events: AnalyticsEvent[]) {
  const visitors = new Set(events.map((event) => event.visitorId));
  const pageViews = events.filter((event) => event.type === "page_view");
  const sectionViews = events.filter((event) => event.type === "section_view");
  const downloads = events.filter((event) => event.type === "catalog_download");
  const paths = countBy(pageViews.map((event) => event.path));
  const sections = countBy(sectionViews.map((event) => event.section || "Sin sección"));
  const referrers = countBy(pageViews.map((event) => event.referrer || "Directo"));

  return {
    downloads: downloads.length,
    paths,
    referrers,
    sections,
    totalEvents: events.length,
    uniqueVisitors: visitors.size,
    visits: pageViews.length,
  };
}

function countBy(values: string[]) {
  return values.reduce<Record<string, number>>((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}
