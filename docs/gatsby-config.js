const Path = require('path')
module.exports = {
  pathPrefix: `/wizard-ui`,
  siteMetadata: {
    siteUrl: 'https://wizard-ui.netlify.com/',
    title: `Wizard UI Documentation`,
    description: `Wizard UI Documentation.`,
    author: `xsky contributors`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wizard-ui`,
        path:  Path.resolve(__dirname, `../src/components`),
        ignore: [`**/*.test.tsx`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-react-docgen`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ['title', 'author', 'path'],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type Mdx, list how to resolve the fields` values
          Mdx: {
            title: node => node.frontmatter.title,
            author: node => node.frontmatter.author,
            path: node => node.fields.slug,
          },
        },
      },
    },
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
      options: {
        precision: 8,
      },
    },
  ],
}
