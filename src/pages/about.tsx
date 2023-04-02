import React from 'react';
import { Bio, Layout, SEO } from '../components';

const styles: Record<string, Record<string, string | number>> = {
	bioContainer: {
		padding: '0 10rem',
		fontSize: '1.3em'
	}
};

export default function About() {
	return (
		<Layout>
			<SEO title="About" />

			<div style={{ ...styles.bioContainer }}>
				<Bio />
			</div>
		</Layout>
	);
}