import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Example from '../components/Example'

import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Murilo Gois</title>
        <meta name="description" content="Portfolio de Murilo Gois" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar />

      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
