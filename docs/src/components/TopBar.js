import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const HEADER_LINKS = [
  {
    link: '/',
    title: '首页',
    exact: true,
  },
  {
    link: '/get-started/introduction',
    title: '开始',
  },
  {
    link: '/components/badge',
    title: '组件'
  }
]

const TopBar = (props) => {
  return (
    <div className="TopBar">
      <Navbar staticTop fluid>
        <Navbar.Brand href="#home">Wizard UI</Navbar.Brand>
        <Nav>
          {HEADER_LINKS.map(({ link, title }) => (
            <NavItem key={link}>
              <Link className="nav-link" to={link}>
                {title}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </div>
  )
}

TopBar.propTypes = {
  siteTitle: PropTypes.string,
}

TopBar.defaultProps = {
  siteTitle: ``,
}

export default TopBar
