import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, graphql, useStaticQuery } from 'gatsby';
import useWindowWidth from '../../utils/hooks/get-window-width';
import Beta from '../Beta';
import lodash from 'lodash';
import './style.scss';

const BETA_COMPONENTS = [
  'notification',
]

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
                {BETA_COMPONENTS.includes(key) && <Beta/>}
              </Link>
            </li>
          ))}
        </Nav>
      )}
    </Nav>
  )
}

const SideNavItems = props => {
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
    <React.Fragment>
      {lodash.keys(SIDE_NAV).map(key => (
        <NavSection
          key={key}
          location={props.location}
          path={`/${key}`}
          {...SIDE_NAV[key]}
        />
      ))}
    </React.Fragment>
  )
}


const SideNav = props => useWindowWidth() > 768 ? (
  <Navbar fluid className="Sidebar">
    <SideNavItems {...props}/>
  </Navbar>
) : null

export default SideNav;

export {
  SideNavItems,
};

