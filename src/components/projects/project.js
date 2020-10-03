import React from "react"

import ProjectActions from "./projectActions"
import { ProjectCard } from "../../styled-components"

const Project = ({ name, githubLink, projectLink, image }) => {
  return (
    <ProjectCard>
      <h4>{name}</h4>
      <img src={image.file.url} alt={name} />
      <ProjectActions github={githubLink} project={projectLink} />
    </ProjectCard>
  )
}

export default Project
