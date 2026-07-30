"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionSection } from "./Motion";

export function Confidentiality() {
  const { t } = useLanguage();

  return (
    <MotionSection
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-[#0b0e0c] py-28 md:py-44"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fern/55 to-transparent" />
      <div className="pointer-events-none absolute left-[10%] top-20 h-56 w-px bg-gradient-to-b from-transparent via-fern/28 to-transparent" />
      <div className="pointer-events-none absolute bottom-24 right-[12%] h-px w-56 bg-gradient-to-r from-transparent via-stone/22 to-transparent" />
      <div className="section-shell">
        <div className="premium-card relative overflow-hidden rounded-md p-8 shadow-premium md:p-14 lg:p-16">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(149,200,61,0.18),transparent_24rem)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow">{t.confidentiality.eyebrow}</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.04] text-[#f8f8f4] md:text-6xl">
                {t.confidentiality.title}
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-stone/68">
                {t.confidentiality.text}
              </p>
              <div className="mt-12 grid gap-3 text-sm text-stone/66 md:grid-cols-3">
                {t.confidentiality.badges.map((badge) => (
                  <span key={badge} className="rounded-md border border-stone/10 bg-white/[0.035] p-5 transition hover:border-fern/30 hover:text-[#f8f8f4]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-md border border-stone/10 shadow-premium">
              <img
                src="/assets/catalog/equip-confidential-nda-documents.png"
                alt="Profesionales revisando documentación confidencial y acuerdos NDA"
                loading="lazy"
                className="h-full w-full object-cover brightness-[0.92] contrast-105 saturate-[0.86]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/42 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
