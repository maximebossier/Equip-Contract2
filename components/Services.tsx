"use client";

import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const services = [
  "Fabricación OEM",
  "Producción white-label",
  "Mobiliario a medida",
  "Prototipado",
  "Producciones pequeñas y grandes",
  "Colaboración técnica",
];

export function Services() {
  return (
    <MotionSection
      id="servicios"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75 }}
      className="bg-[#171a16] py-24 md:py-36"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[0.88fr_1fr]">
        <SectionIntro
          eyebrow="Servicios"
          title="Fabricamos para quien necesita producir sin perder control."
          text="Trabajamos como extensión industrial de distribuidores, estudios y marcas, ajustándonos al nivel de visibilidad, documentación y acabado que requiere cada colaboración."
        />

        <div className="grid gap-3">
          {services.map((service, index) => (
            <MotionArticle
              key={service}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-line flex items-center justify-between rounded-md p-5 transition hover:border-fern/35 hover:bg-white/[0.065]"
            >
              <span className="text-lg font-semibold text-[#f8f8f4]">{service}</span>
              <span className="text-sm text-fern">{String(index + 1).padStart(2, "0")}</span>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
