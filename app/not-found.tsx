import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <section className="grid min-h-[65vh] place-items-center px-5 text-center"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-emerald">404 · Not found</p><h1 className="mt-4 text-5xl font-semibold text-ink dark:text-white">This path has no data.</h1><p className="mt-5 text-slate-500">The page may have moved, or the model may need another variable.</p><Button asChild className="mt-8"><Link href="/">Return home</Link></Button></div></section>;
}
