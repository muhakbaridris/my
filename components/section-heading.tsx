"use client";

import { useLanguage } from "@/components/language-provider";

export function SectionHeading({ eyebrow, title, text, eyebrowId, titleId, textId }: { eyebrow: string; title: string; text?: string; eyebrowId?: string; titleId?: string; textId?: string }) {
  const { language } = useLanguage();
  const useId = language === "id";
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald">{useId && eyebrowId ? eyebrowId : eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink dark:text-white md:text-5xl">{useId && titleId ? titleId : title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{useId && textId ? textId : text}</p>}
    </div>
  );
}
