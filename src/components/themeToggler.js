import React from "react"
import { ThemeToggler as Toggler } from "gatsby-plugin-dark-mode"

import "./styles/toggle.css"

const ThemeToggler = () => (
  <Toggler>
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
  </Toggler>
)

export default ThemeToggler
