import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard'

const Projects = ({data}: ProjectsProps) => {

  return (
    <div className={styles.projects}>
        <h1 className={styles.projects__title}>Some of My Projects</h1>
        <div className={styles.projects__container}>
            <ProjectCard data={data} />
        </div>
    </div>
  )
}

export default Projects;