import { MotionBlock } from "./Motion";

export function Confidentiality() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(95,127,70,0.22),rgba(8,12,10,0)_45%)]" />
      <div className="section-shell relative">
        <MotionBlock className="premium-card grid gap-10 overflow-hidden p-8 md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:p-16">
          <div>
            <p className="eyebrow mb-5">Confidencialidad</p>
            <h2 className="text-3xl font-medium leading-tight text-white md:text-5xl">
              La discrecion tambien forma parte del producto.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-[#d8d0c1] md:text-lg">
            <p>
              Muchos de nuestros proyectos permanecen confidenciales debido a acuerdos con clientes y partners.
            </p>
            <p>
              Fabricamos para terceros que necesitan solvencia industrial, continuidad en acabados y una ejecucion limpia sin interferir en su relacion comercial. OEM y white-label no son servicios secundarios: son una forma de trabajar.
            </p>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
