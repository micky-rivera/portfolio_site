import styles from '../styles/Nav.module.css'

const Nav = () => {

  return (
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
  )
}

export default Nav;
