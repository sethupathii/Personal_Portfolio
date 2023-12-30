import React from 'react'
import styles from './project.module.css'
import project from '../../data/projects.json'

import ProjectCard from './projectCard'

const Project = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Project</h1>
            <div className={styles.project}>
                {project.map((project, index) => {
                    return <ProjectCard key={index} project={project} />
                })}
            </div>
        </section>
    )
}

export default Project