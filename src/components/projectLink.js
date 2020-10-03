import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectLink = ({ icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default ProjectLink
