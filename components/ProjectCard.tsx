import Image from 'next/image'
import styles from '../styles/ProjectCard.module.css'

const ProjectCard = ({data}: ProjectCardProps) => {

  return (
    <div className={styles.projectcard}>
        <div className={styles.projectcard__img}>
            <h2>img here</h2>
        </div>
        <p className={styles.projectcard__title}>Title here</p>
        <p className={styles.projectcard__desc}>description here blah blah eiufb3ifuh weoiwef oiwdoidwjefoe uwhfiuh oweuhf owuehfwuife wuehf wfr.</p>
        <div className={styles.projectcard__buttons}>
            <div className={styles.projectcard__github}>
              <div className={styles.projectcard__githubImg}>
                <Image src={require('../assets/github.svg')}/>
              </div>
            </div>
            <div className={styles.projectcard__demo}>
              <div className={styles.projectcard__demoImg}>
                <Image src={require('../assets/play-button.svg')}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
