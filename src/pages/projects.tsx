import React, { useEffect, useState } from 'react'
import {
	Layout,
	SEO,
} from '../components'
import axios from 'axios';
// @ts-ignore
import { Eclipse } from 'react-loading-io';

export default function ProjectsPage() {
	const [state, setState] = useState([]);

	useEffect(() => {
		axios.get('https://api.github.com/users/freddysilber/repos').then((repos) => {
			setState(repos.data);
		}).catch(error => {
			setState([]);
			throw new Error(error);
		})
	}, []);

	/**
	 * Renders a list of Github repos... while loading, render a spinner
	 */
	const renderProjects = () => {
		if (state.length) {
			return (
				<ol>
					{state.map((repo: any) => {
						return (
							<li key={repo.id}>
								<a href={repo.html_url as string} target="_blank">{repo.name}</a>
							</li>
						)
					})}
				</ol>
			)
		} else {
			return <Eclipse size={64} />
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