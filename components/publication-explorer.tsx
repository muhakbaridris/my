"use client";

import { Check, Clipboard, Download, ExternalLink, Quote, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Publication } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PublicationExplorer({ publications }: { publications: Publication[] }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [topic, setTopic] = useState("all");
  const [copied, setCopied] = useState("");
  const years = [...new Set(publications.map((item) => item.year))].sort().reverse();
  const topics = [...new Set(publications.flatMap((item) => item.keywords))].sort();
  const filtered = useMemo(() => publications.filter((item) => {
    const haystack = `${item.title} ${item.abstract} ${item.keywords.join(" ")}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (year === "all" || item.year === Number(year)) && (topic === "all" || item.keywords.includes(topic));
  }).sort((a, b) => b.year - a.year), [publications, query, year, topic]);

  async function copy(text: string, id: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 1800);
  }

  function exportBibtex(publication: Publication) {
    const blob = new Blob([publication.bibtex], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = `${publication.id}.bib`; link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[1fr_180px_220px]">
        <label className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 dark:bg-slate-950"><Search size={17} className="text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent py-3 text-sm outline-none" placeholder="Search titles, abstracts, keywords..." /></label>
        <select value={year} onChange={(event) => setYear(event.target.value)} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm outline-none dark:bg-slate-950"><option value="all">All years</option>{years.map((item) => <option key={item}>{item}</option>)}</select>
        <select value={topic} onChange={(event) => setTopic(event.target.value)} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm outline-none dark:bg-slate-950"><option value="all">All topics</option>{topics.map((item) => <option key={item}>{item}</option>)}</select>
      </div>
      <p className="mt-5 text-sm text-slate-500">Showing {filtered.length} publication{filtered.length === 1 ? "" : "s"}, sorted newest first.</p>
      <div className="mt-8 space-y-5">
        {filtered.map((publication) => (
          <Card key={publication.id}>
            <div className="flex flex-wrap items-start justify-between gap-4"><Badge>{publication.year} · {publication.journal}</Badge><span className="flex items-center gap-1 text-xs font-semibold text-slate-500"><Quote size={14} /> {publication.citations} citations</span></div>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-snug text-ink dark:text-white">{publication.title}</h2>
            <p className="mt-3 text-sm font-medium text-emerald">{publication.authors.join(", ")}</p>
            <p className="mt-5 max-w-5xl leading-7 text-slate-600 dark:text-slate-300">{publication.abstract}</p>
            <div className="mt-5 flex flex-wrap gap-2">{publication.keywords.map((keyword) => <Badge key={keyword} className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{keyword}</Badge>)}</div>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => copy(`${publication.authors.join(", ")} (${publication.year}). ${publication.title}. ${publication.journal}. https://doi.org/${publication.doi}`, publication.id)}>{copied === publication.id ? <Check size={16} /> : <Clipboard size={16} />} Copy citation</Button>
              <Button variant="outline" onClick={() => exportBibtex(publication)}><Download size={16} /> Export BibTeX</Button>
              <Button variant="ghost" asChild><a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">DOI <ExternalLink size={15} /></a></Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
