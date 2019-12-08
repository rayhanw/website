import React from "react"

import Blog from "./Blog"

const Blogs = ({ blogs }) =>
  blogs.map(blog => <Blog {...blog} key={blog.node.slug} />)

export default Blogs
