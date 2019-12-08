import React from "react"

import ThemeToggler from "./themeToggler"
import { HeaderBox, StyledLink } from "../styled-components"

const Header = () => (
  <HeaderBox>
    <ul>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/blog">Blog</StyledLink>
      </li>
    </ul>
    <ThemeToggler />
  </HeaderBox>
)

export default Header
