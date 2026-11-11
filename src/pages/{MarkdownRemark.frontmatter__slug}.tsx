import roundArrowBack from '@iconify/icons-ic/round-arrow-back'
import { Icon } from '@iconify/react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
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
				coverImage: ImageDataLike
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
						<GatsbyImage image={getImage(frontmatter.coverImage)!} alt={frontmatter.title} />
					</CoverImage>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</PostContainer>
				<BlogSidebar otherPosts={otherPosts.edges} />
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
						gatsbyImageData(
							layout: FULL_WIDTH
							aspectRatio: 4
							placeholder: BLURRED
							transformOptions: { fit: COVER, cropFocus: CENTER }
						)
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
export const Head = ({ data }: MarkdownData) => <SEO title={data.markdownRemark.frontmatter.title} />
