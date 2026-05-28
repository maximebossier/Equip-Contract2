export function Logo() {
  return (
    <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="Equip Contract">
      <span className="grid h-11 w-28 place-items-center overflow-hidden rounded-[8px] border border-white/10 bg-white px-3 transition group-hover:border-[#9eb27b]/45">
        <img
          src="https://www.equipcontract.com/images/logo3.png"
          alt="Equip Contract"
          className="h-auto w-full object-contain"
        />
      </span>
      <span className="hidden leading-none sm:block">
        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white">Fabricacion</span>
        <span className="mt-1 block text-[0.66rem] uppercase tracking-[0.26em] text-[#9eb27b]">Barcelona</span>
      </span>
    </a>
  );
}
