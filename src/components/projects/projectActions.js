import React from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { ProjectActionBar } from "../../styled-components"
import ProjectLink from "../projectLink"

const ProjectActions = ({ github, project }) => {
  return (
    <ProjectActionBar>
      <ProjectLink icon={faGithub} href={github} />
      {project ? <ProjectLink icon={faExternalLinkAlt} href={project} /> : null}
    </ProjectActionBar>
  )
}

export default ProjectActions
