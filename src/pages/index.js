import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { CenterContainer, HeaderContainer } from "../styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenterContainer>
      <HeaderContainer>
        <h1>Rayhan Wirjowerdojo</h1>
        <h2>Full-stack Web Developer</h2>
      </HeaderContainer>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/blog/">Blog</Link>
    </CenterContainer>
  </Layout>
)

export default IndexPage
