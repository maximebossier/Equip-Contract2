"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const icons = ["L", "M", "T", "E", "A", "Q"];

export function Manufacturing() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="fabricacion"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="bg-graphite py-28 md:py-44"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <SectionIntro
            eyebrow={t.manufacturing.eyebrow}
            title={t.manufacturing.title}
            text={t.manufacturing.text}
          />
          <div className="relative h-[390px] overflow-hidden rounded-md shadow-premium">
            <img
              src={t.manufacturing.image}
              alt={t.manufacturing.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover brightness-90 contrast-110"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.manufacturing.areas.map(([title, text], index) => (
            <MotionArticle
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.045, duration: 0.55 }}
              className="group premium-card min-h-60 rounded-md p-7 transition duration-500 hover:-translate-y-2 hover:border-fern/35 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between border-b border-stone/10 pb-7">
                <h3 className="text-2xl font-semibold text-[#f8f8f4]">{title}</h3>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-fern/25 bg-fern/10 text-xs font-bold text-fern transition group-hover:scale-105 group-hover:bg-fern group-hover:text-graphite">
                  {icons[index] || "•"}
                </span>
              </div>
              <p className="mt-8 text-sm leading-7 text-stone/64">{text}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
