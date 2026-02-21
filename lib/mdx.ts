import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const essaysDir = path.join(process.cwd(), "content", "essays");

export type EssayMeta = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  readingMinutes?: number;
  slug: string;
};

export function getAllEssaySlugs(): string[] {
  if (!fs.existsSync(essaysDir)) return [];
  return fs
    .readdirSync(essaysDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getEssayBySlug(slug: string) {
  const fullPath = path.join(essaysDir, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const rt = readingTime(content);

  const meta: EssayMeta = {
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingMinutes: Math.max(1, Math.round(rt.minutes)),
    slug,
  };

  return { meta, content };
}

export function getAllEssays(): EssayMeta[] {
  const slugs = getAllEssaySlugs();
  const all = slugs.map((slug) => getEssayBySlug(slug).meta);
  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}