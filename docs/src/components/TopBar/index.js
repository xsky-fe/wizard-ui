import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import { SideNavItems } from '../SideNav';
import GitHubIcon from '../GitHubIcon';
import logo from '../../images/logo.png';
import useWindowWidth from '../../utils/hooks/get-window-width';
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
    link: '/components/button',
    title: '组件',
  }
]



const TopBar = (props) => {
  const { slug, location } = props;
  const width = useWindowWidth();

  return (
    <div className="TopBar">
      <Navbar fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="wizard-ui" height={40} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="top-navbar-nav"/>
        </Navbar.Header>
        <Navbar.Collapse id="top-navbar-nav">
          <Nav>
            {HEADER_LINKS.map(({ link, title, partiallyActive }) => (
              <li key={link}>
                {slug && slug.match(/components|layout/) && link.includes('components') ? (
                  <a href={slug} className="active">
                    {title}
                  </a>
                ) : (
                  <Link to={link} activeClassName="active">
                    {title}
                  </Link>
                )}
              </li>
            ))}
          </Nav>
          {width < 768 && <SideNavItems location={location}/>}
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
        </Navbar.Collapse>
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
