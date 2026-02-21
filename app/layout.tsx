import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kaatib Yusuf",
  description: "Writer. Founder. Builder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}