import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageCarousel from "../components/imageCarousel"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <ImageCarousel />
    </div>
  </Layout>
);

export default IndexPage
