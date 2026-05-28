import { contact } from "@/app/data";
import { MotionBlock } from "./Motion";

export function Contact() {
  return (
    <section id="contacto" className="border-t border-white/10 bg-[#0d120f] py-28 md:py-36">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <MotionBlock>
          <p className="eyebrow mb-5">Contacto</p>
          <h2 className="text-3xl font-medium leading-tight text-white md:text-5xl">
            Hablemos de fabricacion, capacidad y confidencialidad.
          </h2>
          <div className="mt-10 space-y-5 text-[#b9b3a6]">
            <p>
              <span className="block text-sm uppercase tracking-[0.16em] text-[#9eb27b]">Telefono</span>
              <a href="tel:+34932224808" className="mt-1 block text-lg text-white hover:text-[#9eb27b]">
                {contact.phone}
              </a>
            </p>
            <p>
              <span className="block text-sm uppercase tracking-[0.16em] text-[#9eb27b]">Email</span>
              <a href={`mailto:${contact.email}`} className="mt-1 block text-lg text-white hover:text-[#9eb27b]">
                {contact.email}
              </a>
            </p>
            <p>
              <span className="block text-sm uppercase tracking-[0.16em] text-[#9eb27b]">Direccion</span>
              <span className="mt-1 block max-w-sm text-lg text-white">{contact.address}</span>
            </p>
          </div>
        </MotionBlock>
        <MotionBlock delay={0.08} className="premium-card p-5 md:p-8">
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Nombre" aria-label="Nombre" />
              <input className="field" placeholder="Empresa" aria-label="Empresa" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Email profesional" type="email" aria-label="Email profesional" />
              <input className="field" placeholder="Telefono" aria-label="Telefono" />
            </div>
            <select className="field" aria-label="Tipo de colaboracion" defaultValue="">
              <option value="" disabled>
                Tipo de colaboracion
              </option>
              <option>Fabricacion OEM</option>
              <option>Produccion white-label</option>
              <option>Mobiliario a medida</option>
              <option>Prototipado o serie tecnica</option>
            </select>
            <textarea className="field min-h-36 resize-none" placeholder="Cuentanos brevemente el proyecto" aria-label="Mensaje" />
            <button
              type="button"
              className="mt-2 rounded-[8px] bg-[#9eb27b] px-6 py-4 text-sm font-semibold text-[#080c0a] transition hover:bg-[#bfd09b]"
            >
              Enviar consulta
            </button>
          </form>
        </MotionBlock>
      </div>
    </section>
  );
}
