import Image from 'next/image'
import styles from '../styles/ProjectCard.module.css'
import Projects from './Projects';

const ProjectCard = ({project}: ProjectCardProps) => {

  //const imageUrl = `../assets/${project.img}`;
  const imageUrl = `/${project.img}`;

  return (
    <div className={styles.projectcard}>
      <div className={styles.projectcard__img}>
        <Image className={styles.projectcard__imgtag} src={imageUrl} layout='responsive' width='50' height='50' />
      </div>
      <p className={styles.projectcard__title}>{project.title}</p>
      <p className={styles.projectcard__desc}>{project.desc}</p>
      <div className={styles.projectcard__buttons}>
        <a className={styles.projectcard__github} target='_blank' rel="noreferrer" href={project.githubUrl}>
          <div className={styles.projectcard__githubImg}>
            <Image src={require('../assets/github.svg')}/>
          </div>
        </a>
        <a className={styles.projectcard__demo} target='_blank' rel="noreferrer" href={project.demoUrl}>
          <div className={styles.projectcard__demoImg}>
            <Image src={require('../assets/play-button.svg')}/>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;
