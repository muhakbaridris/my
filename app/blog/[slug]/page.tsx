import type { Metadata } from "next";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { getPost, getPosts } from "@/lib/blog";

export function generateStaticParams() { return getPosts().map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  return { title: post?.title ?? "Research note", description: post?.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/blog" className="flex items-center gap-2 text-sm font-semibold text-emerald"><ArrowLeft size={16} /> All research notes</Link>
      <Badge className="mt-12">{post.category}</Badge>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl">{post.title}</h1>
      <div className="mt-6 flex items-center gap-4 text-sm text-slate-500"><span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span><span className="flex items-center gap-1"><Clock size={15} /> {post.readingTime} min read</span></div>
      <div className="prose mt-12 max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{post.content}</ReactMarkdown></div>
    </article>
  );
}
