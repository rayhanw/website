import React from "react"

import { BlogBox } from "../../styled-components"

const Blog = ({ node }) => {
  const { title, slug, publishedDate } = node

  return (
    <BlogBox to={`/blog/${slug}`} className="blog-box">
      <h3>
        <i>{title}</i>
      </h3>
      <span>
        Published on <strong>{publishedDate}</strong>
      </span>
    </BlogBox>
  )
}

export default Blog
