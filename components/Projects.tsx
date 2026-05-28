import { projects } from "@/app/data";
import { MotionBlock } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Projects() {
  return (
    <section id="proyectos" className="bg-[#111511] py-28 md:py-36">
      <div className="section-shell">
        <MotionBlock>
          <SectionIntro
            eyebrow="Proyectos conceptuales"
            title="Aplicaciones horeca sin exponer identidades comerciales."
            text="Presentamos tipologias y contextos de uso, no clientes identificables. La prioridad es explicar capacidades de fabricacion manteniendo la discrecion propia del canal contract."
          />
        </MotionBlock>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionBlock key={project.title} delay={index * 0.06} className="group relative overflow-hidden rounded-[8px]">
              <div className="aspect-[1.25/1] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c0a] via-[#080c0a]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9eb27b]">Tipologia</p>
                <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d8d0c1]">{project.category}</p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
