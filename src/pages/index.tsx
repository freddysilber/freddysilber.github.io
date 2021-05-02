import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
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
			<Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
		</section>
		<SocialMedia />
	</Layout>
)

export default IndexPage