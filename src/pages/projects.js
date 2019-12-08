import React from "react"

import ProjectsCollection from "../components/projects/projects"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { ProjectGrid } from "../styled-components"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h3>Projects that I've worked on</h3>
      <ProjectGrid>
        <ProjectsCollection />
      </ProjectGrid>
    </Layout>
  )
}

export default Projects
