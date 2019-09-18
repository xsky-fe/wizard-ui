import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import GitHubIcon from '../GitHubIcon';
import IssueIcon from '../IssueIcon';
import HeaderSearch from '../HeaderSearch';
import logo from '../../images/logo.png';
import './style.scss';

const HEADER_LINKS = [
  {
    link: '/',
    title: '首页',
    exact: true,
  },
  {
    link: '/get-started/introduction/',
    title: '开始',
  },
  {
    link: '/components/button/',
    title: '组件',
  }
]



const TopBar = (props) => {
  const { slug } = props;

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
          <ul className="nav navbar-nav">
            {HEADER_LINKS.map(({ link, title }) => (
              <li key={link}>
                <Link to={slug && slug.match(/components|layout/) && link.includes('components') ? slug : link} activeClassName="active">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a target="_blank" rel="noopener noreferrer"  href="https://github.com/xsky-fe/wizard-ui">
                <span className="svg-icon">
                  <GitHubIcon />
                </span>
                GITHUB
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <OverlayTrigger
                placement="bottom"
                overlay={(
                  <Tooltip id="tooltip">
                    提交 Issue
                  </Tooltip>
                )}
                >
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/xsky-fe/wizard-ui/issues/new">
                  <span className="svg-icon">
                    <IssueIcon />
                  </span>
                </a>
              </OverlayTrigger>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <HeaderSearch />
          </ul>
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
