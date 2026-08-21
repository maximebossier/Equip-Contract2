"use client";

import { useState } from "react";
import { useCookieConsent } from "./CookieConsent";
import { useLanguage } from "./LanguageProvider";
import { MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function Contact() {
  const { t } = useLanguage();
  const { consent, openPreferences } = useCookieConsent();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const address = t.contact.address;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapTitle =
    t.contact.location === "Barcelona"
      ? "Mapa de ubicación de Equip Contract"
      : "Equip Contract location map";

  return (
    <MotionSection
      id="contacto"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75 }}
      className="bg-[#151914] py-16 md:py-44"
    >
      <div className="section-shell grid gap-10 md:gap-14 lg:grid-cols-[0.82fr_1fr]">
        <div>
          <SectionIntro
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            text={t.contact.text}
          />
          <dl className="mt-8 grid gap-5 text-sm text-stone/70 md:mt-10">
            <div>
              <dt className="font-semibold text-fern">{t.contact.phone}</dt>
              <dd className="mt-1">
                <a href="tel:+34932224808" className="transition hover:text-[#f8f8f4]">
                  93 222 48 08
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-fern">{t.contact.email}</dt>
              <dd className="mt-1">
                <a href="mailto:info@equipcontract.com" className="transition hover:text-[#f8f8f4]">
                  info@equipcontract.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-fern">{t.contact.location}</dt>
              <dd className="mt-1 leading-7">
                c/ Anoia, 3 Nave 5
                <br />
                Pol. Ind. Can Bernades Subirà
                <br />
                08130 Santa Perpètua de Mogoda
              </dd>
            </div>
          </dl>

          <div className="mt-7 overflow-hidden rounded-md border border-fern/18 bg-[#10130f] shadow-premium md:mt-10">
            <div className="flex items-center justify-between gap-4 border-b border-fern/12 bg-[linear-gradient(135deg,rgba(149,200,61,0.13),rgba(17,20,17,0.92))] px-4 py-4 md:px-5">
              <span className="text-sm font-semibold leading-5 text-[#f8f8f4]">Equip Contract · {t.contact.location}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-fern" />
            </div>
            {consent.functional ? (
              <iframe
                title={mapTitle}
                src={mapSrc}
                className="h-56 w-full border-0 bg-[#111411] brightness-[0.78] contrast-[1.1] hue-rotate-[58deg] invert-[0.88] saturate-[0.42] sepia-[0.18] min-[390px]:h-64 md:h-80"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="grid h-56 place-items-center bg-[radial-gradient(circle_at_70%_20%,rgba(149,200,61,0.18),transparent_16rem),linear-gradient(135deg,#10130f,#0b0e0c)] p-6 text-center min-[390px]:h-64 md:h-80">
                <div className="max-w-sm">
                  <p className="eyebrow">Mapa bloqueado</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-[#f8f8f4]">
                    Google Maps se carga solo con cookies funcionales.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone/62">
                    Puedes activar esta categoría para ver el mapa interactivo sin cambiar el resto de preferencias.
                  </p>
                  <button
                    type="button"
                    onClick={openPreferences}
                    className="premium-button mt-5 rounded-md bg-fern px-5 py-3 text-sm font-bold text-graphite"
                  >
                    Configurar cookies
                  </button>
                </div>
              </div>
            )}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
              className="block border-t border-stone/10 px-4 py-4 text-sm font-semibold leading-6 text-stone/62 transition hover:text-fern md:px-5"
            >
              {address}
            </a>
          </div>
        </div>

        <form
          className="premium-card rounded-md p-4 md:p-8"
          onSubmit={async (event) => {
            event.preventDefault();
            setSubmitting(true);
            setSent(false);
            setError("");

            const response = await fetch("/api/contact", {
              method: "POST",
              body: new FormData(event.currentTarget),
            }).catch(() => null);

            setSubmitting(false);

            if (!response?.ok) {
              setError("No se ha podido enviar. Revisa los campos e inténtalo de nuevo.");
              return;
            }

            event.currentTarget.reset();
            setSent(true);
          }}
        >
          <label className="hidden" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <div className="grid gap-3.5 md:grid-cols-2 md:gap-5">
            <label htmlFor="contact-name" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.name}
              <input id="contact-name" name="name" autoComplete="name" required maxLength={120} className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30" />
            </label>
            <label htmlFor="contact-company" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.company}
              <input id="contact-company" name="company" autoComplete="organization" required maxLength={140} className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30" />
            </label>
            <label htmlFor="contact-email" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.email}
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={160}
                className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30"
              />
            </label>
            <label htmlFor="contact-phone" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.phoneNumber}
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                pattern="^[+()0-9\s.-]{6,40}$"
                className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30"
              />
            </label>
            <label htmlFor="contact-country" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.country}
              <input id="contact-country" name="country" autoComplete="country-name" maxLength={80} className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30" />
            </label>
            <label htmlFor="contact-quantity" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.quantity}
              <input id="contact-quantity" name="quantity" inputMode="numeric" maxLength={40} className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30" />
            </label>
            <label htmlFor="contact-date" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.date}
              <input id="contact-date" name="date" type="date" className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30" />
            </label>
            <label htmlFor="contact-project-type" className="grid gap-2 text-sm font-semibold text-stone/82">
              {t.contact.fields.projectType}
              <select id="contact-project-type" name="projectType" className="rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30">
                {t.contact.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
          <label htmlFor="contact-message" className="mt-5 grid gap-2 text-sm font-semibold text-stone/82">
            {t.contact.fields.message}
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              maxLength={2200}
              className="resize-none rounded-md border border-stone/16 bg-graphite/70 px-4 py-3 text-stone outline-none transition hover:border-stone/28 focus:border-fern focus:bg-graphite focus:ring-2 focus:ring-fern/30"
            />
          </label>
          <label htmlFor="contact-files" className="mt-5 grid gap-2 text-sm font-semibold text-stone/82">
            {t.contact.fields.files}
            <input
              id="contact-files"
              name="files"
              type="file"
              multiple
              accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"
              className="rounded-md border border-dashed border-stone/18 bg-graphite/70 px-4 py-4 text-sm text-stone/76 outline-none transition file:mr-4 file:rounded-md file:border-0 file:bg-fern file:px-4 file:py-2 file:text-sm file:font-bold file:text-graphite hover:border-fern/40 focus:border-fern focus:ring-2 focus:ring-fern/30"
            />
            <span className="text-xs font-normal leading-5 text-stone/54">{t.contact.fileHint}</span>
          </label>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {t.contact.trust.map((item) => (
              <p key={item} className="rounded-md border border-stone/10 bg-white/[0.025] p-4 text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-stone/68">
                {item}
              </p>
            ))}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="premium-button mt-6 w-full rounded-md bg-fern px-6 py-4 text-sm font-bold text-graphite outline-none hover:bg-[#a9dd52] focus-visible:ring-2 focus-visible:ring-fern/80 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
          >
            {t.contact.fields.submit}
          </button>
          {error && (
            <div className="mt-5 rounded-md border border-red-400/22 bg-red-400/8 p-5 text-sm leading-7 text-red-100/80">
              {error}
            </div>
          )}
          {sent && (
            <div className="mt-5 rounded-md border border-fern/22 bg-fern/8 p-5 text-sm leading-7 text-stone/76">
              <p className="font-semibold text-[#f8f8f4]">{t.contact.sentMessage.title}</p>
              <p className="mt-2">{t.contact.sentMessage.text}</p>
            </div>
          )}
        </form>
      </div>
    </MotionSection>
  );
}
