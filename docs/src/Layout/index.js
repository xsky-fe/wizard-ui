/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Grid, Row, Col } from 'react-bootstrap';
import Playground from '../components/Playground';
import TopBar from '../components/TopBar';
import SideNav from '../components/SideNav';
import LinkedHeading from '../components/LinkedHeading';
import Toc from '../components/Toc';
import lodash from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';


const components = {
  h2: props => <LinkedHeading h="2" {...props} />,
  h3: props => <LinkedHeading h="3" {...props} />,
  h4: props => <LinkedHeading h="4" {...props} />,
  code: Playground,
  pre: props => <div className="pre" {...props} />
};
const showComponents = {
  code: props => <Playground {...props} isShow/>,
  pre: props => <div className="pre" {...props} />,
};



const Layout = props => {
  const { location , children } = props;
  const { pathname } = location || {};
  const isComponenet =
    pathname &&
    (pathname.includes ('components') || pathname.includes ('layout'));
  if (!isComponenet) {
    return (
      <div>
        {<TopBar />}
        <Grid fluid className="Main">
          <MDXProvider components={showComponents}>{children}</MDXProvider>
        </Grid>
      </div>
    )
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(filter: { frontmatter: { link: { ne: null } } }) {
            edges {
              node {
                headings {
                  value
                  depth
                }
                frontmatter {
                  link
                  title
                  author
                  date
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { location, children } = props;
        const edges = lodash.get(data, 'allMdx.edges', []);
        const links = edges.map(edge => lodash.get(edge, 'node.frontmatter'));
        const current = lodash.find(edges, edge => pathname.includes(lodash.get(edge, 'node.frontmatter.link'))) || {};
        const { headings = [],  frontmatter } = current.node || {};
        const { title } = frontmatter || {};
        return (
          <div>
            {<TopBar />}
            <Grid fluid className="Main">
              <Row>
                <Col xs={12} md={2} xl={2}>
                  <SideNav location={location} links={links} />
                </Col>
                <Col xs={12} md={8} xl={8}>
                  <div className="Main__Body">
                    <div className="Main__Header">
                      <h1>{title}</h1>
                    </div>
                    <MDXProvider components={components}>
                      {children}
                    </MDXProvider>
                  </div>
                </Col>
                <Col md={2} xl={2}>
                  <Toc headings={headings} location={location}/>
                </Col>
              </Row>
            </Grid>
          </div>
        );
      }}
    />
  )
};

export default Layout;
