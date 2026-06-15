import type { Metadata } from "next";
import { BookOpen, GraduationCap, Map, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { KeywordCloud } from "@/components/keyword-cloud";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "About", description: "Biography, education, skills, and academic journey of Muh. Akbar Idris." };

const skillGroups = [
  { title: "Programming", skills: [["Python", 88], ["R", 92], ["SQL", 78]] },
  { title: "Statistical methods", skills: [["Spatial Statistics", 94], ["GWR / GWRF", 91], ["Machine Learning", 86], ["Data Mining", 82]] },
  { title: "Research tools", skills: [["ArcGIS / QGIS", 90], ["Google Earth Engine", 76], ["LaTeX / Git", 85]] },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><SectionHeading eyebrow="About me" title="Turning complex spatial patterns into useful evidence." text="I am a Master's student in Data Science Statistics at IPB University, focused on spatial statistics, machine learning, ethnobotany, bibliometric analysis, and geographically weighted modeling." /></div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <Reveal>
          <div className="sticky top-24 rounded-[2.5rem] bg-ink p-8 text-white dark:bg-slate-900">
            <Map className="text-emerald" size={34} />
            <p className="mt-10 text-2xl font-medium leading-10">“Good models do more than predict. They reveal how context changes the story.”</p>
            <p className="mt-8 text-sm text-slate-300">Muh. Akbar Idris · Research philosophy</p>
          </div>
        </Reveal>
        <div className="space-y-12">
          <Reveal><div><h2 className="text-2xl font-semibold text-ink dark:text-white">Professional biography</h2><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Muh. Akbar Idris is a Master's student in Data Science Statistics at IPB University. His research focuses on spatial statistics, machine learning, ethnobotany, bibliometric analysis, and geographically weighted modeling. He is passionate about developing data-driven solutions for environmental and agricultural challenges.</p></div></Reveal>
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold text-ink dark:text-white">Academic journey</h2>
              <div className="mt-7 border-l border-emerald/30 pl-7">
                {[
                  ["2024–Present", "M.S. Data Science Statistics", "IPB University · Advanced training in statistical learning and spatial modeling", GraduationCap],
                  ["2023–Present", "Independent Researcher", "Building cross-disciplinary work in ethnobotany, bibliometrics, and GIS", BookOpen],
                  ["Ongoing", "Open science practice", "Reproducible analysis, clear communication, and collaborative research", Sparkles],
                ].map(([year, title, text, Icon]) => (
                  <div key={String(title)} className="relative pb-9 last:pb-0">
                    <span className="absolute -left-[2.32rem] grid h-5 w-5 place-items-center rounded-full bg-emerald ring-4 ring-[#f8fbfa] dark:ring-slate-950"><Icon className="text-white" size={10} /></span>
                    <Badge>{String(year)}</Badge><h3 className="mt-3 font-semibold text-ink dark:text-white">{String(title)}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{String(text)}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><SectionHeading eyebrow="Capabilities" title="Methods and tools" /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{skillGroups.map((group) => <Reveal key={group.title}><Card><h3 className="text-lg font-semibold text-ink dark:text-white">{group.title}</h3><div className="mt-6 space-y-5">{group.skills.map(([skill, level]) => <div key={skill}><div className="mb-2 flex justify-between text-sm"><span>{skill}</span><span className="text-slate-400">{level}%</span></div><div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-emerald" style={{ width: `${level}%` }} /></div></div>)}</div></Card></Reveal>)}</div></div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><Reveal><KeywordCloud /></Reveal></section>
    </>
  );
}
