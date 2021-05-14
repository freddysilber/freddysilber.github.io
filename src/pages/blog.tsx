import React from 'react'
// Components
import { Layout, SEO } from '../components'
// Hooks
import { Link } from 'gatsby'

export default function SecondPage() {
	const blogRoutes = [
		{
			title: 'First Post',
			route: '/blog/my-first-post/'
		},
		{
			title: 'Second Post',
			route: '/blog/my-second-post/'
		}
	]

	return (
		<Layout>
			<SEO title="Blog" />
			<ul>
				{blogRoutes.map((post, index) => (
					<li>
						<Link to={post.route}>{index + 1}. {post.title}</Link>
					</li>
				))}
			</ul>
		</Layout >
	)
}