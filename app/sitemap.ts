import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muhakbaridris.vercel.app";
  const routes = ["", "/about", "/research", "/publications", "/cv", "/blog", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" as const : "yearly" as const, priority: route === "" ? 1 : .8 })),
    ...getPosts().map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "yearly" as const, priority: .6 })),
  ];
}
