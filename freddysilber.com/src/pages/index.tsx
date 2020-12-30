import React from 'react'
import { Link } from 'gatsby'
// Components
import { Layout, SEO, Image, Bio } from '../components'
// Utilities
import { Routes } from '../util'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<br />
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		<Bio />
		<Link to={Routes.page2}>Go to page 2</Link>
		<br />
		<Link to={Routes.usingTypescript}>Go to "Using TypeScript"</Link>
	</Layout>
)

export default IndexPage
