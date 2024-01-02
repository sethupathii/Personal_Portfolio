import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Helmet } from "react-helmet";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <Helmet>
        <meta property="og:image" content="https://albion-backend.s3.ap-south-1.amazonaws.com/properties/1b8fe7e708e2f24168dcc5dfbe71e638.jpg" />
      </Helmet>

      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
