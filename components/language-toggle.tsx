"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      onClick={() => setLanguage(language === "en" ? "id" : "en")}
      aria-label="Switch language"
      className="flex h-10 items-center gap-1.5 rounded-full border border-slate-200 px-3 text-xs font-bold tracking-wider text-slate-600 transition hover:border-emerald hover:text-emerald dark:border-slate-700 dark:text-slate-300"
    >
      <Languages size={15} /> {language === "en" ? "ID" : "EN"}
    </button>
  );
}
