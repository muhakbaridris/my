import { Github, GraduationCap, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { VisitorCounter } from "@/components/visitor-counter";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-ink dark:text-white">Muh. Akbar Idris</p>
          <p className="mt-1 text-sm text-slate-500">Data, place, and evidence for better decisions.</p>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <Link href="mailto:muhakbaridris@apps.ipb.ac.id" aria-label="Email"><Mail size={18} /></Link>
          <Link href="https://github.com/muhakbaridris" aria-label="GitHub"><Github size={18} /></Link>
          <Link href="https://scholar.google.com/citations?user=J3hG2jcAAAAJ&hl=id" aria-label="Google Scholar"><GraduationCap size={18} /></Link>
          <VisitorCounter />
          <Link href="/admin" aria-label="Admin"><LockKeyhole size={16} /></Link>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Muh. Akbar Idris</p>
      </div>
    </footer>
  );
}
