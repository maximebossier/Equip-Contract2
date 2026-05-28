"use client";

import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const pillars = [
  {
    title: "Fabricación local",
    text: "Producción y coordinación desde Barcelona para controlar materiales, plazos y acabados con cercanía real.",
  },
  {
    title: "Calidad artesanal",
    text: "Trabajo de carpintería, metal, tapicería y ensamblaje con criterio técnico y atención al detalle visible.",
  },
  {
    title: "Flexibilidad productiva",
    text: "Pedidos a medida, prototipos, series cortas y producciones amplias para partners con necesidades cambiantes.",
  },
  {
    title: "Confidencialidad",
    text: "Un modelo B2B preparado para trabajar bajo acuerdos discretos, sin exposición pública innecesaria.",
  },
];

export function About() {
  return (
    <MotionSection
      id="empresa"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#111411] py-24 md:py-36"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[0.92fr_1fr] lg:items-start">
        <SectionIntro
          eyebrow="Sobre nosotros"
          title="Industria, oficio y discreción al servicio del canal contract."
        />
        <div>
          <p className="text-lg leading-9 text-stone/72">
            Equip Contract fabrica mobiliario para distribuidores, estudios de interiorismo, empresas contract y
            marcas que desarrollan proyectos horeca. No competimos con nuestros partners: producimos para que sus
            propuestas lleguen al proyecto final con solvencia, precisión y continuidad.
          </p>
          <p className="mt-6 text-lg leading-9 text-stone/72">
            Nuestra fabricación propia combina conocimiento industrial, acabados cuidados y una respuesta flexible
            para mesas, bases, tableros, estructuras metálicas y soluciones de mobiliario a medida.
          </p>
        </div>
      </div>

      <div className="section-shell mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <MotionArticle
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.55 }}
            className="glass-line rounded-md p-6 transition duration-300 hover:-translate-y-1 hover:border-fern/38"
          >
            <span className="text-sm font-semibold text-fern">0{index + 1}</span>
            <h3 className="mt-10 text-xl font-semibold text-[#f8f8f4]">{pillar.title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone/62">{pillar.text}</p>
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
}
