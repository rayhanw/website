import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ExternalLink = ({ link, icon, mail }) => {
  if (mail) {
    return (
      <li>
        <a href={link}>
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    )
  }

  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  )
}

export default ExternalLink
