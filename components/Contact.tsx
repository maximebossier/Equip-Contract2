"use client";

import { MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Contact() {
  return (
    <MotionSection
      id="contacto"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75 }}
      className="bg-[#171a16] py-24 md:py-36"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1fr]">
        <div>
          <SectionIntro
            eyebrow="Contacto"
            title="Hablemos de fabricación, capacidades y próximos proyectos."
            text="Cuéntanos el tipo de mobiliario, cantidades aproximadas, materiales, acabados y nivel de confidencialidad requerido."
          />
          <dl className="mt-10 grid gap-5 text-sm text-stone/70">
            <div>
              <dt className="font-semibold text-fern">Teléfono</dt>
              <dd className="mt-1">
                <a href="tel:+34932224808" className="transition hover:text-[#f8f8f4]">
                  93 222 48 08
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-fern">Email</dt>
              <dd className="mt-1">
                <a href="mailto:info@equipcontract.com" className="transition hover:text-[#f8f8f4]">
                  info@equipcontract.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-fern">Barcelona</dt>
              <dd className="mt-1 leading-7">
                c/ Anoia, 3 Nave 5
                <br />
                Pol. Ind. Can Bernades Subirà
                <br />
                08130 Santa Perpètua de Mogoda
              </dd>
            </div>
          </dl>
        </div>

        <form className="glass-line rounded-md p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-stone/76">
              Nombre
              <input className="rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-stone/76">
              Empresa
              <input className="rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-stone/76">
              Email
              <input
                type="email"
                className="rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-stone/76">
              Tipo de proyecto
              <select className="rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern">
                <option>Producción OEM / white-label</option>
                <option>Mobiliario a medida</option>
                <option>Prototipado</option>
                <option>Serie contract</option>
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-stone/76">
            Mensaje
            <textarea
              rows={6}
              className="resize-none rounded-md border border-stone/12 bg-graphite/70 px-4 py-3 text-stone outline-none transition focus:border-fern"
            />
          </label>
          <button
            type="button"
            className="mt-6 w-full rounded-md bg-fern px-6 py-4 text-sm font-bold text-graphite transition hover:-translate-y-0.5 hover:bg-[#a9dd52] md:w-auto"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </MotionSection>
  );
}
