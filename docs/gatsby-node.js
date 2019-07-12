/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      alias: {
        'wizard-ui': path.resolve(__dirname, '../src/components'),
      }
    }
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const componentPage = path.resolve(`./src/templates/components-post.js`);
  const defaultPage = path.resolve(`./src/templates/default.js`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC },
          filter: { frontmatter: { title: { ne: "" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const slug = post.node.fields.slug;
      if (slug.includes('get-started')) {
        createPage({
          path: slug,
          component: defaultPage,
          context: {
            slug,
          },
        })
      } else {
        const next = index === posts.length - 1 ? null : posts[index + 1].node
        const previous = index === 0 ? null : posts[index - 1].node
        createPage({
          path: slug,
          component: componentPage,
          context: {
            slug,
            previous,
            next,
          },
        })
      }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}