"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Services() {
  const { t } = useLanguage();

  return (
    <MotionSection
      id="servicios"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75 }}
      className="bg-[#151914] py-28 md:py-44"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[0.88fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionIntro
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            text={t.services.text}
          />

          <div className="mt-12 overflow-hidden rounded-md border border-stone/12 bg-[#0f130f] shadow-premium">
            <div className="relative h-72">
              <img
                src="/assets/catalog/services-industrial-factory-floor.jpg"
                alt="Interior de fábrica industrial con maquinaria para producción contract B2B"
                loading="lazy"
                className="h-full w-full object-cover brightness-[0.78] contrast-110 saturate-[0.78]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,12,0.02),rgba(11,14,12,0.78)),radial-gradient(circle_at_72%_18%,rgba(149,200,61,0.22),transparent_16rem)]" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="eyebrow">Producción partner</p>
                <p className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-[#f8f8f4]">
                  Capacidad flexible sin competir con tu canal comercial.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-stone/10 text-center">
              {["OEM", "NDA", "B2B"].map((item) => (
                <div key={item} className="border-r border-stone/10 px-4 py-5 last:border-r-0">
                  <p className="text-lg font-semibold text-fern">{item}</p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-stone/48">contract</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {t.services.items.map((service, index) => (
            <MotionArticle
              key={service.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="premium-card group rounded-md p-6 transition duration-500 hover:-translate-y-1 hover:border-fern/35 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-fern">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-[#f8f8f4] transition group-hover:text-fern">{service.title}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-fern/25 bg-fern/10 text-sm font-bold text-fern transition group-hover:bg-fern group-hover:text-graphite">
                  {service.title.slice(0, 1)}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-stone/68">{service.text}</p>
              <p className="mt-5 rounded-md border border-stone/10 bg-white/[0.025] p-4 text-sm font-semibold leading-6 text-stone/82">
                {service.benefit}
              </p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
