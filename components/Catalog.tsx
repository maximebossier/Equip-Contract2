"use client";

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

  return (
    <MotionSection
      id="catalogo"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75 }}
      className="bg-[#151914] py-16 md:py-40"
    >
      <div className="section-shell">
        <div className="grid gap-5 rounded-md border border-fern/18 bg-[radial-gradient(circle_at_82%_20%,rgba(149,200,61,0.16),transparent_24rem),linear-gradient(135deg,rgba(149,200,61,0.11),rgba(15,18,16,0.96)_42%,rgba(17,20,17,0.98))] p-5 shadow-premium md:gap-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{t.catalog.eyebrow}</p>
            <h2 className="mt-3 text-[1.9rem] font-semibold leading-tight text-[#f8f8f4] min-[390px]:text-[2.05rem] md:mt-5 md:text-5xl">{t.catalog.title}</h2>
            <p className="mt-4 text-base leading-7 text-stone/66 md:mt-5 md:text-lg md:leading-8">{t.catalog.subtitle}</p>
          </div>
          <a
            href="/api/catalog/download"
            onClick={(event) => {
              event.currentTarget.href = `/api/catalog/download?visitorId=${encodeURIComponent(getVisitorId())}`;
            }}
            className="premium-button inline-flex items-center justify-center rounded-md bg-fern px-5 py-3.5 text-sm font-bold text-graphite hover:bg-[#a9dd52] md:px-6 md:py-4"
          >
            {t.catalog.button}
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
