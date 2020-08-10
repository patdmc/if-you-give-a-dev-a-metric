import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>A story about where application obervability can take you</p>

    <Link to="/page-1/">Read The Book!</Link> <br />
  </Layout>
)

export default IndexPage
