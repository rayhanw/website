import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const { contentfulBlog } = data

  return (
    <Layout>
      <h1>{contentfulBlog.title}</h1>
      <p>{contentfulBlog.publishedDate}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: contentfulBlog.content.childMarkdownRemark.html
        }}
      />
      <Link to="/blog">Back</Link>
    </Layout>
  )
}

export default BlogTemplate
