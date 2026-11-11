import React from 'react';
import { Bio, Layout, SEO } from '../components';

const styles: Record<string, Record<string, string | number>> = {
	bioContainer: {
		padding: '0 15%',
		fontSize: '1.3em'
	}
};

export default function About() {
	return (
		<Layout>

			<div style={{ ...styles.bioContainer }}>
				<Bio />
			</div>
		</Layout>
	);
}
export const Head = () => <SEO title="About" />
