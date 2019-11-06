import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Tooltip, Icon } from 'wizard-ui';
import GitHubIcon from '../GitHubIcon';
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
    link: '/design-style/color/',
    title: '组件',
  }
]



const TopBar = (props) => {
  const { slug, cls, toggle } = props;

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
              <Tooltip label={(
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/xsky-fe/wizard-ui">
                  <span className="svg-icon">
                    <GitHubIcon />
                  </span>
              </a>
              )}>
                Github
              </Tooltip>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Tooltip label={(
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/xsky-fe/wizard-ui/issues/new">
                  <Icon type="dialog" />
                </a>
              )} placement="bottom">
                Issue
              </Tooltip>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Tooltip label={(
                <a target="_blank" rel="noopener noreferrer" href="https://xsky-fe.github.io/icons/">
                  <Icon type="workgroup" />
                </a>
              )}>
                Icons
              </Tooltip>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Tooltip label={(
                <a target="_blank" rel="noopener noreferrer" href="https://xsky-fe.github.io/wizard-ui-pro/">
                  <Icon type="grid" />
                </a>
              )}>
                Wizard ui pro
              </Tooltip>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Tooltip label={(
                <div onClick={toggle}>
                  <Icon type={cls === 'light' ? 'light-dark' : 'light'} />
                </div>
              )}>
                Toggle {cls === 'light'? 'dark' : 'light'}
              </Tooltip>
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
