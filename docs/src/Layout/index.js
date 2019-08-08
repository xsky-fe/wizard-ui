/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import TopBar from '../components/TopBar';
import { Grid } from 'react-bootstrap';
import './style.scss';

const Layout = props => {
  return (
    <div>
      {<TopBar slug={props.slug} location={props.location} />}
      <Grid fluid className="Main">
        {props.children}
      </Grid>
    </div>
  );
};

export default Layout;
