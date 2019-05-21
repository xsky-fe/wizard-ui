import React, { useState } from 'react';
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
  const { heading, items, path, togglePanel, expanded } = props;
  return (
    <Panel
      collapsible
      onSelect={togglePanel}
      className="Sidebar__Header"
      expanded={expanded.includes(path)}
      eventKey={path}
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
  const { location: { pathname } }= props;
  let defaultExpanded = [];
  const parent = pathname.split('/')[1];
  if (lodash.keys(SIDE_NAV).includes(parent)) {
    defaultExpanded = [`/${parent}`];
  }
  const [ expanded, setExpanded ] = useState(defaultExpanded);
  const togglePanel = (path) => {
    let newValue;
    if (expanded.includes(path)) {
      newValue = lodash.xor(expanded, [path]);
    } else {
      newValue = lodash.concat(expanded, path);
    }
    setExpanded(newValue);
  }
  return (
    <Row className="Sidebar">
      {lodash.keys(SIDE_NAV).map(key => (
        <NavSection
          key={key}
          location={props.location}
          path={`/${key}`}
          togglePanel={togglePanel}
          expanded={expanded}
          {...SIDE_NAV[key]}
        />
      ))}
    </Row>
  )
}

export default SideNav;

