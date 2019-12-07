/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import "./styles/layout.css"
import "./styles/toggle.css"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="switch-box">
            <label className="switch">
              <input
                type="checkbox"
                id="toggler"
                checked={theme === "dark"}
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              />
              <span className="slider round"></span>
            </label>
          </div>
        )}
      </ThemeToggler>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
