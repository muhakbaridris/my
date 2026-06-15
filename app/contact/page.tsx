import type { Metadata } from "next";
import { Github, GraduationCap, Linkedin, Mail, Network, Waypoints } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Contact", description: "Contact Muh. Akbar Idris for research collaboration and academic opportunities." };
const socials = [
  ["Email", "mailto:muhakbaridris@apps.ipb.ac.id", Mail],
  ["Google Scholar", "https://scholar.google.com/citations?user=J3hG2jcAAAAJ&hl=id", GraduationCap],
  ["ORCID", "https://orcid.org/0009-0000-2995-1975", Waypoints],
  ["GitHub", "https://github.com/muhakbaridris", Github],
  ["LinkedIn", "https://linkedin.com/", Linkedin],
  ["ResearchGate", "https://www.researchgate.net/profile/Muh-Idris", Network],
];
export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading eyebrow="Contact" eyebrowId="Kontak" title="Let’s investigate something meaningful." titleId="Mari meneliti sesuatu yang bermakna." text="I welcome conversations about research collaboration, graduate opportunities, spatial methods, and applied data science." textId="Saya terbuka untuk kolaborasi riset, peluang akademik, metode spasial, dan sains data terapan." />
      <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_.75fr]"><Card><ContactForm /></Card><div className="grid gap-3">{socials.map(([label, href, Icon]) => <Link key={String(label)} href={String(href)} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 font-medium text-ink transition hover:-translate-y-0.5 hover:border-emerald dark:border-slate-800 dark:bg-slate-900 dark:text-white"><span className="grid h-10 w-10 place-items-center rounded-full bg-emerald/10 text-emerald"><Icon size={18} /></span>{String(label)}</Link>)}</div></div>
    </section>
  );
}
