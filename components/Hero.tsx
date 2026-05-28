"use client";

import { MotionDiv, MotionSection } from "./Motion";

export function Hero() {
  return (
    <MotionSection id="inicio" className="relative isolate min-h-[92svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=84"
        alt="Detalle de taller y mobiliario de madera en fabricación"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,14,12,0.94),rgba(15,18,16,0.74)_48%,rgba(15,18,16,0.32)),linear-gradient(0deg,rgba(15,18,16,0.72),rgba(15,18,16,0.12)_42%,rgba(15,18,16,0.54))]" />
      <div className="section-shell relative z-10 grid min-h-[92svh] items-end pb-10 pt-32 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <MotionDiv
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="eyebrow">Partner industrial B2B · Made in Barcelona</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-normal text-[#f8f8f4] md:text-7xl lg:text-8xl">
              Fabricación contract en Barcelona
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone/78 md:text-xl">
              Producción a medida para marcas, distribuidores y profesionales del sector horeca.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#fabricacion"
                className="rounded-md bg-fern px-6 py-4 text-sm font-bold text-graphite transition hover:-translate-y-0.5 hover:bg-[#a9dd52]"
              >
                Nuestra fabricación
              </a>
              <a
                href="#contacto"
                className="rounded-md border border-stone/30 px-6 py-4 text-sm font-bold text-[#f8f8f4] transition hover:-translate-y-0.5 hover:border-fern hover:text-fern"
              >
                Contacto
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="glass-line rounded-md p-6 backdrop-blur-xl"
          >
            <p className="eyebrow">Producción confidencial</p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-[#f8f8f4]">
              Mobiliario que otros profesionales integran bajo su propia propuesta.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-stone/10 pt-5 text-sm text-stone/62">
              <span>OEM</span>
              <span>White-label</span>
              <span>A medida</span>
              <span>Series contract</span>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
