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
			<h1>Welcome to my blog!</h1>
			<p>You wont see much because it's still in being created, stay tuned!</p>
			<Image />
		</Layout >
	)
}


function Image() {
	return (
		<StaticImage className="horseRide" src="../assets/images/horseRide.png" alt="Horse Ride" />
	)
}