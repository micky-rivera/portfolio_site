import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Greeting from '../components/Greeting'
import Nav from '../components/Nav'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Micky Rivera - Software Development</title>
        <meta name="description" content="Micky Rivera's portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Greeting />

      <main className={styles.main}>
        <About />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
