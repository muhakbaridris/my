import { ArrowUpRight, Database, FlaskConical } from "lucide-react";
import Link from "next/link";
import type { ResearchProject } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ProjectCard({ project }: { project: ResearchProject }) {
  return (
    <Card className="group flex h-full flex-col hover:-translate-y-1 hover:border-emerald/40">
      <Badge className="mb-5 w-fit">{project.status}</Badge>
      <h3 className="text-xl font-semibold leading-snug text-ink dark:text-white">{project.title}</h3>
      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-6 flex items-start gap-3 text-sm text-slate-500"><FlaskConical className="mt-0.5 shrink-0 text-emerald" size={17} /><span>{project.methods.join(" · ")}</span></div>
      <div className="mt-3 flex items-start gap-3 text-sm text-slate-500"><Database className="mt-0.5 shrink-0 text-emerald" size={17} /><span>{project.dataset}</span></div>
      <Link href={project.repository} className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-emerald">Repository <ArrowUpRight size={16} /></Link>
    </Card>
  );
}
