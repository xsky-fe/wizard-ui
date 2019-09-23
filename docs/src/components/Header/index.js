import React from 'react';
import SEO from '../seo';
import { Glyphicon, Tooltip } from 'wizard-ui';
import lodash from 'lodash';
import './style.scss';

export default ({ post }) => {
  const { frontmatter = {} } = post || {};
  const slug = lodash.get(post, 'fields.slug');
  const path = slug.replace(/\/$/, '.mdx');
  const { title, date, author } = frontmatter || {};
  return (
    <div className="Header">
      <SEO title={title} />
      <h2>
        {title}
        <Tooltip label={(
          <a
            className="edit-button"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/xsky-fe/wizard-ui/edit/master/docs/content${path}`}
          >
            <Glyphicon glyph="pencil" />
          </a>
        )}>
          在 GitHub 上编辑此页！
        </Tooltip>
      </h2>
      <div className="Header__Sub">
        {date && <b>{post.frontmatter.date}</b>}
        {author && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${author}`}
          >
            {author}
          </a>
          )}
      </div>
    </div>
  )
}