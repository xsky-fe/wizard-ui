import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './style.scss';

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
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="wizard-ui" height={40} />
        </Link>
        <Nav>
          {HEADER_LINKS.map(({ link, title }) => (
            <li key={link}>
              <Link to={link} activeClassName="active">
                {title}
              </Link>
            </li>
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
