import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link className="text-sm hover:underline" href={href}>
    {label}
  </Link>
);

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold">
          Kaatib Yusuf
        </Link>
        <nav className="flex gap-4">
          <NavLink href="/essays" label="Essays" />
          <NavLink href="/books" label="Books" />
          <NavLink href="/work-with-me" label="Work with me" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  );
}