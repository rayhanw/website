import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Blogs from "../components/blogs/Blogs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CenterContainer } from "../styled-components"

const Blog = () => {
  const {
    allContentfulBlog: { edges }
  } = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <CenterContainer>
        <SEO title="Blog" />
        <h1>Coming soon!</h1>
        <p>
          Stay tuned for more content. In the meantime, enjoy these random
          posts!
        </p>
        <Blogs blogs={edges} />
        <Link to="/">Back to home page</Link>
      </CenterContainer>
    </Layout>
  )
}

export default Blog
