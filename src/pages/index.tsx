import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// Components
import {
	Layout,
	SEO,
	Bio,
	Skills,
	SocialMedia
} from '../components'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<section className="firstSection">
			{/* <StaticImage className="avatar" src="../assets/images/wreath.png" alt="Avatar" /> */}
			<StaticImage style={{
				borderRadius: '100%',
				width: '75%',
				height: 'auto',
				margin: '0 auto',
				boxShadow: '0 5px 5px rgba(0, 0, 0, 0.5)'
			}}
				className="avatar"
				src="../assets/images/avatar.jpg"
				alt="Avatar" />
			<Skills />
			<Bio />
		</section>
		<SocialMedia />
	</Layout>
)

export default IndexPage