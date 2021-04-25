import React from 'react'
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
// Components
import {
	Layout,
	SEO,
	Image,
	Bio,
	Skills,
	SocialMedia
} from '../components'
// Utilities
// import { Routes } from '../util'
// Styles
import '../scss/global.scss'

const mainStyles = {
	display: 'flex',
	// margin: '1rem 0 1rem 0'
}

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Skills />
		{/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div> */}
		<div style={mainStyles}>
			<StaticImage style={{}} src="../assets/images/horseRide.png" alt="Horse Ride" />
			<Bio />
		</div>

		{/* <Link to={Routes.page2}>Go to page 2</Link>
		<br />
		<Link to={Routes.usingTypescript}>Go to "Using TypeScript"</Link> */}
		<SocialMedia />
	</Layout>
)

export default IndexPage
