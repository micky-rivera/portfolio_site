import Image from 'next/image'
import styles from '../styles/Contact.module.css'

const Contact = () => {

  return (
    <div className={styles.contact__section}>
        <h1 className={styles.contact__title}>Get In Touch</h1>
        <div className={styles.contact__container}>
            <div className={styles.contact__content}>
                <form className={styles.contact__form}
                action='https://formsubmit.co/3ad923860abba851e89927089ba3395d'
                method='POST'
                >
                    <p className={styles.contact__label}>Name:</p>
                    <input className={styles.contact__name} type='text' name='name' required/>
                    <br></br>
                    <p className={styles.contact__label}>Email:</p>
                    <input className={styles.contact__email} type='email' name='email' required/>
                    <br></br>
                    <p className={styles.contact__label}>Message:</p>
                    <textarea className={styles.contact__message} name='message' required/>
                    <br></br>
                    <button className={styles.contact__submit}>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
