type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function SectionIntro({ eyebrow, title, text }: SectionIntroProps) {
  return (
    <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
      <div>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="text-3xl font-medium leading-tight text-white md:text-5xl">{title}</h2>
      </div>
      <p className="max-w-2xl text-base leading-8 text-[#b9b3a6] md:text-lg">{text}</p>
    </div>
  );
}
