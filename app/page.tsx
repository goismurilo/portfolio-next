import { Metadata } from "next";
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
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
