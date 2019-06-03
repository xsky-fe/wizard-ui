import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from '@mdx-js/react';
import Layout from "../Layout";
import SEO from "../components/seo"
import { Row, Col, Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap';
import LinkedHeading from '../components/LinkedHeading'
import Playground from '../components/Playground'
import SideNav from '../components/SideNav'
import Toc from '../components/Toc'
import MDXRenderer from "gatsby-mdx/mdx-renderer"

const components = {
  h2: props => <LinkedHeading h="2" {...props} />,
  h3: props => <LinkedHeading h="3" {...props} />,
  h4: props => <LinkedHeading h="4" {...props} />,
  code: Playground,
  pre: props => <div className="pre" {...props} />,
};

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { headings = [],  frontmatter = {} } = post || {};
    const { title, date } = frontmatter || {};
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <Row>
          <Col xs={12} md={2} xl={2}>
            <SideNav location={this.props.location} links={[]} />
          </Col>
          <Col xs={12} md={8} xl={8}>
            <div className="Main__Body">
              <div className="Main__Header">
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
              <MDXProvider components={components}>
                <MDXRenderer>{post.code.body}</MDXRenderer>
              </MDXProvider>
            </div>
            <div className="prev-next-nav">
              {previous && (
                <Link className="prev-page" to={previous.fields.slug} rel="prev">
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
          <Col md={2} xl={2}>
            <Toc headings={headings} location={this.props.location}/>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      code {
        body
      }
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`