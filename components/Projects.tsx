"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Projects() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="proyectos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="bg-graphite py-16 md:py-44"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
          />
          <p className="max-w-md text-sm leading-7 text-stone/58">
            {t.projects.note}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          {t.projects.items.map((project, index) => (
            <MotionArticle
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              className="group premium-card overflow-hidden rounded-md"
            >
              <div className="relative h-56 overflow-hidden min-[390px]:h-64 sm:h-72 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    objectPosition: project.image.includes("project-hospitality-lounge-hotel")
                      ? "50% 72%"
                      : "50% 50%",
                  }}
                  className="h-full w-full object-cover brightness-[0.82] contrast-110 saturate-[0.82] transition duration-[1100ms] ease-out group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/88 via-graphite/10 to-transparent transition duration-700 group-hover:from-graphite/95" />
                <div className="absolute inset-x-6 bottom-6 h-px origin-left scale-x-0 bg-fern/70 transition duration-700 group-hover:scale-x-100" />
              </div>
              <div className="p-5 md:p-8">
                <span className="eyebrow">
                  {t.projects.reference} {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[#f8f8f4] transition group-hover:text-fern md:mt-4 md:text-3xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone/62">{project.text}</p>
                <div className="mt-6 grid gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="rounded-md border border-stone/10 bg-white/[0.025] px-3 py-2.5 text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.06em] text-stone/68 md:px-4 md:py-3 md:text-xs md:tracking-[0.08em]">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
