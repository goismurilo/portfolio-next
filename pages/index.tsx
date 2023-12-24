import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

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
      {/* <Experience /> */}
      {/* <Contact /> */}

      <Footer />
    </div>
  );
};

export default Home;
