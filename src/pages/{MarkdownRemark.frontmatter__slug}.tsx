import React from 'react'
import { graphql } from 'gatsby'
import { BlogSidebar, Layout, SEO } from '../components'
import Img from 'gatsby-image'
import styled from 'styled-components'

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
	display: flex;
	flex-direction: column;
	padding: 0 5rem;
`

const CoverImage = styled.div`
	align-self: center;

	.gatsby-image-wrapper {
		border-radius: 10px;
	}
`

export default function Template({ data }: MarkdownData) {
	const { markdownRemark, otherPosts } = data
	const { frontmatter, html } = markdownRemark

	return (
		<Layout>
			<SEO title={frontmatter.title} />
			<div style={{ display: 'flex' }}>
				<PostContainer>
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
		markdownRemark(id: { eq: $id }) {
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
		otherPosts: allMarkdownRemark(
      		sort: { order: DESC, fields: [frontmatter___date] }
      		limit: 10
    	) {
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