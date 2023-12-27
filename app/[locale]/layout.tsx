import { notFound } from "next/navigation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

const locale = ["en", "pt"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locale.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head></head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
