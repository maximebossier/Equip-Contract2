"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionDiv, MotionSection } from "./Motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <MotionSection id="inicio" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={t.hero.image}
        alt={t.hero.imageAlt}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover [animation:hero-zoom_18s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(149,200,61,0.18),transparent_28rem),linear-gradient(90deg,rgba(5,8,7,0.96),rgba(12,15,13,0.82)_42%,rgba(12,15,13,0.32)),linear-gradient(0deg,rgba(7,10,8,0.82),rgba(7,10,8,0.08)_48%,rgba(7,10,8,0.58))]" />
      <div className="pointer-events-none absolute inset-x-[8%] top-28 h-px bg-gradient-to-r from-transparent via-stone/28 to-transparent" />
      <div className="pointer-events-none absolute right-[10%] top-36 h-40 w-px bg-gradient-to-b from-fern/0 via-fern/45 to-fern/0 [animation:float-line_6s_ease-in-out_infinite]" />
      <div className="section-shell relative z-10 grid min-h-[100svh] items-end pb-10 pt-28 sm:pt-32 md:pb-20 md:pt-36">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_390px] lg:items-end">
          <MotionDiv
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-[3.15rem] font-semibold leading-[0.94] tracking-normal text-[#f8f8f4] min-[390px]:text-[3.6rem] md:mt-6 md:text-7xl lg:text-[6.2rem]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-stone/82 md:mt-8 md:text-xl md:leading-8">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap md:mt-10" aria-label="Acciones principales">
              <a
                href="#fabricacion"
                className="premium-button inline-flex items-center justify-center rounded-md bg-fern px-6 py-4 text-sm font-bold text-graphite outline-none hover:bg-[#a9dd52] focus-visible:ring-2 focus-visible:ring-fern/80 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href="#proceso"
                className="premium-button inline-flex items-center justify-center rounded-md border border-stone/35 bg-white/[0.035] px-6 py-4 text-sm font-bold text-[#f8f8f4] outline-none backdrop-blur hover:border-fern hover:text-fern focus-visible:ring-2 focus-visible:ring-fern/70"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
            <div className="mt-8 grid max-w-3xl gap-3 min-[420px]:grid-cols-3 md:mt-12">
              {t.hero.metrics.map((metric) => (
                <div key={metric.label} className="rounded-md border border-stone/10 bg-graphite/42 p-4 min-[420px]:border-l-2 min-[420px]:border-l-fern/35">
                  <p className="text-xl font-semibold text-[#f8f8f4] md:text-2xl">{metric.value}</p>
                  <p className="mt-1 text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.1em] text-stone/64 md:text-xs md:leading-5">{metric.label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="premium-card rounded-md p-5 backdrop-blur-2xl md:p-7"
          >
            <p className="eyebrow">{t.hero.cardEyebrow}</p>
            <p className="mt-4 text-xl font-semibold leading-tight text-[#f8f8f4] md:text-2xl">
              {t.hero.cardTitle}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-stone/10 pt-5 text-sm text-stone/62 md:mt-9 md:gap-4 md:pt-6">
              {t.hero.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
