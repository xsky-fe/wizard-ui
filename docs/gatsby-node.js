/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { snakeCase } = require('lodash')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      alias: {
        'wizard-ui': path.resolve(__dirname, '../src'),
      }
    }
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const componentPage = path.resolve(`./src/templates/components-post.js`);
  const defaultPage = path.resolve(`./src/templates/default.js`);

  graphql(
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
        allComponentMetadata {
          edges {
            node {
              fields {
                slug
              }
              displayName
              props {
                name
                type {
                  name
                  value
                }
                defaultValue {
                  value
                }
                required
                description {
                  text
                }
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
    const propTables = result.data.allComponentMetadata.edges;

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
        const parents = ['design-principles', 'layout', 'design-style', 'guide', 'navigation', 'data-entry', 'data-display', 'feedback', 'other'];
        // 组件 propTypes 解析
        const propTableDatas = propTables.filter(pt => {
          const pSlug = pt.node.fields.slug;
          const path = `/components/${snakeCase(pSlug).replace(/_/g, '-')}/`;
          return parents.some(i => `/${i}/${snakeCase(pSlug).replace(/_/g, '-')}/` === slug);
        });
        const propDatas = propTableDatas.length > 0 ? propTableDatas[0] : null;
        createPage({
          path: slug,
          component: componentPage,
          context: {
            slug,
            previous,
            next,
            propDatas,
          },
        })
      }
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if ([`Mdx`, 'ComponentMetadata'].includes(node.internal.type)) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}