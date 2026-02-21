import Image from "next/image";
import books from "@/content/books.json";

type Book = {
  id: string;
  title: string;
  subtitle: string;
  priceNote: string;
  buyUrl: string;
  cover: string;
};

export default function BooksPage() {
  const list = books as Book[];

  return (
    <div>
      <h1 className="text-2xl font-semibold">Books</h1>
      <p className="mt-2 text-gray-700">Practical writing that helps people build.</p>

      <div className="mt-6 grid gap-4">
        {list.map((b) => (
          <div key={b.id} className="rounded-xl border p-5">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative h-40 w-28 overflow-hidden rounded-md border">
                <Image src={b.cover} alt={b.title} fill className="object-cover" />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-semibold">{b.title}</h2>
                <p className="mt-1 text-sm text-gray-700">{b.subtitle}</p>
                <p className="mt-2 text-xs text-gray-500">{b.priceNote}</p>

                <div className="mt-4">
                  {b.buyUrl ? (
                    <a className="inline-block rounded-md border px-4 py-2 text-sm" href={b.buyUrl} target="_blank" rel="noreferrer">
                      Buy now
                    </a>
                  ) : (
                    <span className="inline-block rounded-md border px-4 py-2 text-sm text-gray-500">Coming soon</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}