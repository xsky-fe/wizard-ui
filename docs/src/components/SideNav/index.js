import React from 'react';
import { Row, Nav, Panel } from 'react-bootstrap';
import { Link } from 'gatsby';
import lodash from 'lodash';
import './style.scss';

const SIDE_NAV = {
  layout: {
    heading: '排版',
    items: [
      { key: 'grid', value: '栅格' }
    ],
  },
  components: {
    heading: '组件',
    items: [
      { key: 'badge', value: '徽标数' }
    ]
  }
}

const NavSection = props => {
  const { heading, items, path, } = props;
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
                {`${lodash.upperFirst(key)}  ${value}`}
              </Link>
            </li>
          ))}
        </Nav>
      )}
    </Panel>
  )
}

const SideNav = props => {
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

