/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from '@mdx-js/tag';
import { Grid, Row, Col } from 'react-bootstrap';
import TopBar from "./TopBar";
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout(props) {
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
              <MDXProvider>{children}</MDXProvider>
            </Col>
          </Row>
        ) : <MDXProvider>{children}</MDXProvider>}
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
