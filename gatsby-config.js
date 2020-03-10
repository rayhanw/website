require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Rayhan Wirjowerdojo`,
    description: `Fullstack Developer | I write good codes for a living.`,
    author: `@rayhanw`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/headshot.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              theme: "Dark+ (default dark)", // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: "", // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
              injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
              extensions: [], // Third-party extensions providing additional themes and languages
              languageAliases: {}, // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x, // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({
                // Function allowing dynamic setting of additional class names on individual lines
                content, //   - the string content of the line
                index, //   - the zero-based index of the line within the code fence
                language, //   - the language specified for the code fence
                meta //   - any options set on the code fence alongside the language (more on this later)
              }) => "",
              logLevel: "warn" // Set to 'info' to debug if something looks wrong
            }
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
