import React from 'react';
import Layout from '../Layout';
import Playground from '../components/Playground';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from "gatsby"
import Header from '../components/Header'
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

const showComponents = {
  code: props => <Playground {...props} isShow />,
  pre: props => <div className="pre" {...props} />,
};

export default props => {
  const post = props.data.mdx;
  return (
    <Layout>
      <Header post={post} />
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