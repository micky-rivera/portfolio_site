import Image from 'next/image'
import styles from '../styles/Tech.module.css'

const Tech = ({tech}: TechProps) => {

  return (
    <div className={styles.tech}>
        <h1 className={styles.tech__title}>Some Technologies I Use</h1>
        <div className={styles.tech__container}>
          {tech.map((tech: Tech, index: number)=> (
            <div className={styles.tech__icon} key={index}>
              <Image src={require(`../assets/${tech}.svg`)} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Tech;
