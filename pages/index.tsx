import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Murilo Gois</title>
        <meta name="description" content="Portfolio de Murilo Gois" />
        <link rel="icon" href="../public/favicon-32x32.png" />
      </Head>
      <Navbar />
      <Landing />
      <AboutMe />
      {/* //TODO
      <AddExperinceInNumvbers /> */}
      <Projects />
      <Experience />
      <Contact />

      <footer className="flex flex-wrap justify-center items-center p-10">
        <a
          href="https://www.linkedin.com/in/goismurilo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary-light flex items-center"
        >
          <p>Desenvolvido por </p>
          <span>
            <Image
              src="/logo-with-name.svg"
              alt="goisMurilo Logo"
              width={200}
              height={80}
            />
          </span>
        </a>
        <p className="text-white w-screen text-center">
          Copyright &copy; 2032 goisMurilo | All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
