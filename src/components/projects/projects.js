import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./project"

const ProjectsCollection = () => {
  const {
    allContentfulProject: { edges }
  } = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            id
            name
            githubLink
            projectLink
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return edges.map(({ node }) => <Project {...node} key={node.id} />)
}

export default ProjectsCollection
