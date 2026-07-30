"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionDiv, MotionSection } from "./Motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <MotionSection id="inicio" className="relative isolate min-h-[96svh] overflow-hidden">
      <img
        src={t.hero.image}
        alt={t.hero.imageAlt}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover [animation:hero-zoom_18s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(149,200,61,0.18),transparent_28rem),linear-gradient(90deg,rgba(5,8,7,0.96),rgba(12,15,13,0.82)_42%,rgba(12,15,13,0.32)),linear-gradient(0deg,rgba(7,10,8,0.82),rgba(7,10,8,0.08)_48%,rgba(7,10,8,0.58))]" />
      <div className="pointer-events-none absolute inset-x-[8%] top-28 h-px bg-gradient-to-r from-transparent via-stone/28 to-transparent" />
      <div className="pointer-events-none absolute right-[10%] top-36 h-40 w-px bg-gradient-to-b from-fern/0 via-fern/45 to-fern/0 [animation:float-line_6s_ease-in-out_infinite]" />
      <div className="section-shell relative z-10 grid min-h-[96svh] items-end pb-12 pt-36 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_390px] lg:items-end">
          <MotionDiv
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-normal text-[#f8f8f4] md:text-7xl lg:text-[6.2rem]">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone/82 md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3" aria-label="Acciones principales">
              <a
                href="#fabricacion"
                className="premium-button rounded-md bg-fern px-6 py-4 text-sm font-bold text-graphite outline-none hover:bg-[#a9dd52] focus-visible:ring-2 focus-visible:ring-fern/80 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href="#proceso"
                className="premium-button rounded-md border border-stone/35 bg-white/[0.035] px-6 py-4 text-sm font-bold text-[#f8f8f4] outline-none backdrop-blur hover:border-fern hover:text-fern focus-visible:ring-2 focus-visible:ring-fern/70"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
            <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
              {t.hero.metrics.map((metric) => (
                <div key={metric.label} className="border-l border-fern/35 pl-4">
                  <p className="text-2xl font-semibold text-[#f8f8f4]">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-stone/64">{metric.label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="premium-card rounded-md p-7 backdrop-blur-2xl"
          >
            <p className="eyebrow">{t.hero.cardEyebrow}</p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-[#f8f8f4]">
              {t.hero.cardTitle}
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4 border-t border-stone/10 pt-6 text-sm text-stone/62">
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
