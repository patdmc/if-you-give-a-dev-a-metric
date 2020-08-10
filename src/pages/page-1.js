import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PageOne = () => (
  <Layout>
    <SEO title="Page One" />
    <p>If you give a Dev a Metric...</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.1rem` }}>
      <Image />
    </div>
    <p>They're going to want to graph it.</p>
    <Link to="/page-2/">Next</Link> <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageOne
