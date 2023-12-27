import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { pick } from "lodash";

import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Murilo Gois",
  description: "Portfolio de Murilo Gois",
  icons: "../public/favicon-32x32.png",
};

export default function Page() {
  const messages = useMessages();

  return (
    <>
      <NextIntlClientProvider messages={pick(messages, "Landing")}>
        <Landing />
      </NextIntlClientProvider>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
