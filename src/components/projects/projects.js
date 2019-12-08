import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Project from "./project"

const projects = [
  {
    name: "An Airbnb for scooters",
    githubLink: "https://github.com/rayhanw/rentscootscoot",
    projectLink: "https://rentscootscoot.herokuapp.com/",
    image: "01-rentscootscoot"
  },
  {
    name: "A cocktail web app",
    githubLink: "https://github.com/rayhanw/rails-mister-cocktail",
    projectLink: "https://mr-cocktail-new.herokuapp.com/",
    image: "02-mr-cocktail"
  },
  {
    name: "A simple Airbnb mockup",
    githubLink: "https://github.com/rayhanw/rails-simple-airbnb",
    projectLink: "",
    image: "03-placeholder"
  },
  {
    name: "Find co-working spaces in Jakarta",
    githubLink: "https://github.com/rayhanw/co-spaces/",
    projectLink: "https://co-spaces.id/",
    image: "04-co-spaces"
  },
  {
    name: "A shared worldwide calendar for everyone to use!",
    githubLink: "https://github.com/rayhanw/events-backend",
    projectLink: "https://event-event-event.herokuapp.com/",
    image: "05-event3x"
  }
]

const ProjectsCollection = () => {
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { base: { regex: "/0/" } }, sort: { fields: base }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  return projects.map((project, index) => {
    project.image = edges[index].node.publicURL
    return <Project {...project} key={index + 1} />
  })
}

export default ProjectsCollection
