import React from 'react';
import SEO from '../seo';
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './style.scss';

export default ({ post }) => {
  const { frontmatter = {} } = post || {};
  const { title, date } = frontmatter || {};
  return (
    <div className="Header">
      <SEO title={title} />
      <h1>
        {title}
        <OverlayTrigger
          placement="top"
          overlay={(
            <Tooltip id="tooltip">
              在 GitHub 上编辑此页！
            </Tooltip>
          )}
        >
          <a
            className="edit-button"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/xsky-fe/wizard-ui/edit/master/docs/src/pages/${frontmatter.link}.mdx`}
          >
            <Glyphicon glyph="pencil" />
          </a>
        </OverlayTrigger>
      </h1>
      {date && <p>{post.frontmatter.date}</p>}
    </div>
  )
}