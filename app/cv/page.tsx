import type { Metadata } from "next";
import { Download } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Curriculum Vitae", description: "Academic curriculum vitae of Muh. Akbar Idris." };

const sections = [
  { title: "Education", items: [["2024–Present", "M.S. in Data Science Statistics", "IPB University, Bogor, Indonesia"]] },
  { title: "Research Experience", items: [["2025–Present", "Graduate Researcher", "Spatial prediction of rice production using geographically weighted random forest"], ["2024–Present", "Independent Researcher", "Quantitative methods in ethnobotanical research"]] },
  { title: "Publications", items: [
    ["2026", "From Mapping to Modeling", "Ethnobotany Research and Applications · DOI: 10.32859/era.34.56.1-10"],
    ["2026", "Integrating Ethnobotany and Quantitative Methods", "Ethnobotany Research and Applications · DOI: 10.32859/era.34.37.1-9"],
    ["2026", "Clustering of Central Java Districts Based on Educational Indicators", "Journal of Mathematics, Computations and Statistics · DOI: 10.35580/xen35m31"],
    ["2025", "Pemodelan Geographically Weighted Regression pada Prevalensi Severely Stunting", "Journal of Mathematics: Theory and Applications · DOI: 10.31605/jomta.v7i1.4873"],
    ["2025", "Youth Empowerment in Ecosystem Management", "Jurnal Pemuda Indonesia · DOI: 10.65125/nq8dv394"],
    ["2023", "Pemetaan Produksi Perikanan Tangkap dengan DBSCAN", "Journal of Mathematics: Theory and Applications · DOI: 10.31605/jomta.v5i2.2930"],
    ["2022", "Some Fixed Point Results on Multiplicative Metric Spaces", "Journal of Mathematics: Theory and Applications · DOI: 10.31605/jomta.v4i1.1845"],
  ] },
];

export default function CvPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 sm:flex-row sm:items-end lg:px-8"><SectionHeading eyebrow="Curriculum vitae" title="Academic experience at a glance." /><Button asChild><Link href="/Muh-Akbar-Idris-CV.pdf" download><Download size={17} /> Download PDF</Link></Button></div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <Card className="mb-8 bg-ink text-white dark:bg-slate-900"><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald">Technical profile</p><div className="mt-5 flex flex-wrap gap-2">{["Python", "R", "SQL", "Spatial Statistics", "GWR", "GWRF", "Machine Learning", "ArcGIS", "QGIS", "Google Earth Engine", "LaTeX", "Git"].map((skill) => <Badge key={skill} className="bg-white/10 text-white">{skill}</Badge>)}</div></Card>
        <div className="space-y-6">{sections.map((section) => <Card key={section.title}><h2 className="text-xl font-semibold text-ink dark:text-white">{section.title}</h2><div className="mt-6 divide-y divide-slate-100 dark:divide-slate-800">{section.items.map(([date, title, detail]) => <div key={`${date}-${title}`} className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[130px_1fr]"><p className="text-sm font-semibold text-emerald">{date}</p><div><h3 className="font-semibold text-ink dark:text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{detail}</p></div></div>)}</div></Card>)}</div>
      </section>
    </>
  );
}
