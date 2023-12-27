import { notFound } from "next/navigation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

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

  const messages = useMessages();

  return (
    <html lang={locale}>
      <head></head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
