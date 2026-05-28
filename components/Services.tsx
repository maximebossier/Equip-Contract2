import { services } from "@/app/data";
import { MotionBlock } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Services() {
  return (
    <section id="servicios" className="section-shell py-28 md:py-36">
      <MotionBlock>
        <SectionIntro
          eyebrow="Servicios"
          title="Fabricacion para quienes venden, prescriben o integran."
          text="No somos una tienda online ni una marca orientada al cliente final. Somos el partner industrial que fabrica con discrecion para empresas contract, distribuidores, estudios de interiorismo y otras marcas."
        />
      </MotionBlock>
      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <MotionBlock
            key={service}
            delay={index * 0.05}
            className="group flex items-center justify-between rounded-[8px] border border-white/10 px-6 py-6 transition hover:border-[#9eb27b]/55 hover:bg-white/[0.035]"
          >
            <span className="text-lg text-white">{service}</span>
            <span className="h-2 w-2 rounded-full bg-[#9eb27b] opacity-60 transition group-hover:opacity-100" />
          </MotionBlock>
        ))}
      </div>
    </section>
  );
}
