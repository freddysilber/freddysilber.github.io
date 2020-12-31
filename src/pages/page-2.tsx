import React from 'react'
import { Link } from 'gatsby'
// Components
import { Layout, SEO } from '../components'
// Utilities
import { Routes } from '../util'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to={Routes.home}>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
