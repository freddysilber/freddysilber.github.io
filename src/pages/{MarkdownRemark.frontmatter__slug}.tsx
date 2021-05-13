import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components';
import { Routes } from '../util';

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
		<Layout>
			<div className="blog-post-container">
				<Link to={Routes.blog}>Back</Link>
				<div className="blog-post">
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</Layout>
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