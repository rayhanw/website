import React from "react"
import { Link } from "gatsby"

import ThemeToggler from "./themeToggler"
import { HeaderBox } from "../styled-components"

const Header = () => (
  <HeaderBox>
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog" activeClassName="active">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/projects" activeClassName="active">
          Projects
        </Link>
      </li>
    </ul>
    <ThemeToggler />
  </HeaderBox>
)

export default Header
