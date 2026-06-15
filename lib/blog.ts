import fs from "node:fs";
import path from "node:path";
import { load } from "js-yaml";
import { readingTime } from "@/lib/utils";

const contentDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
  content: string;
};

export function getPosts(): BlogPost[] {
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md")).map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDirectory, file), "utf8");
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) throw new Error(`Invalid front matter in ${file}`);
    const data = load(match[1]) as Record<string, string>;
    const content = match[2];
    return { slug, title: data.title, excerpt: data.excerpt, date: data.date, category: data.category, readingTime: readingTime(content), content };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
