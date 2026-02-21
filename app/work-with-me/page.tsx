import Link from "next/link";

export default function WorkWithMePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Work with me</h1>
      <p className="text-gray-700">
        If you need writing, curriculum structuring, or clear systems for a serious project, I’m available for selected work.
      </p>

      <div className="rounded-xl border p-5">
        <h2 className="font-semibold">What I can help with</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
          <li>Institutional clarity and structure</li>
          <li>Islamic education content and curriculum</li>
          <li>Writing and thought leadership</li>
          <li>Product direction for education tools</li>
        </ul>

        <div className="mt-4">
          <Link className="rounded-md border px-4 py-2 text-sm" href="/contact">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}