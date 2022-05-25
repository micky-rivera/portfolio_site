import styles from '../styles/Greeting.module.css'
import Image from 'next/image';

const Greeting = () => {

    const scrollDown = () => {
        window.scrollTo({
          top: 880,
          behavior: 'smooth'
        });
    };

  return (
    <div className={styles.greeting}>
        <h2 className={styles.greeting__greeting}>Hey, I&apos;m Micky!</h2>
        <h1 className={styles.greeting__title}>a Full-Stack JavaScript Developer</h1>
        <h2 className={styles.greeting__segue}>Check out more info below!</h2>

        <div className={styles.greeting__downButton} onClick={scrollDown}>
            <div className={styles.greeting__downArrow}>
                <Image src={require('../assets/down-arrow.svg')} />
            </div>
        </div>
    </div>
  )
}

export default Greeting;
