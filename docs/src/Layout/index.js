/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import TopBar from '../components/TopBar';
import { Grid } from 'wizard-ui';
import './style.scss';

const isClient = typeof window === 'object';

const Layout = props => {
  const [cls, setCls] = React.useState(() => {
    return isClient ? window.localStorage.getItem('theme') : 'light';
  });
  const toggle = React.useCallback(() => {
    const theme = cls === 'light' ? 'dark' : 'light';
    setCls(theme);
    isClient && window.localStorage.setItem('theme', theme);
  }, [cls, setCls]);

  return (
    <div className={`theme-${cls}`}>
      {<TopBar cls={cls} toggle={toggle} slug={props.slug} />}
      <Grid fluid className="Main">
        {props.children}
      </Grid>
    </div>
  );
};

export default Layout;
