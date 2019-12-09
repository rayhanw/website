import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { ProjectActionBar } from "../../styled-components"

const ProjectActions = ({ github, project }) => {
  return (
    <ProjectActionBar>
      <a href={github} target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      {project ? (
        <a href={project} target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      ) : null}
    </ProjectActionBar>
  )
}

export default ProjectActions
