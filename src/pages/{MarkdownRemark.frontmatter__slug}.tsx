import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components'
import { Routes } from '../util'
import Img from 'gatsby-image'

interface MarkdownData {
	data: {
		markdownRemark: {
			frontmatter: {
				date: string;
				slug: string;
				title: string;
				coverImage: {
					childImageSharp: {
						fixed: {
							base64: string;
							height: number;
							src: string;
							srcSet: string;
							width: number;
						}
					}
				}
			},
			html: string;
		}
	}
}

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}: MarkdownData) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<Link to={Routes.blog}>
				<button className="button is-warning mb-2">Back</button>
			</Link>
			<div>
				<Img fixed={{ ...frontmatter.coverImage.childImageSharp.fixed }} />
				<h1 className="title is-3 has-text-light">{frontmatter.title}</h1>
				<h2 className="title is-5 has-text-light">{frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: html }} />
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
				coverImage {
					childImageSharp {
						fixed(width: 1200, height: 250, fit: COVER, cropFocus: CENTER) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	}
`