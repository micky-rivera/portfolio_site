import styles from '../styles/Home.module.css'

const Greeting = () => {

    const scrollDown = () => {
        window.scrollTo({
          top: 1100,
          behavior: 'smooth'
        });
    };

  return (
    <div className={styles.greeting}>
    <h2 className={styles.greeting__greeting}>Hey, I'm Micky!</h2>
    <h1 className={styles.greeting__title}>a Full-Stack JavaScript Developer</h1>
    <h2 className={styles.greeting__segue}>Check out more info below!</h2>

    <div className={styles.greeting__downButton} onClick={scrollDown}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 330 330">
        <path fill="#E9ECEF" id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
        </svg>
    </div>
    </div>
  )
}

export default Greeting;
