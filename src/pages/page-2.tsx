import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// Components
import { Layout, SEO } from '../components'
// Utilities
import { Routes } from '../util'
// Hooks
import { useSiteMetadata } from '../hooks'

export default function SecondPage() {
  const { title } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>welcome to {title}</h1>
      <Image />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to={Routes.home}>Go back to the homepage</Link>
    </Layout >
  )
}

const horseRide = graphql`
	query {
		file(relativePath: { eq: "horseRide.png" }) {
			childImageSharp {
				fixed {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`

function Image() {
  const data = useStaticQuery(horseRide)
  return <Img fixed={data.file.childImageSharp.fixed} alt="Horse Ride" />
}