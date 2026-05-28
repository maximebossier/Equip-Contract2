import { MotionBlock } from "./Motion";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2400&q=85"
        alt="Detalle de taller y mobiliario contract"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="image-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(95,127,70,0.16),transparent_42%)]" />

      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24">
        <MotionBlock className="max-w-4xl">
          <p className="eyebrow mb-6">Made in Barcelona · Partner industrial B2B</p>
          <h1 className="font-display text-5xl font-medium leading-[0.98] text-white md:text-7xl lg:text-8xl">
            Fabricacion contract en Barcelona
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d0c1] md:text-xl">
            Produccion a medida para marcas, distribuidores y profesionales del sector horeca.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#fabricacion"
              className="rounded-[8px] bg-[#9eb27b] px-6 py-3 text-center text-sm font-semibold text-[#080c0a] transition hover:bg-[#bfd09b]"
            >
              Nuestra fabricacion
            </a>
            <a
              href="#contacto"
              className="rounded-[8px] border border-white/18 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-[#9eb27b]/70 hover:bg-white/5"
            >
              Contacto
            </a>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.16} className="mt-16 grid gap-3 border-t border-white/12 pt-6 text-sm text-[#b9b3a6] md:grid-cols-3">
          <span>Fabricacion propia de mobiliario horeca y colectividades.</span>
          <span>Especialistas en mesas, pies, tableros y piezas a medida.</span>
          <span>Produccion discreta para distribuidores, estudios y marcas.</span>
        </MotionBlock>
      </div>
    </section>
  );
}
