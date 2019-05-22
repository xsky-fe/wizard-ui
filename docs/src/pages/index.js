import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout {...props}>
    <SEO title="Home" />
    <h2>Wizard UI</h2>
  </Layout>
)

export default IndexPage
