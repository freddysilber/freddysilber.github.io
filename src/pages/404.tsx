import React from 'react';
import axios from 'axios';

import { Layout, SEO } from '../components';

const NotFoundPage = () => {

	const quoteOfTheDay = () => {
		axios.get('https://quotes.rest/qod').then(quote => {
			console.log(quote)
		}).catch(error => {
			console.error(error)
		})
		// fetch('https://quotes.rest/qod').then(quote => {
		// 	console.log(quote);
		// }).catch(error => {
		// 	console.log(error);
		// });
	};

	const q = quoteOfTheDay();
	console.log(q);

	return (
		<Layout>
			<SEO title="404: Not found" />
			<div className="has-text-centered">
				<h1>404: Not Found</h1>
				<hr />
				<p>You just hit a route that doesn't exist... the sadness.</p>
			</div>
		</Layout>
	)
}

export default NotFoundPage
