"use client";

import Image from "next/image";
import { useCookieConsent } from "./CookieConsent";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="border-t border-stone/10 bg-[#090c0a] py-14 md:py-20">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-stone/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Image
              src="/assets/logo-equip-contract-transparent.png"
              alt="Equip Contract"
              width={420}
              height={202}
              className="brand-logo-soft h-auto w-60 object-contain"
            />
            <p className="mt-6 max-w-xl text-2xl font-semibold leading-tight text-[#f8f8f4]">
              Fabricación contract confidencial para marcas, distribuidores y profesionales horeca.
            </p>
          </div>
          <div className="grid gap-3 text-sm font-semibold text-stone/58 md:text-right">
            <a href="#empresa" className="premium-link rounded-sm transition hover:text-fern focus-visible:text-fern">{t.nav.company}</a>
            <a href="#fabricacion" className="premium-link rounded-sm transition hover:text-fern focus-visible:text-fern">{t.nav.manufacturing}</a>
            <a href="#catalogo" className="premium-link rounded-sm transition hover:text-fern focus-visible:text-fern">Catálogo</a>
            <a href="#contacto" className="premium-link rounded-sm transition hover:text-fern focus-visible:text-fern">{t.nav.contact}</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 text-sm text-stone/45 md:flex-row md:items-center md:justify-between">
          <span>{t.footer.copyright}</span>
          <div className="flex flex-wrap gap-5">
            <button
              type="button"
              onClick={openPreferences}
              className="premium-link rounded-sm text-left transition hover:text-fern focus-visible:text-fern"
            >
              Configuración de Cookies
            </button>
            <a href="/admin" className="premium-link rounded-sm transition hover:text-fern focus-visible:text-fern">
              {t.footer.privateAccess}
            </a>
            <a href="#inicio" className="premium-link rounded-sm transition hover:text-fern focus-visible:text-fern">
              {t.footer.backTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
