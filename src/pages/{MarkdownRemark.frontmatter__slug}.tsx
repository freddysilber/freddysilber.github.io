import roundArrowBack from '@iconify/icons-ic/round-arrow-back'
import { Icon } from '@iconify/react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { BlogSidebar, Layout, SEO } from '../components'
import { Routes } from '../util'

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
		},
		otherPosts: any;
	}
}

const PostContainer = styled.div`
	padding: 0 5rem;
`

const CoverImage = styled.div`
	.gatsby-image-wrapper {
		border-radius: 5px;
	}
`

export default function Template({ data }: MarkdownData) {
	const { markdownRemark, otherPosts } = data
	const { frontmatter, html } = markdownRemark

	return (
		<Layout>
			<SEO title={frontmatter.title} />
			<div className="is-flex is-justify-content-space-between">
				<PostContainer className="is-flex is-flex-direction-column">
					<Link
						style={{
							fontSize: '1.5rem',
							padding: '.25rem',
							border: '1px',
							borderStyle: 'solid',
							borderRadius: '5px',
							margin: '1.5rem 0rem',
							width: 'fit-content',
						}}
						to={Routes.blog}
						activeClassName="active"
					>
						<Icon
							icon={roundArrowBack}
							style={{ verticalAlign: 'middle' }}
							className="mr-1 mb-1"
						/>
						<span className="mr-1">Back To Blog List</span>
					</Link>
					<h1 className="title is-3 has-text-light">{frontmatter.title}</h1>
					<h2 className="title is-5 has-text-light">{frontmatter.date}</h2>
					<CoverImage>
						<Img fixed={{ ...frontmatter.coverImage.childImageSharp.fixed }} />
					</CoverImage>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</PostContainer>
				<BlogSidebar data={data} otherPosts={otherPosts.edges} />
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($id: String!) {
		markdownRemark(id: {eq: $id}) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				coverImage {
					childImageSharp {
						fixed(width: 1000, height: 250, fit: COVER, cropFocus: CENTER) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
		otherPosts: allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 10) {
			edges {
				node {
					excerpt
					frontmatter {
						title
						date
						slug
					}
				}
			}
		}
	}
`