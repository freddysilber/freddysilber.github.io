import React from 'react';
import { Layout, SEO } from '../components';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

/**
 * Component that shows the 404 page when the user fucks up.
 */
export default function NotFoundPage() {
	return (
		<Layout>
			<SEO title="404: Not found" />
			<Container className="has-text-centered">
				<h1 style={{ fontSize: '3em' }}>Woops! Something went wrong...</h1>
			</Container>
		</Layout>
	)
}
