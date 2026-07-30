"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { getDefaultSiteContent, type SiteContent, type SiteLanguage } from "@/lib/siteContent.shared";

export type Language = SiteLanguage;

const LanguageContext = createContext<{
  content: SiteContent;
  language: Language;
  setLanguage: (language: Language) => void;
  t: SiteContent[Language];
} | null>(null);

export function LanguageProvider({
  children,
  initialContent,
}: {
  children: React.ReactNode;
  initialContent?: SiteContent;
}) {
  const [language, setLanguage] = useState<Language>("es");
  const content = initialContent ?? getDefaultSiteContent();
  const value = useMemo(
    () => ({ content, language, setLanguage, t: content[language] }),
    [content, language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
