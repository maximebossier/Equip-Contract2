"use client";

import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const areas = [
  ["Carpintería", "Tableros, cantos, mecanizados, chapas, laminados y soluciones de madera para uso intensivo."],
  ["Metalistería", "Bases, pies, bastidores y estructuras metálicas con acabados preparados para contract."],
  ["Tapicería", "Asientos, respaldos y detalles textiles coordinados con el lenguaje de cada proyecto."],
  ["Ensamblaje", "Integración de piezas, herrajes y componentes para entregar mobiliario listo para instalación."],
  ["Acabados", "Barnices, lacados, texturas y tonos adaptados a especificaciones técnicas o de marca."],
  ["Control de calidad", "Revisión de estabilidad, resistencia, acabado y coherencia de serie antes de salida."],
];

export function Manufacturing() {
  return (
    <MotionSection
      id="fabricacion"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="bg-graphite py-24 md:py-36"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <SectionIntro
            eyebrow="Fabricación"
            title="Capacidad productiva para piezas a medida y series contract."
            text="Un proceso coordinado entre taller, oficina técnica y producción para convertir planos, muestras o requisitos de marca en mobiliario fabricable, repetible y bien acabado."
          />
          <img
            src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1400&q=82"
            alt="Detalle de fabricación industrial de mobiliario"
            className="h-[360px] w-full rounded-md object-cover shadow-premium"
          />
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {areas.map(([title, text], index) => (
            <MotionArticle
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.045, duration: 0.55 }}
              className="group glass-line min-h-56 rounded-md p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.075]"
            >
              <div className="flex items-center justify-between border-b border-stone/10 pb-7">
                <h3 className="text-2xl font-semibold text-[#f8f8f4]">{title}</h3>
                <span className="h-2.5 w-2.5 rounded-full bg-fern transition group-hover:scale-150" />
              </div>
              <p className="mt-8 text-sm leading-7 text-stone/64">{text}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
