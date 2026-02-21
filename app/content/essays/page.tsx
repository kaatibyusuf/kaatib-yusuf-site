import Link from "next/link";
import { getAllEssays } from "@/lib/mdx";

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Essays</h1>
      <p className="mt-2 text-gray-700">Writing with clarity and purpose.</p>

      <div className="mt-6 space-y-4">
        {essays.map((e) => (
          <article key={e.slug} className="rounded-xl border p-5">
            <h2 className="font-semibold">
              <Link href={`/essays/${e.slug}`} className="hover:underline">
                {e.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-gray-700">{e.description}</p>
            <p className="mt-2 text-xs text-gray-500">
              {e.date} • {e.readingMinutes} min read
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}