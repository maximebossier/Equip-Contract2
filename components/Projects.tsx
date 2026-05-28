"use client";

import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const projects = [
  {
    title: "Hotel Boutique",
    text: "Mesas, bases y piezas auxiliares para zonas de desayuno, lounge y habitaciones con acabados coordinados.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Restaurante Contemporáneo",
    text: "Producción de mobiliario resistente para sala, barra y espacios de alto ritmo de servicio.",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Terraza Premium",
    text: "Soluciones con estructura metálica, superficies técnicas y criterios de durabilidad exterior.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Espacio Hospitality",
    text: "Piezas a medida para áreas polivalentes, colectividades y proyectos contract de volumen.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=82",
  },
];

export function Projects() {
  return (
    <MotionSection
      id="proyectos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className="bg-graphite py-24 md:py-36"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Proyectos conceptuales"
            title="Aplicaciones habituales, sin exposición de clientes."
          />
          <p className="max-w-md text-sm leading-7 text-stone/58">
            Las imágenes son referencias visuales de contexto. El foco está en tipos de producción y espacios, no en
            clientes identificables.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              className="group overflow-hidden rounded-md border border-stone/10 bg-[#171a16]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/78 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <span className="eyebrow">Referencia {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl font-semibold text-[#f8f8f4]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone/62">{project.text}</p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
