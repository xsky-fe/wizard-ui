import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Button } from 'react-bootstrap';
import GitHubIcon from '../GitHubIcon';
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
      <Navbar fixedTop fluid>
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
        <Nav pullRight>
          <li>
            <a target="_blank" rel="noopener noreferrer"  href="https://github.com/xsky-fe/wizard-ui">
              <span className="github-icon">
                <GitHubIcon />
              </span>
              GITHUB
            </a>
          </li>
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
