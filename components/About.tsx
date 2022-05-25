import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {

  return (
    <div className={styles.about}>
        <h1 className={styles.about__title}>About Me</h1>
        <div className={styles.about__container}>
            <div className={styles.about__img}>
                <Image src={require('../assets/micky.rivera.png')}/>
            </div>
            <p className={styles.about__text}>I&apos;m Micky, a Dominican American living and working in Stockholm. I&apos;m passionate about rock climbing, the outdoors, and of course, tech.</p>
        </div>
    </div>
  )
}

export default About;
