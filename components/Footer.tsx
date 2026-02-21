export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Kaatib Yusuf</p>
      </div>
    </footer>
  );
}