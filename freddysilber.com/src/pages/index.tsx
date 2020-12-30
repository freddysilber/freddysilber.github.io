import React from 'react'
import { Link } from 'gatsby'
// Components
import { Layout, SEO, Image, Bio } from '../components'
// Utilities
import { Routes } from '../util'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people of middle earth</h1>
    {/* <Skills /> */}
    {/* <i className="devicon-angularjs-plain"></i> */}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Bio />
    <Link to={Routes.page2}>Go to page 2</Link> <br />
    <Link to={Routes.usingTypescript}>Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
