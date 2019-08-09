import React from 'react';
import Layout from '../Layout';
import SEO from '../components/seo';
import Home from '../components/Home';

const IndexPage = props => (
  <Layout {...props}>
    <SEO title="Home" />
    <Home />
  </Layout>
);

export default IndexPage;
