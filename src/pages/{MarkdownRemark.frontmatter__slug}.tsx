import React from 'react'
import { graphql, Link } from 'gatsby'
import { Routes } from '../util';

const styles = {
	blogPostContentContainer: {
		padding: '1rem',
	},
	navContainer: {
		margin: '0.5rem',
	},
};

interface MarkdownData {
	data: {
		markdownRemark: {
			frontmatter: {
				date: string;
				slug: string;
				title: string;
			},
			html: string;
		};
	};
}

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}: MarkdownData) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<div className="blog-post-container">
			<div className="blog-post">
				<nav className="navbar is-dark" style={styles.navContainer} role="navigation" aria-label="main navigation">
					<div className="navbar-menu">
						<div className="navbar-start">
							<Link className="navbar-item" to={Routes.blog} activeClassName="active">Back</Link>
							<Link className="navbar-item" to={Routes.blog} activeClassName="active">Previous</Link>
							<Link className="navbar-item" to={Routes.blog} activeClassName="active">Next</Link>
						</div>
					</div>
				</nav>
				<hr style={{ margin: '0' }} />
				<div style={styles.blogPostContentContainer}>
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div >
		</div >
	)
}

export const pageQuery = graphql`
	query($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
			}
		}
	}
`