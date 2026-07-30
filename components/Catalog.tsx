"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { MotionSection } from "./Motion";

function getVisitorId() {
  const key = "equipcontract_visitor_id";
  const existing = window.localStorage.getItem(key);

  if (existing) return existing;

  const visitorId = crypto.randomUUID();
  window.localStorage.setItem(key, visitorId);
  return visitorId;
}

export function Catalog() {
  const { t } = useLanguage();
  const [visitorId, setVisitorId] = useState("unknown");

  useEffect(() => {
    setVisitorId(getVisitorId());
  }, []);

  return (
    <MotionSection
      id="catalogo"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75 }}
      className="bg-[#151914] py-28 md:py-40"
    >
      <div className="section-shell">
        <div className="grid gap-8 rounded-md border border-fern/18 bg-[radial-gradient(circle_at_82%_20%,rgba(149,200,61,0.16),transparent_24rem),linear-gradient(135deg,rgba(149,200,61,0.11),rgba(15,18,16,0.96)_42%,rgba(17,20,17,0.98))] p-8 shadow-premium md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{t.catalog.eyebrow}</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f8f8f4] md:text-5xl">{t.catalog.title}</h2>
            <p className="mt-5 text-lg leading-8 text-stone/66">{t.catalog.subtitle}</p>
          </div>
          <a
            href={`/api/catalog/download?visitorId=${encodeURIComponent(visitorId)}`}
            className="premium-button inline-flex rounded-md bg-fern px-6 py-4 text-sm font-bold text-graphite hover:bg-[#a9dd52]"
          >
            {t.catalog.button}
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
