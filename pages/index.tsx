import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Example from '../components/Example'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Portfolio from '../components/Projects'
import Experience from '../components/Experience'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Murilo Gois</title>
        <meta name="description" content="Portfolio de Murilo Gois" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing />
      {/* //TODO
      <AddExperinceInNumvbers /> */}
      <Portfolio />
      <Experience />

      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
