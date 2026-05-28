"use client";

import { MotionSection } from "./Motion";

export function Confidentiality() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-[#10130f] py-24 md:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fern/55 to-transparent" />
      <div className="section-shell">
        <div className="glass-line relative overflow-hidden rounded-md p-8 shadow-premium md:p-14 lg:p-16">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,rgba(149,200,61,0.16),transparent)]" />
          <div className="relative max-w-4xl">
            <p className="eyebrow">Confidencialidad</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.04] text-[#f8f8f4] md:text-6xl">
              Muchos de nuestros proyectos permanecen confidenciales debido a acuerdos con clientes y partners.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-stone/68">
              Esa discreción forma parte del servicio. Fabricamos para integrarnos en cadenas de valor donde la marca,
              la prescripción o la relación comercial pertenecen al partner.
            </p>
            <div className="mt-10 grid gap-3 text-sm text-stone/66 md:grid-cols-3">
              <span className="rounded-md border border-stone/10 bg-white/[0.035] p-4">Acuerdos NDA</span>
              <span className="rounded-md border border-stone/10 bg-white/[0.035] p-4">Producción sin marca visible</span>
              <span className="rounded-md border border-stone/10 bg-white/[0.035] p-4">Documentación técnica privada</span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
