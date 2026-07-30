"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Trust() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="confianza"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0d110e] py-24 md:py-40"
    >
      <div className="section-shell grid gap-16 lg:grid-cols-[0.82fr_1fr] lg:items-start">
        <SectionIntro eyebrow={t.trust.eyebrow} title={t.trust.title} text={t.trust.text} />

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {t.trust.stats.map((stat, index) => (
              <MotionArticle
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.045, duration: 0.5 }}
                className="premium-card group rounded-md p-6 transition duration-500 hover:-translate-y-1 hover:border-fern/40"
              >
                <p className="text-3xl font-semibold text-[#f8f8f4] transition group-hover:text-fern">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-stone/68">{stat.label}</p>
              </MotionArticle>
            ))}
          </div>

          <div className="premium-card rounded-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[#f8f8f4]">{t.trust.capabilitiesTitle}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.trust.capabilities.map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-stone/10 bg-white/[0.025] p-4 text-sm leading-6 text-stone/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fern" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
