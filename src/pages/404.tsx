import React from 'react';
import axios from 'axios';
import { Eclipse } from 'react-loading-io';

import { Layout, SEO } from '../components';

const NotFoundPage = () => {

	const quoteOfTheDay = () => {
		axios.get('https://quotes.rest/qod').then(({ data }) => {
			console.log(data.contents.quotes);
			return data.contents.quotes.map(({ quote }: any) => {
				console.log(quote);
				<p>{quote}</p>
			})
		}).catch(error => {
			console.error(error)
		});
	};

	console.log(quoteOfTheDay());

	return (
		<Layout>
			<SEO title="404: Not found" />
			<div className="has-text-centered">
				<h1>404: Not Found</h1>
				<hr />
				{/* <Eclipse size={64} /> */}
				{quoteOfTheDay()}
				<p>You just hit a route that doesn't exist... the sadness.</p>
			</div>
		</Layout>
	)
}

export default NotFoundPage
