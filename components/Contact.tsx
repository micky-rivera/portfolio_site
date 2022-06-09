import Image from 'next/image'
import styles from '../styles/Contact.module.css'

const Contact = () => {

  return (
    <div className={styles.contact__section}>
        <h1 className={styles.contact__title}>Get In Touch</h1>
        <div className={styles.contact__container}>
            <div className={styles.contact__content}>
                <form className={styles.contact__form}
                action='https://formsubmit.co/micky.rivera@appliedtechnology.se'
                method='POST'
                >
                    <input type='text' name='name' required/>
                    <br></br>
                    <input type='email' name='email' required/>
                    <br></br>
                    <button className={styles.contact__submit}>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
