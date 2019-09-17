import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../Layout';
import { Row, Col } from 'react-bootstrap';
import LinkedHeading from '../components/LinkedHeading';
import Playground from '../components/Playground';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import Toc from '../components/Toc';
import PropTable from '../components/PropTable';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const components = {
  h2: props => <LinkedHeading h="3" {...props} />,
  h3: props => <LinkedHeading h="4" {...props} />,
  h4: props => <LinkedHeading h="5" {...props} />,
  code: Playground,
  pre: props => <div className="pre" {...props} />,
};

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const {
      headings = [],
      fields: { slug },
    } = post || {};
    const { previous, next, propDatas } = this.props.pageContext;
    return (
      <Layout slug={slug}>
        <Row>
          <Col xs={24} md={4} xl={4}>
            <SideNav location={this.props.location} />
          </Col>
          <Col xs={24} md={17} xl={17}>
            <div className="Main__Body">
              <Header post={post} />
              <MDXProvider components={components}>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            </div>
            <PropTable propDatas={propDatas}/>
            <div className="prev-next-nav">
              {previous && (
                <Link
                  className="prev-page"
                  to={previous.fields.slug}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
              {next && (
                <Link className="next-page" to={next.fields.slug}>
                  {next.frontmatter.title} →
                </Link>
              )}
            </div>
          </Col>
          <Col md={3} xl={3}>
            <Toc headings={headings} location={this.props.location} />
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
      }
    }
  }
`;
