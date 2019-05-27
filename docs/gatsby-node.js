/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('ts-node/register')
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      alias: {
        'wizard-ui': path.resolve(__dirname, '../src/index.tsx')
      }
    },
  })
}

