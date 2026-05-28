import { MotionBlock } from "./Motion";
import { SectionIntro } from "./SectionIntro";

const points = [
  ["Fabricacion local", "Produccion propia en el entorno industrial de Barcelona, con respuesta agil y control directo."],
  ["Calidad artesanal", "Cuidado material, precision en los acabados y criterio practico para mobiliario de uso intensivo."],
  ["Flexibilidad real", "Adaptacion a briefings tecnicos, series, prototipos, acabados y necesidades de cada partner."],
  ["Confidencialidad", "Trabajo discreto bajo acuerdos con distribuidores, estudios y marcas que lideran la relacion final."],
];

export function About() {
  return (
    <section className="section-shell py-28 md:py-36">
      <MotionBlock>
        <SectionIntro
          eyebrow="Sobre nosotros"
          title="Industria, oficio y servicio para el canal profesional."
          text="Equip Contract es una empresa fabricante de mobiliario para hosteleria y colectividades. La fabricacion propia, la experiencia del equipo comercial, logistico y productivo, y una politica centrada en buen producto y buen servicio sostienen una forma de trabajar pensada para partners B2B."
        />
      </MotionBlock>
      <div className="mt-16 grid gap-4 md:grid-cols-4">
        {points.map(([title, text], index) => (
          <MotionBlock key={title} delay={index * 0.06} className="premium-card p-6">
            <span className="mb-8 block h-px w-12 bg-[#9eb27b]" />
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#b9b3a6]">{text}</p>
          </MotionBlock>
        ))}
      </div>
    </section>
  );
}
