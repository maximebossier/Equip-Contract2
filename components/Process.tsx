"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const stepMarks = ["01", "02", "03", "04", "05", "06"];

export function Process() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="proceso"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-[#10130f] py-24 md:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fern/45 to-transparent" />
      <div className="section-shell">
        <SectionIntro eyebrow={t.process.eyebrow} title={t.process.title} text={t.process.text} />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.process.steps.map((step, index) => (
            <MotionArticle
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.055, duration: 0.52 }}
              className="group premium-card relative min-h-56 rounded-md p-6 transition duration-500 hover:-translate-y-2 hover:border-fern/38 hover:bg-white/[0.055]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-fern/25 bg-fern/10 text-xs font-bold text-fern transition group-hover:bg-fern group-hover:text-graphite">
                  {stepMarks[index]}
                </span>
                <span className="h-px w-16 bg-gradient-to-r from-fern/60 to-transparent" aria-hidden="true" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold leading-tight text-[#f8f8f4] transition group-hover:text-fern">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone/66">{step.text}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
