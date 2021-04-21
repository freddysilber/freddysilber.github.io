import React from 'react'
import { Link } from 'gatsby'
// Components
import { Layout, SEO, Image, Bio } from '../components'
// Containers
import { SocialMediaContainer } from '../containers'
// Utilities
import { Routes } from '../util'
// Styles
import '../scss/index.scss'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<br />
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
			<button className="button is-dark">Dark</button>
		</div>
		<Bio />
		<Link to={Routes.page2}>Go to page 2</Link>
		<br />
		<Link to={Routes.usingTypescript}>Go to "Using TypeScript"</Link>
		<SocialMediaContainer />
	</Layout>
)

export default IndexPage
