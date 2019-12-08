import React from "react"
import { Link } from "gatsby"

import ThemeToggler from "./themeToggler"
import { HeaderBox } from "../styled-components"

const Header = () => (
  <HeaderBox>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
    <ThemeToggler />
  </HeaderBox>
)

export default Header
