import React, { useEffect, useState } from 'react'
import {
	Layout,
	SEO,
} from '../components'
import axios from 'axios';

export default function ProjectsPage() {
	const [state, setState] = useState([]);

	useEffect(() => {
		axios.get('https://api.github.com/users/freddysilber/repos').then((repos) => {
			console.log(repos);
			setState(repos.data);
		}).catch(error => {
			throw new Error(error);
		})
	}, [])
	console.log(state);

	const renderProjects = () => {
		if (state.length) {
			return (state.map((repo: any) => (
				<a key={repo.id} href={repo.html_url}>{repo.name}</a>
			)));
		} else {
			return <p>...</p>
		}
	}

	return (
		<Layout>
			<SEO title="Projects" />
			<section>
				{renderProjects()}
			</section>
		</Layout>
	)
}