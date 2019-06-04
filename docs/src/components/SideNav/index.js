import React from 'react';
import { Row, Nav, Panel } from 'react-bootstrap';
import { Link, graphql, useStaticQuery } from 'gatsby';
import lodash from 'lodash';
import './style.scss';

const NavSection = props => {
  const { heading, items, path } = props;
  return (
    <Panel
      className="Sidebar__Header"
      header={heading}
    >
      {items.length && (
        <Nav>
          {items.map(({ key, value }) => (
            <li key={key}>
              <Link to={`${path}/${key}`} activeClassName="active">
                {value}
              </Link>
            </li>
          ))}
        </Nav>
      )}
    </Panel>
  )
}

const SideNav = props => {
  const { allMdx: { edges } } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC },
          filter: { fields : { slug: { regex: "/layout|components/" } } }, 
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
  const SIDE_NAV = {
    layout: {
      heading: '通用',
      items: [],
    },
    components: {
      heading: '组件',
      items: []
    }
  };
  edges.forEach(({ node: { fields, frontmatter } }) => {
    const [ , parent, name ] = fields.slug.split('/');
    SIDE_NAV[parent].items.push({
      key: name,
      value: frontmatter.title,
    })
  })
  return (
    <Row className="Sidebar">
      {lodash.keys(SIDE_NAV).map(key => (
        <NavSection
          key={key}
          location={props.location}
          path={`/${key}`}
          {...SIDE_NAV[key]}
        />
      ))}
    </Row>
  )
}

export default SideNav;

