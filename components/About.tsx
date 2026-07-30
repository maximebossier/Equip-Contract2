"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function About() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="empresa"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#10130f] py-16 md:py-44"
    >
      <div className="section-shell grid gap-6 md:gap-14 lg:grid-cols-[0.92fr_1fr] lg:items-start">
        <SectionIntro
          eyebrow={t.about.eyebrow}
          title={t.about.title}
        />
        <div className="border-l border-fern/20 pl-4 md:pl-7">
          <p className="text-[0.95rem] leading-7 text-stone/72 min-[390px]:text-base md:text-lg md:leading-9">
            {t.about.body[0]}
          </p>
          <p className="mt-4 text-[0.95rem] leading-7 text-stone/72 min-[390px]:text-base md:mt-6 md:text-lg md:leading-9">
            {t.about.body[1]}
          </p>
        </div>
      </div>

      <div className="section-shell mt-9 grid gap-3 md:mt-20 md:grid-cols-12 md:gap-4">
        <div className="relative h-[220px] overflow-hidden rounded-md border border-stone/10 shadow-premium min-[390px]:h-[250px] md:col-span-7 md:h-[520px]">
          <img
            src="/assets/catalog/equip-about-hospitality.webp"
            alt="Espacio hospitality con mobiliario contract fabricado para uso profesional"
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.82] contrast-110 saturate-[0.82]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/82 via-transparent to-transparent" />
        </div>
        <div className="grid gap-4 md:col-span-5">
          <div className="relative h-[180px] overflow-hidden rounded-md border border-stone/10 shadow-premium min-[390px]:h-[200px] md:h-[252px]">
            <img
              src="/assets/catalog/about-hospitality-furniture-crop.jpg"
              alt="Interior hospitality contemporáneo con mesas y sillas contract"
              loading="lazy"
              className="h-full w-full object-cover object-center brightness-[0.78] contrast-110 saturate-[0.78]"
            />
          </div>
          <div className="relative h-[180px] overflow-hidden rounded-md border border-stone/10 shadow-premium min-[390px]:h-[200px] md:h-[252px]">
            <img
              src="/assets/catalog/project-restaurante.webp"
              alt="Espacio restaurante con mobiliario contract integrado de forma discreta"
              loading="lazy"
              className="h-full w-full object-cover brightness-[0.78] contrast-110 saturate-[0.78]"
            />
          </div>
        </div>
      </div>

      <div className="section-shell mt-9 grid gap-3 sm:grid-cols-2 md:mt-20 md:gap-4 lg:grid-cols-4">
        {t.about.pillars.map((pillar, index) => (
          <MotionArticle
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.55 }}
            className="premium-card group rounded-md p-5 transition duration-500 hover:-translate-y-2 hover:border-fern/38 hover:bg-white/[0.055] md:p-7"
          >
            <span className="text-sm font-semibold text-fern">0{index + 1}</span>
            <h3 className="mt-6 text-lg font-semibold text-[#f8f8f4] transition group-hover:text-fern md:mt-12 md:text-xl">{pillar.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone/62">{pillar.text}</p>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}
