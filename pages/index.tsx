import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Greeting from '../components/Greeting'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Globe from '../components/Globe'
import Contact from '../components/Contact'

const url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://portfolio-micky.vercel.app/";

const Home = ({ data }: HomeProps) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Micky Rivera - Software Development</title>
        <meta name="description" content="Micky Rivera's portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Globe />

      <Greeting />

      <main className={styles.main}>
        <About />
        <Projects data={data} />
        <Contact />

        <footer className={styles.footer}>
          <h3 className={styles.footer__credit}>Created by Micky Rivera</h3>
        </footer>
      </main>

    </div>
  )
}

export default Home

export async function getServerSideProps() {

  const response = await fetch(`${url}/api/projects`);
  const data: Projects = await response.json();

  return {
    props: {
      data: data
    },
  }
}
