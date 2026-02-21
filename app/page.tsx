import Link from "next/link";
import { getAllEssays } from "@/lib/mdx";
import SubscribeForm from "@/components/SubscribeForm";

export default function HomePage() {
  const essays = getAllEssays().slice(0, 5);

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold leading-tight">I write, I build, and I teach.</h1>
        <p className="mt-3 text-gray-700">Essays on discipline, Islamic education, and systems that last.</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="rounded-md border px-4 py-2 text-sm" href="/work-with-me">
            Work with me
          </Link>
          <Link className="rounded-md border px-4 py-2 text-sm" href="/essays">
            Read essays
          </Link>
          <Link className="rounded-md border px-4 py-2 text-sm" href="/books">
            Visit the bookstore
          </Link>
        </div>
      </section>

      <section className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">Newsletter</h2>
        <p className="mt-1 text-sm text-gray-700">One clear message per week. No noise.</p>
        <SubscribeForm />
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold">Featured essays</h2>
          <Link className="text-sm underline" href="/essays">
            All essays
          </Link>
        </div>

        <div className="mt-4 space-y-4">
          {essays.map((e) => (
            <article key={e.slug} className="rounded-xl border p-5">
              <h3 className="font-semibold">
                <Link href={`/essays/${e.slug}`} className="hover:underline">
                  {e.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-700">{e.description}</p>
              <p className="mt-2 text-xs text-gray-500">
                {e.date} • {e.readingMinutes} min read
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}