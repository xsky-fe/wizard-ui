/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import TopBar from '../components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from 'react-bootstrap';
import './style.scss';

const Layout = props => {
  return (
    <div>
      {<TopBar />}
      <Grid fluid className="Main">
        {props.children}
      </Grid>
    </div>
  );
};

export default Layout;
