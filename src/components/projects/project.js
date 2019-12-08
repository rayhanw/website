import React from "react"

import ProjectActions from "./projectActions"
import { ProjectCard } from "../../styled-components"

const Project = ({ name, githubLink, projectLink, image }) => {
  return (
    <ProjectCard image={image}>
      <h3>{name}</h3>
      <ProjectActions github={githubLink} project={projectLink} />
      <img src={image} alt={name} />
    </ProjectCard>
  )
}

export default Project
