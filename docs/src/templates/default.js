import React from 'react';
import Layout from '../Layout';
import Playground from '../components/Playground';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

const showComponents = {
  code: props => <Playground {...props} isShow />,
  pre: props => <div className="pre" {...props} />,
};

export default props => {
  const post = props.data.mdx;
  const { frontmatter = {} } = post || {};
  const { title, date } = frontmatter || {};
  return (
    <Layout>
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
      <MDXProvider components={showComponents}>
        <MDXRenderer>{post.code.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query StartBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;