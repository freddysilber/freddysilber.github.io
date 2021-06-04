import React, { useEffect } from 'react';
import axios from 'axios';
import { Eclipse } from 'react-loading-io';
import { Layout, SEO } from '../components';

const NotFoundPage = () => {
	const [state, setState]: any = React.useState([]);
	// Fetch quote of the day when user hits a 404 and fucks up
	useEffect(() => {
		axios.get('https://quotes.rest/qod').then(({ data }) => {
			setState(data.contents.quotes);
		}).catch(error => {
			throw new Error(error);
		});
	}, []);

	const renderQuoteOfTheDay = () => {
		if (state.length) {
			return state.map((quote: any) => (
				<div key={quote}>
					<p className="has-script-text is-size-3">{quote.quote}</p>
					<p className="has-script-text is-size-4">- {quote.author}</p>
				</div>
			))
		} else {
			return <Eclipse size={64} />
		}
	}

	return (
		<Layout>
			<SEO title="404: Not found" />
			<div className="has-text-centered">
				<h1>404: Not Found</h1>
				<hr />
				{renderQuoteOfTheDay()}
			</div>
		</Layout>
	)
}

export default NotFoundPage
