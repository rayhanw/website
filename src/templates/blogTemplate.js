import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const { contentfulBlog } = data
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const src = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={src} height={300} width={300} />
      }
    }
  }

  return (
    <Layout>
      <h1>{contentfulBlog.title}</h1>
      <p>{contentfulBlog.publishedDate}</p>
      {documentToReactComponents(contentfulBlog.body.json, options)}
    </Layout>
  )
}

export default BlogTemplate
