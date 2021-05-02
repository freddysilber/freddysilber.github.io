import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
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
			<StaticImage className="avatar" src="../assets/images/wreath.png" alt="Avatar" />
			<Skills />
			<Bio />
		</section>
		<SocialMedia />
	</Layout>
)

export default IndexPage