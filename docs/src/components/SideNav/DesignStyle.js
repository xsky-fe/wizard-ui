import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import NavSection from './NavSection';
import './style.scss';

export default props => {
  const { allMdx: { edges } } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC },
          filter: { fields : { slug: { regex: "/design-style/" } } },
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
      }
    `
  );

  return (
    <NavSection
      heading="设计风格"
      items={edges}
    />
  )
}

