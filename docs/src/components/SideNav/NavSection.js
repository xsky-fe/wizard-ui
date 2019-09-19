import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

export default props => {
  const { heading, items } = props;
  return (
    <ul className="Sidebar__Header nav navbar-nav">
      {items.length && (
        <ul className="nav navbar-nav">
          <h3>{heading}</h3>
          {items.map(({ node: { fields, frontmatter } }) => (
            <li key={fields.slug}>
              <Link to={fields.slug} activeClassName="active">
                {frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </ul>
  )
}