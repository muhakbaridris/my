import type { Metadata } from "next";
import publications from "@/data/publications.json";
import { PublicationExplorer } from "@/components/publication-explorer";
import { SectionHeading } from "@/components/section-heading";
import type { Publication } from "@/types";

export const metadata: Metadata = { title: "Publications", description: "Publications by Muh. Akbar Idris in spatial statistics, ethnobotany, and data science." };

export default function PublicationsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><SectionHeading eyebrow="Publications" eyebrowId="Publikasi" title="Research, in full context." titleId="Riset dalam konteks utuh." text="Search, filter, cite, and export my published work." textId="Cari, saring, kutip, dan ekspor karya ilmiah saya." /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><PublicationExplorer publications={publications as Publication[]} /></section>
    </>
  );
}
