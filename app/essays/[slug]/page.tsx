import { getAllEssaySlugs, getEssayBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllEssaySlugs().map((slug) => ({ slug }));
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const { meta, content } = getEssayBySlug(params.slug);

  return (
    <article className="prose prose-neutral max-w-none">
      <h1>{meta.title}</h1>
      <p className="text-sm text-gray-500">
        {meta.date} • {meta.readingMinutes} min read
      </p>
      <MDXRemote source={content} />
    </article>
  );
}