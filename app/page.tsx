import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import publications from "@/data/publications.json";
import { researchProjects } from "@/data/research";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KeywordCloud } from "@/components/keyword-cloud";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Stats } from "@/components/stats";
import { LocalizedText } from "@/components/language-provider";

export default function Home() {
  return (
    <>
      <section className="grid-texture relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-emerald/10 blur-3xl" />
        <div className="relative mx-auto grid min-h-[74vh] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
          <div>
            <Badge className="mb-6">IPB University · Bogor, Indonesia</Badge>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-.055em] text-ink dark:text-white sm:text-7xl lg:text-[5.6rem] lg:leading-[.96]">Muh. Akbar <span className="text-emerald">Idris</span></h1>
            <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-slate-700 dark:text-slate-200"><LocalizedText en="Master's Student in Data Science Statistics | Spatial Statistics Researcher" id="Mahasiswa Magister Statistika dan Sains Data | Peneliti Statistika Spasial" /></p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"><LocalizedText en="I build place-aware statistical and machine learning models to understand environmental and agricultural challenges, bridging rigorous methods with decisions that matter." id="Saya mengembangkan model statistika dan machine learning berbasis lokasi untuk memahami tantangan lingkungan dan pertanian serta menghasilkan bukti bagi pengambilan keputusan." /></p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link href="/Muh-Akbar-Idris-CV.pdf" download><Download size={17} /> <LocalizedText en="Download CV" id="Unduh CV" /></Link></Button>
              <Button asChild variant="outline"><Link href="/publications"><LocalizedText en="View publications" id="Lihat publikasi" /> <ArrowRight size={17} /></Link></Button>
              <Button asChild variant="outline"><Link href="/contact"><Mail size={17} /> <LocalizedText en="Contact me" id="Hubungi saya" /></Link></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rotate-3 rounded-[2.5rem] border border-emerald/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-mist shadow-soft dark:bg-slate-900">
              <Image src="/muh-akbar-idris.png" alt="Portrait of Muh. Akbar Idris" fill priority sizes="(max-width: 768px) 90vw, 380px" className="object-cover object-top transition duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/70 to-transparent" />
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-lg">Data Scientist · Researcher</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-16 lg:px-8"><Stats /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal><SectionHeading eyebrow="Research interests" eyebrowId="Minat riset" title="Questions grounded in place." titleId="Pertanyaan yang berakar pada tempat." text="My work sits where spatial thinking, modern computation, and domain knowledge meet." textId="Riset saya berada di persimpangan pemikiran spasial, komputasi modern, dan pengetahuan domain." /></Reveal>
        <Reveal className="mt-12"><KeywordCloud /></Reveal>
      </section>

      <section className="border-y border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><SectionHeading eyebrow="Selected work" eyebrowId="Karya pilihan" title="Latest publications" titleId="Publikasi terbaru" /></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {publications.slice(0, 3).map((publication) => (
              <Reveal key={publication.id}>
                <Card className="h-full">
                  <div className="flex items-center justify-between"><Badge>{publication.year}</Badge><span className="text-xs text-slate-500">{publication.citations} citations</span></div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-ink dark:text-white">{publication.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-500">{publication.journal}</p>
                  <Link href="/publications" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald">Read details <ArrowRight size={16} /></Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal><SectionHeading eyebrow="Current investigations" eyebrowId="Riset terkini" title="Featured research projects" titleId="Proyek riset unggulan" /></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {researchProjects.map((project) => <Reveal key={project.title}><ProjectCard project={project} /></Reveal>)}
        </div>
      </section>
    </>
  );
}
