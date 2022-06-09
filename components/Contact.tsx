import Image from 'next/image'
import styles from '../styles/Contact.module.css'

const Contact = () => {

  return (
    <div className={styles.contact__section}>
        <h1 className={styles.contact__title}>Get In Touch</h1>
        <div className={styles.contact__container}>
            <div className={styles.contact__content}>
                <p>Email form goes here</p>
            </div>
        </div>
    </div>
  )
}

export default Contact;
