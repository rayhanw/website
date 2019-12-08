import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { ProjectActionBar } from "../../styled-components"

const ProjectActions = ({ github, project }) => {
  return (
    <ProjectActionBar>
      <a href={github}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={project}>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
    </ProjectActionBar>
  )
}

export default ProjectActions
