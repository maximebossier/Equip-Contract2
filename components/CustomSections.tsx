"use client";

import { useLanguage } from "./LanguageProvider";
import { MotionArticle, MotionSection } from "./Motion";
import { SectionIntro } from "./SectionIntro";

export function CustomSections() {
  const { t } = useLanguage();
  const visibleSections = (t.customSections || []).filter((section) => {
    const title = section.title.trim().toLowerCase();
    const eyebrow = section.eyebrow.trim().toLowerCase();

    return !(
      (title === "apartado editable" || title === "editable section") &&
      (eyebrow === "nuevo apartado" || eyebrow === "new section")
    );
  });

  if (!visibleSections.length) {
    return null;
  }

  return (
    <>
      {visibleSections.map((section, sectionIndex) => (
        <MotionSection
          key={`${section.title}-${sectionIndex}`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72 }}
          className={sectionIndex % 2 === 0 ? "bg-[#10130f] py-28 md:py-44" : "bg-graphite py-28 md:py-44"}
        >
          <div className="section-shell">
            <SectionIntro eyebrow={section.eyebrow} title={section.title} text={section.subtitle} />
            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, itemIndex) => (
                <MotionArticle
                  key={`${item.title}-${itemIndex}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.05, duration: 0.5 }}
                  className="premium-card rounded-md p-7 transition duration-500 hover:-translate-y-2 hover:border-fern/35"
                >
                  <span className="text-sm font-semibold text-fern">{String(itemIndex + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 text-xl font-semibold text-[#f8f8f4]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone/62">{item.text}</p>
                </MotionArticle>
              ))}
            </div>
          </div>
        </MotionSection>
      ))}
    </>
  );
}
