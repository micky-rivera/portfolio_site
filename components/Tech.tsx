import Image from 'next/image'
import styles from '../styles/Tech.module.css'

const Tech = () => {

  return (
    <div className={styles.tech}>
        <h1 className={styles.tech__title}>Some Technologies I Use</h1>
        <div className={styles.tech__container}>
        </div>
    </div>
  )
}

export default Tech;
