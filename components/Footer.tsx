import { contact } from "@/app/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080c0a] py-10">
      <div className="section-shell flex flex-col gap-6 text-sm text-[#b9b3a6] md:flex-row md:items-center md:justify-between">
        <Logo />
        <p className="max-w-2xl md:text-right">
          Fabricacion propia de mobiliario contract en Barcelona · {contact.phone} · {contact.email}
        </p>
      </div>
    </footer>
  );
}
