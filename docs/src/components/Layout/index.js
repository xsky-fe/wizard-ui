/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Grid, Row, Col } from 'react-bootstrap';
import Playground from '../Playground';
import TopBar from '../TopBar';
import SideNav from '../SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';

const components = {
  code: Playground,
  pre: props => <div className="pre" {...props} />
};

const Layout = props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                author
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {location, children} = props;
      const {pathname} = location || {};
      const isComponenet =
        pathname &&
        (pathname.includes ('components') || pathname.includes ('layout'));
      return (
        <div>
          {<TopBar />}
          <Grid fluid className="Main">
            {isComponenet
              ? <Row>
                  <Col xs={2} md={3}>
                    <SideNav location={location} />
                  </Col>
                  <Col xs={10} md={9}>
                    <MDXProvider components={components}>
                      {children}
                    </MDXProvider>
                  </Col>
                </Row>
              : <MDXProvider>{children}</MDXProvider>}
          </Grid>
        </div>
      );
    }}
  />
);

export default Layout;
