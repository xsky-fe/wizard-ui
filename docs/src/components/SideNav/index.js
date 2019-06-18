import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, graphql, useStaticQuery } from 'gatsby';
import lodash from 'lodash';
import './style.scss';

const NavSection = props => {
  const { heading, items, path } = props;
  return (
    <Nav className="Sidebar__Header">
      {items.length && (
        <Nav>
          <h3>{heading}</h3>
          {items.map(({ key, value }) => (
            <li key={key}>
              <Link to={`${path}/${key}`} activeClassName="active">
                {value}
              </Link>
            </li>
          ))}
        </Nav>
      )}
    </Nav>
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
    <Navbar fluid className="Sidebar" collapseOnSelect>
       <Navbar.Header>
        <Navbar.Toggle aria-controls="side-navbar-nav" />
       </Navbar.Header>
      <Navbar.Collapse id="side-navbar-nav">
        {lodash.keys(SIDE_NAV).map(key => (
          <NavSection
            key={key}
            location={props.location}
            path={`/${key}`}
            {...SIDE_NAV[key]}
          />
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SideNav;

