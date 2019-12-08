import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {
  CenterContainer,
  HeaderTextContainer,
  HeaderContainer
} from "../styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenterContainer>
      <HeaderContainer>
        <HeaderTextContainer>
          <h1>Rayhan Wirjowerdojo</h1>
          <h2>Full-stack Web Developer</h2>
        </HeaderTextContainer>
        <Image />
      </HeaderContainer>
    </CenterContainer>
  </Layout>
)

export default IndexPage
