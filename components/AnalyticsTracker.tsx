"use client";

import { useEffect } from "react";
import { useCookieConsent } from "./CookieConsent";

function getVisitorId() {
  const key = "equipcontract_visitor_id";
  const existing = window.localStorage.getItem(key);

  if (existing) return existing;

  const visitorId = crypto.randomUUID();
  window.localStorage.setItem(key, visitorId);
  return visitorId;
}

function track(type: "page_view" | "section_view", section?: string) {
  const visitorId = getVisitorId();
  const payload = JSON.stringify({
    type,
    section,
    visitorId,
    path: `${window.location.pathname}${window.location.hash}`,
    referrer: document.referrer,
    language: navigator.language,
    screen: `${window.screen.width}x${window.screen.height}`,
  });

  if (navigator.sendBeacon) {
    const sent = navigator.sendBeacon("/api/analytics", new Blob([payload], { type: "application/json" }));
    if (sent) return;
  }

  void fetch("/api/analytics", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: payload,
  }).catch(() => {});
}

export function AnalyticsTracker() {
  const { consent, hasChoice } = useCookieConsent();

  useEffect(() => {
    if (!hasChoice || !consent.analytics) return;

    track("page_view");

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id], footer"));
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target.id || "footer";
          if (seen.has(section)) return;

          seen.add(section);
          track("section_view", section);
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [consent.analytics, hasChoice]);

  return null;
}
