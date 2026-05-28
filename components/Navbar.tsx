import { Logo } from "./Logo";

const links = [
  ["Fabricacion", "#fabricacion"],
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Contacto", "#contacto"],
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080c0a]/72 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-[#d8d0c1]/74 transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="rounded-[8px] border border-[#9eb27b]/35 px-4 py-2 text-sm font-medium text-[#f4f1ea] transition hover:border-[#9eb27b] hover:bg-[#9eb27b]/10"
        >
          Solicitar fabricacion
        </a>
      </nav>
    </header>
  );
}
