// import React, { useEffect, useState } from 'react'
// import {
// 	Layout,
// 	SEO,
// } from '../components'
// import axios from 'axios';
// // @ts-ignore
// import { Eclipse } from 'react-loading-io';
// import { GithubRepo } from '../models/github-repo.model';
// import { endpoints } from '../util/endpoints';

// export default function ProjectsPage() {
// 	const [state, setState] = useState<GithubRepo[]>([]);

// 	useEffect(() => {
// 		// axios.get('https://api.github.com/repos/freddysilber/ghost-rider').then((repos) => {
// 		axios.get<GithubRepo[]>(endpoints.github.repos).then((repos) => {
// 			const filteredRepos = repos.data.filter((repo) => {
// 				return !!!repo.fork;
// 			});
// 			setState(filteredRepos);
// 		}).catch(error => {
// 			setState([]);
// 			throw new Error(error);
// 		})
// 	}, []);

// 	/**
// 	 * Renders a list of Github repos... while loading, render a spinner
// 	 */
// 	const renderProjects = () => {
// 		if (state.length) {
// 			return (
// 				<ol style={{ padding: '0 2rem' }}>
// 					{state.map((repo: GithubRepo) => {
// 						return (
// 							<li key={repo.id}>
// 								<a href={repo.html_url as string} target="_blank">{repo.name}</a>
// 								<p style={{ color: '#666' }}>- {repo.description || 'N/A'}</p>
// 							</li>
// 						)
// 					})}
// 				</ol>
// 			)
// 		} else {
// 			return <Eclipse size={64} />
// 		}
// 	}

// 	return (
// 		<Layout>
// 			<SEO title="Projects" />
// 			<section>
// 				{renderProjects()}
// 			</section>
// 		</Layout>
// 	)
// }
