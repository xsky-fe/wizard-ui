import React from 'react';
import { Row, Nav, Panel } from 'react-bootstrap';
import { Link } from 'gatsby';
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
  const { links } = props;
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
  links.forEach(({ link, title }) => {
    const [ parent, name ] = link.split('/');
    SIDE_NAV[parent].items.push({
      key: name,
      value: title,
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

