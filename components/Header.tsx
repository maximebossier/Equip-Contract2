"use client";

import { useEffect, useState } from "react";
import { MotionHeader } from "./Motion";

const navItems = [
  ["Empresa", "#empresa"],
  ["Fabricación", "#fabricacion"],
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Contacto", "#contacto"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open ? "bg-graphite/88 shadow-premium backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-5">
        <a href="#inicio" aria-label="Equip Contract inicio" className="shrink-0">
          <img
            src="/assets/logo-equip-contract.svg"
            alt="Equip Contract"
            className="h-auto w-40 rounded-md shadow-[0_14px_40px_rgba(0,0,0,0.28)] md:w-48"
          />
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((value) => !value)}
          className="glass-line grid h-11 w-11 place-items-center rounded-md md:hidden"
        >
          <span className="sr-only">Abrir menú</span>
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 bg-stone" />
            <span className="block h-0.5 w-5 bg-stone" />
            <span className="block h-0.5 w-5 bg-stone" />
          </span>
        </button>

        <nav
          id="main-nav"
          className={`absolute left-4 right-4 top-[calc(100%+10px)] grid gap-1 rounded-md border border-stone/10 bg-carbon/96 p-3 shadow-premium backdrop-blur-xl md:static md:flex md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "grid" : "hidden md:flex"
          }`}
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-semibold text-stone/78 transition hover:bg-white/5 hover:text-fern md:px-0"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </MotionHeader>
  );
}
