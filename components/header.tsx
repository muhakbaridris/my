"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

const links = [
  ["About", "Tentang", "/about"],
  ["Research", "Riset", "/research"],
  ["Publications", "Publikasi", "/publications"],
  ["CV", "CV", "/cv"],
  ["Blog", "Blog", "/blog"],
  ["Contact", "Kontak", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-bold text-white transition-transform group-hover:rotate-6 dark:bg-emerald">MA</span>
          <span className="font-semibold tracking-tight text-ink dark:text-white">Muh. Akbar Idris</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {links.map(([label, labelId, href]) => (
            <Link key={href} href={href} className={cn("rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-emerald dark:text-slate-300", pathname === href && "bg-emerald/10 text-emerald")}>
              {language === "id" ? labelId : label}
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          {links.map(([label, labelId, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-emerald/10 hover:text-emerald">
              {language === "id" ? labelId : label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
