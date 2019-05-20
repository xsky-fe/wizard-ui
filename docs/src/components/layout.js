/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from '@mdx-js/tag';

import TopBar from "./TopBar"
import 'bootstrap/dist/css/bootstrap.min.css';

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => {
//       console.log('data', data);
//       return (
//         (
//           <>
//             <TopBar siteTitle={data.site.siteMetadata.title} />
//             <div>
//               <main>{children}</main>
//             </div>
//           </>
//         )
//       )
//     }}
//   />
// )

function Layout(props) {
  return (
    <div>
      <TopBar/>
      <MDXProvider>{props.children}</MDXProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
