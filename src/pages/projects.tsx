import React from 'react'
import {
	Layout,
	SEO,
} from '../components'

export default function ProjectsPage() {

	// const getRepositories = () => {
	// 	fetch(`https://api.github.com/users/freddysilber/repos`).then(repos => {
	// 		console.log(repos.json());
	// 	})
	// }
	// getRepositories();

	return (
		<Layout>
			<SEO title="Projects" />
			<section>
				<h1>Coming Soon...</h1>
			</section>
		</Layout>
	)
}