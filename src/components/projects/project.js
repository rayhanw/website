import React from "react"

import ProjectActions from "./projectActions"
import { ProjectCard } from "../../styled-components"

const Project = ({ name, githubLink, projectLink, image }) => {
  return (
    <ProjectCard image={image}>
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <ProjectActions github={githubLink} project={projectLink} />
    </ProjectCard>
  )
}

export default Project
