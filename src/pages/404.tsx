import React from 'react';
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { Eclipse } from 'react-loading-io';

import { Layout, SEO } from '../components';

const NotFoundPage = (props: any) => {
	// const [state, setState]: any = React.useState([]);

	// useEffect(() => {
	// 	console.log(state, setState)
	// 	setState('test')
	// 	// setState(Promise.resolve('test'))
	// 	axios.get('https://quotes.rest/qod').then((data) => {
	// 		console.log(data);
	// 		setState(data);
	// 	});
	// });
	// console.log(state)
	// useEffect(() => {
	// 	const getData = async () => {
	// 		const response = await fetch('https://quotes.rest/qod');
	// 		const json = await response.json()
	// 		console.log(json);
	// 		updateQuote(json);
	// 	}
	// 	getData();
	// }, []);
	// console.log(quote, updateQuote)


	return (
		<Layout>
			<SEO title="404: Not found" />
			<div className="has-text-centered">
				<h1>404: Not Found</h1>
				<p>...</p>
				<h3>AKA you fucked up</h3>
				<hr />
				{/* <Eclipse size={64} /> */}
				{/* {quoteOfTheDay()} */}
				{/* {quote.contents.quotes.map(quote => {
					<p>quote</p>
				})} */}
				{/* <p>{quote?.contents.quotes[0].quotes}</p> */}
				{/* {state} */}
				{/* I WILL PUT A RANDOM QUOTE IN HERE FOR THE 404 */}
				<p className="has-text-info">IDK where your trying to go, but you might need a web atlas for your journey...</p>
				{/* <p>You just hit a route that doesn't exist... the sadness.</p> */}
			</div>
		</Layout>
	)
}

export default NotFoundPage
