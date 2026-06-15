import type { Metadata } from "next";
import { BlogExplorer } from "@/components/blog-explorer";
import { SectionHeading } from "@/components/section-heading";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = { title: "Research Blog", description: "Research notes on spatial statistics, data science, and reproducible analysis." };

export default function BlogPage() {
  const posts = getPosts().map(({ content, ...post }) => post);
  return (
    <>
      <section className="grid-texture border-b border-slate-200 dark:border-slate-800"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><SectionHeading eyebrow="Research notes" eyebrowId="Catatan riset" title="Methods, maps, and working ideas." titleId="Metode, peta, dan gagasan." text="Short essays about spatial statistics, reproducible workflows, and the questions behind the models." textId="Tulisan singkat tentang statistika spasial, alur kerja reprodusibel, dan pertanyaan di balik model." /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><BlogExplorer posts={posts} /></section>
    </>
  );
}
