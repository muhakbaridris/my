"use client";

import { ArrowRight, Clock, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function BlogExplorer({ posts }: { posts: Omit<BlogPost, "content">[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = [...new Set(posts.map((post) => post.category))];
  const filtered = useMemo(() => posts.filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase()) && (category === "all" || post.category === category)), [posts, query, category]);
  return (
    <>
      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:flex-row">
        <label className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-4 dark:bg-slate-950"><Search size={17} className="text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search research notes..." className="w-full bg-transparent py-3 text-sm outline-none" /></label>
        <div className="flex gap-2 overflow-x-auto">{["all", ...categories].map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${category === item ? "bg-ink text-white dark:bg-emerald" : "bg-slate-50 text-slate-500 dark:bg-slate-950"}`}>{item === "all" ? "All categories" : item}</button>)}</div>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{filtered.map((post) => <Card key={post.slug} className="flex flex-col"><Badge className="w-fit">{post.category}</Badge><h2 className="mt-5 text-xl font-semibold leading-snug text-ink dark:text-white">{post.title}</h2><p className="mt-4 flex-1 text-sm leading-7 text-slate-500">{post.excerpt}</p><div className="mt-6 flex items-center justify-between text-xs text-slate-400"><span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span><span className="flex items-center gap-1"><Clock size={14} /> {post.readingTime} min read</span></div><Link href={`/blog/${post.slug}`} className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald">Read note <ArrowRight size={15} /></Link></Card>)}</div>
    </>
  );
}
