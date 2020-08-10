import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const PageTwo = () => (
  
  <Layout>
    <SEO title="PageTwo" />
    <div style={{ maxWidth: `600px`, marginBottom: `1.1rem` }}>
    <h2>Then, once they have that metric graphed...</h2>
      <Image />
      <h3>They're going to want to look at it a lot and show it off to friends.</h3>
      <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/page-1">Back</ListLink>
          <ListLink to="/page-3/">Next</ListLink>
      </ul>
    </div>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PageTwo
