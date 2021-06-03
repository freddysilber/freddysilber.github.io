import React from 'react'

import { Layout, SEO } from '../components'

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div className="has-text-centered">
			<h1>404: Not Found</h1>
			<hr />
			<p>You just hit a route that doesn't exist... the sadness.</p>
		</div>
	</Layout>
)

export default NotFoundPage
