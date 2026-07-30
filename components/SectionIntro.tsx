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
      <h2 className={`mt-5 max-w-[13ch] text-4xl font-semibold leading-[1.02] tracking-normal text-[#f8f8f4] md:text-6xl ${headingAlignment}`}>
        {title}
      </h2>
      {text ? <p className={`mt-7 max-w-2xl text-base leading-8 text-stone/76 md:text-lg ${textAlignment}`}>{text}</p> : null}
    </div>
  );
}
