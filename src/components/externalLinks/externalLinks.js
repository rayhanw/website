import React from "react"
import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import ExternalLink from "./externalLink"
import { LinkList } from "../../styled-components"

const ExternalLinks = () => {
  return (
    <LinkList>
      <ExternalLink link="https://www.github.com/rayhanw" icon={faGithub} />
      <ExternalLink
        link="https://www.linkedin.com/in/rayhanw"
        icon={faLinkedin}
      />
      <ExternalLink
        link="https://www.twitter.com/domosaurusdex"
        icon={faTwitter}
      />
      <ExternalLink
        link="mailto:rayhan.wirjowerdojo@gmail.com"
        icon={faEnvelope}
        mail
      />
    </LinkList>
  )
}

export default ExternalLinks
