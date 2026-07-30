type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, text, align = "left" }: SectionIntroProps) {
  const headingAlignment = align === "center" ? "mx-auto" : "";
  const textAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 max-w-[16ch] text-[2.35rem] font-semibold leading-[1.04] tracking-normal text-[#f8f8f4] sm:max-w-[14ch] md:mt-5 md:text-6xl ${headingAlignment}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 max-w-2xl text-base leading-7 text-stone/76 md:mt-7 md:text-lg md:leading-8 ${textAlignment}`}>{text}</p> : null}
    </div>
  );
}
