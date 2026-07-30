"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage, type Language } from "./LanguageProvider";
import { MotionHeader } from "./Motion";

const languageItems: Array<{ code: Language; label: string; flag: string }> = [
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navItems = [
    [t.nav.company, "#empresa"],
    [t.nav.manufacturing, "#fabricacion"],
    [t.process.eyebrow, "#proceso"],
    [t.nav.services, "#servicios"],
    [t.nav.contact, "#contacto"],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MotionHeader
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled || open
          ? "border-b border-stone/10 bg-graphite/72 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-[min(1200px,calc(100%-24px))] items-center justify-between gap-3 transition-all duration-500 md:w-[min(1200px,calc(100%-32px))] md:gap-5 ${
          scrolled || open ? "min-h-14 md:min-h-16" : "min-h-20 md:min-h-24"
        }`}
      >
        <a href="#inicio" aria-label={t.nav.home} className="shrink-0">
          <Image
            src="/assets/logo-equip-contract-transparent.png"
            alt="Equip Contract"
            width={420}
            height={202}
            priority
            className={`brand-logo-soft h-auto object-contain transition-all duration-500 ${
              scrolled || open ? "w-28 md:w-44" : "w-32 min-[390px]:w-36 md:w-56"
            }`}
          />
        </a>

        <div className="flex items-center gap-1.5 md:hidden">
          <LanguageSwitcher language={language} setLanguage={setLanguage} label={t.nav.language} compact />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((value) => !value)}
            className="glass-line grid h-10 w-10 place-items-center rounded-md transition hover:border-fern/40 hover:bg-white/10"
          >
            <span className="sr-only">{t.nav.menu}</span>
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 bg-stone" />
              <span className="block h-0.5 w-5 bg-stone" />
              <span className="block h-0.5 w-5 bg-stone" />
            </span>
          </button>
        </div>

        <nav
          id="main-nav"
          className={`absolute left-3 right-3 top-[calc(100%+8px)] grid gap-1 rounded-md border border-stone/10 bg-carbon/96 p-3 shadow-premium backdrop-blur-xl md:static md:flex md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "grid" : "hidden md:flex"
          }`}
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="premium-link rounded-md px-3 py-2 text-sm font-semibold text-stone/80 outline-none transition duration-300 hover:bg-white/5 hover:text-fern focus-visible:ring-2 focus-visible:ring-fern/70 md:px-0"
            >
              {label}
            </a>
          ))}
          <div className="hidden md:block">
            <LanguageSwitcher language={language} setLanguage={setLanguage} label={t.nav.language} />
          </div>
        </nav>
      </div>
    </MotionHeader>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
  label,
  compact = false,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      aria-label={label}
      className={`glass-line flex items-center rounded-md p-1 ${compact ? "h-10" : ""}`}
      role="group"
    >
      {languageItems.map((item) => {
        const active = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLanguage(item.code)}
            className={`flex items-center gap-1 rounded-[4px] px-2 py-1.5 text-[0.68rem] font-bold transition md:gap-1.5 md:px-2.5 md:py-2 md:text-xs ${
              active
                ? "bg-fern text-graphite shadow-[0_8px_24px_rgba(149,200,61,0.18)]"
                : "text-stone/78 hover:bg-white/6 hover:text-[#f8f8f4] focus-visible:ring-2 focus-visible:ring-fern/70"
            }`}
          >
            <span aria-hidden="true">{item.flag}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
