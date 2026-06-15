"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Language = "en" | "id";
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void };

const LanguageContext = createContext<LanguageContextValue>({ language: "en", setLanguage: () => undefined });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("mai-language");
    if (saved === "id") setLanguageState("id");
  }, []);

  function setLanguage(next: Language) {
    localStorage.setItem("mai-language", next);
    document.documentElement.lang = next;
    setLanguageState(next);
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LocalizedText({ en, id }: { en: string; id: string }) {
  const { language } = useLanguage();
  return <>{language === "id" ? id : en}</>;
}
