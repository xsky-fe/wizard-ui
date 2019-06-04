const Path = require('path')
module.exports = {
  pathPrefix: `/wizard-ui`,
  siteMetadata: {
    title: `Wizard UI Documentation`,
    description: `Wizard UI Documentation.`,
    author: `xsky contributors`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wizard-ui`,
        path:  Path.resolve(__dirname, `../src/lib`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    `gatsby-mdx`,
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: true // false or exclude to disable tslint
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-react-docgen`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wizard-ui`,
        short_name: `wui`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      cssLoaderOptions: {
        camelCase: false,
      },
    },
  ],
}
