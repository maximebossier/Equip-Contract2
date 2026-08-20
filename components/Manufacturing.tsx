"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { FeatureIcon, type FeatureIconName } from "./FeatureIcon";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const icons: FeatureIconName[] = ["carpentry", "metal", "assembly", "finishes", "quality"];

export function Manufacturing() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="fabricacion"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="bg-graphite py-16 md:py-44"
    >
      <div className="section-shell">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <SectionIntro
            eyebrow={t.manufacturing.eyebrow}
            title={t.manufacturing.title}
            text={t.manufacturing.text}
          />
          <div className="relative h-[220px] overflow-hidden rounded-md shadow-premium min-[390px]:h-[250px] sm:h-[340px] md:h-[390px]">
            <Image
              src={t.manufacturing.image}
              alt={t.manufacturing.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover brightness-90 contrast-110"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-16 md:gap-4 lg:grid-cols-3">
          {t.manufacturing.areas.map(([title, text], index) => (
            <MotionArticle
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.045, duration: 0.55 }}
              className="group premium-card rounded-md p-4 transition duration-500 hover:-translate-y-2 hover:border-fern/35 hover:bg-white/[0.06] sm:min-h-56 md:min-h-60 md:p-7"
            >
              <div className="flex items-center justify-between gap-4 border-b border-stone/10 pb-5 md:pb-7">
                <h3 className="text-lg font-semibold text-[#f8f8f4] md:text-2xl">{title}</h3>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-fern/25 bg-fern/10 text-fern transition group-hover:scale-105 group-hover:bg-fern group-hover:text-graphite">
                  <FeatureIcon name={icons[index] || "quality"} className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-stone/64 md:mt-8">{text}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
