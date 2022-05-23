import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Micky Rivera - Software Development</title>
        <meta name="description" content="Micky Rivera's portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <div className={styles.nav__text}>
            <h1 className={styles.nav__name}>
              Micky Rivera
            </h1>
            <h3 className={styles.nav__title}>
              Software Development
            </h3>
          </div>
        </nav>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
