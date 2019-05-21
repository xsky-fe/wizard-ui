/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from '@mdx-js/react';
import { Grid, Row, Col } from 'react-bootstrap';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import TopBar from "./TopBar";
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line jsx-a11y/heading-has-content
const MyH2 = props => <h2 style={{ color: 'red' }} {...props} />
const MyCodeComponent = ({ children, ...props }) => {
  return (
    <LiveProvider code={children} >
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}


const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={
      data => {
        const { location, children } = props;
        const { pathname } = location || {};
        const isComponenet = pathname && (pathname.includes('components') || pathname.includes('layout'));
        return (
          <div>
            {<TopBar />}
            <Grid fluid className="Main">
              {isComponenet ? (
                <Row>
                  <Col xs={2} md={3}>
                    <SideNav location={location}/>
                  </Col>
                  <Col xs={10} md={9}>
                    <MDXProvider components={{h2: MyH2, code: MyCodeComponent}}>{children}</MDXProvider>
                  </Col>
                </Row>
              ) : <MDXProvider>{children}</MDXProvider>}
            </Grid>
          </div>
        )
      }
    }
  />
)

export default Layout
