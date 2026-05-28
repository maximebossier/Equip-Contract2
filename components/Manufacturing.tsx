import { manufacturing } from "@/app/data";
import { MotionArticle, MotionBlock } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Manufacturing() {
  return (
    <section id="fabricacion" className="border-y border-white/10 bg-[#0d120f] py-28 md:py-36">
      <div className="section-shell">
        <MotionBlock>
          <SectionIntro
            eyebrow="Fabricacion"
            title="Capacidad industrial con mirada de interiorismo."
            text="Del primer prototipo a la serie final, cada proceso se organiza para entregar piezas consistentes, resistentes y preparadas para integrarse en proyectos horeca de alto nivel."
          />
        </MotionBlock>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {manufacturing.map((item, index) => (
            <MotionArticle
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.04 }}
              className="group overflow-hidden rounded-[8px] border border-white/10 bg-[#080c0a]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c0a] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#b9b3a6]">{item.text}</p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}
