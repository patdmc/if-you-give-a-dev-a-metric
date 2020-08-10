import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PageThree = () => (
  <Layout>
    <SEO title="PageThree" />
    <h2>After they've looked at it a lot...</h2>
    <div style={{ maxWidth: `600px`, marginBottom: `1.1rem` }}>
      <Image />
    </div>
    <h2>They're going to start to decorate it with important thresholds</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageThree
