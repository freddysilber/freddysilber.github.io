import React from 'react'
// Components
import { Layout, SEO } from '../components'
// Hooks
// import { useSiteMetadata } from '../hooks'
import { StaticImage } from "gatsby-plugin-image"
// Styles
import './scss/blog.scss'

export default function SecondPage() {
	// const { title } = useSiteMetadata()

	return (
		<Layout>
			<SEO title="Blog" />
			{/* <h1>welcome to {title}</h1> */}
			<h1>Coming soon... so heres another picture</h1>
			<Image />
		</Layout >
	)
}


function Image() {
	return (
		<StaticImage style={{ width: '20%' }} src="../assets/images/horseRide.png" alt="Horse Ride" />
	)
}