type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, text, align = "left" }: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-[1.03] tracking-normal text-[#f8f8f4] md:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-6 text-base leading-8 text-stone/68 md:text-lg">{text}</p> : null}
    </div>
  );
}
