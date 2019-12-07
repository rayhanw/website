import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CenterContainer } from "../styled-components"

const Blog = () => {
  return (
    <Layout>
      <CenterContainer>
        <SEO title="Blog" />
        <h1>Coming soon!</h1>
        <p>Stay tuned for more content...</p>
        <Link to="/">Back to home page</Link>
      </CenterContainer>
    </Layout>
  )
}

export default Blog
