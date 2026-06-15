import type { Metadata } from "next";
import { researchProjects } from "@/data/research";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Research", description: "Current spatial statistics and data science research projects." };

export default function ResearchPage() {
  return (
    <>
      <section className="grid-texture border-b border-slate-200 dark:border-slate-800"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><SectionHeading eyebrow="Research" eyebrowId="Riset" title="Local models. Global relevance." titleId="Model lokal. Relevansi global." text="I investigate how spatially aware methods can improve prediction, interpretation, and decisions in agriculture and environmental research." textId="Saya meneliti bagaimana metode spasial dapat meningkatkan prediksi, interpretasi, dan keputusan dalam riset pertanian serta lingkungan." /></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-6 lg:grid-cols-2">{researchProjects.map((project) => <Reveal key={project.title}><ProjectCard project={project} /></Reveal>)}</div></section>
    </>
  );
}
