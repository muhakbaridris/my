import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminCookieName, verifyAdminToken } from "@/lib/admin-auth";

const apiBase = "https://api.github.com";

function githubHeaders() {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function getFile(path: string) {
  const response = await fetch(`${apiBase}/repos/${process.env.GITHUB_REPO}/contents/${path}`, { headers: githubHeaders(), cache: "no-store" });
  if (!response.ok) throw new Error(`Tidak dapat membaca ${path} dari GitHub.`);
  return response.json();
}

async function writeFile(path: string, content: string, message: string, sha?: string) {
  const response = await fetch(`${apiBase}/repos/${process.env.GITHUB_REPO}/contents/${path}`, {
    method: "PUT",
    headers: { ...githubHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ message, content: Buffer.from(content).toString("base64"), sha }),
  });
  if (!response.ok) throw new Error(`GitHub menolak perubahan pada ${path}.`);
}

export async function POST(request: Request) {
  const store = await cookies();
  if (!verifyAdminToken(store.get(adminCookieName())?.value)) {
    return NextResponse.json({ message: "Sesi admin tidak valid." }, { status: 401 });
  }
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPO) {
    return NextResponse.json({ message: "Atur GITHUB_TOKEN dan GITHUB_REPO di Vercel terlebih dahulu." }, { status: 503 });
  }

  try {
    const body = await request.json();
    if (body.type === "publication") {
      const file = await getFile("data/publications.json");
      const publications = JSON.parse(Buffer.from(file.content, "base64").toString("utf8"));
      const title = String(body.title).trim();
      const publication = {
        id: slugify(title),
        title,
        authors: String(body.authors).split(",").map((item) => item.trim()).filter(Boolean),
        journal: String(body.journal).trim(),
        year: Number(body.year),
        doi: String(body.doi).replace(/^https?:\/\/doi.org\//, "").trim(),
        abstract: String(body.abstract).trim(),
        keywords: String(body.keywords).split(",").map((item) => item.trim()).filter(Boolean),
        pdf: `https://doi.org/${String(body.doi).replace(/^https?:\/\/doi.org\//, "").trim()}`,
        citations: 0,
        bibtex: String(body.bibtex || "").trim(),
      };
      publications.unshift(publication);
      await writeFile("data/publications.json", `${JSON.stringify(publications, null, 2)}\n`, `Add publication: ${title}`, file.sha);
    } else if (body.type === "blog") {
      const title = String(body.title).trim();
      const slug = slugify(title);
      const markdown = `---\ntitle: "${title.replaceAll('"', '\\"')}"\nexcerpt: "${String(body.excerpt).replaceAll('"', '\\"')}"\ndate: "${String(body.date)}"\ncategory: "${String(body.category).replaceAll('"', '\\"')}"\n---\n\n${String(body.content).trim()}\n`;
      await writeFile(`content/blog/${slug}.md`, markdown, `Add blog post: ${title}`);
    } else {
      return NextResponse.json({ message: "Tipe konten tidak dikenali." }, { status: 400 });
    }
    return NextResponse.json({ message: "Berhasil disimpan ke GitHub. Vercel akan deploy ulang otomatis." });
  } catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "Gagal menyimpan perubahan." }, { status: 500 });
  }
}
