import React, { useEffect } from 'react';
import axios from 'axios';
// @ts-ignore
import { Eclipse } from 'react-loading-io';
import { Layout, SEO } from '../components';

/**
 * Component that shows the 404 page when the user fucks up.
 */
const NotFoundPage = () => {
	const [state, setState]: any = React.useState([]);
	// Fetch quote of the day when user hits a 404 and fucks up
	useEffect(() => {
		axios.get('https://quotes.rest/qod').then(({ data }) => {
			setState(data.contents.quotes);
		}).catch(error => {
			setState([{ quote: 'Something is seriously wrong here...' }]);
			console.error(error);
		});
	}, []);
	/**
	 * This function takes care of rendering the quote of the day and while loading, it will render a spinner
	 */
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
