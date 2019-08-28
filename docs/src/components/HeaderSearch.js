import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Search from './Search';

const HeaderSearch = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => <Search searchIndex={data.siteSearchIndex.index} />}
  />
);

export default HeaderSearch;
