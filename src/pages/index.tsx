import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Components
import {
	Layout,
	SEO,
	// Image,
	Bio,
	Skills,
	SocialMedia
} from '../components'
// Utilities
// import { Routes } from '../util'
// Styles
import './scss/index.scss'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<section className="firstSection">
			<StaticImage className="avatar" src="../assets/images/wreath.png" alt="Avatar" />
			<Skills />
			<Bio />
		</section>

		{/* <Link to={Routes.page2}>Go to page 2</Link>
		<br />
		<Link to={Routes.usingTypescript}>Go to "Using TypeScript"</Link> */}
		<SocialMedia />
	</Layout>
)

export default IndexPage
