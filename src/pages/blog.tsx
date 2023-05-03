import React from 'react'
// Components
import { BlogSidebar, Layout, SEO } from '../components'
// Hooks
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
// Models
import { BlogData, BlogPost } from '../models'
import breakpoints from '../config/breakpoints';

const PostListContainer = styled.div`
	display: flex;

	@media(max-width: ${breakpoints.breakpointMd}) {
    	flex-direction: column;
  	}
`;

const PostList = styled.ol`
	list-style: none;
	width: 70%;

	@media(max-width: ${breakpoints.breakpointMd}) {
    	width: 100%;
  	}
`

const PostListItem = styled.li`
	width: 100%;
	padding: 0.5rem;
	border: 2px solid transparent;
	transition: all 0.5s ease;

	&:not(:last-child) {
		margin-bottom: 0.5rem !important;
	}

	&:hover {
		border: 2px solid #ff812e;
	}
`

const PostLink = styled(Link)`
	display: flex;

	@media(max-width: ${breakpoints.breakpointMd}) {
    	flex-direction: column;
  	}
`

const PostListItemContent = styled.div`
	padding: .5rem;
`

const PostImageWrapper = styled.div`
	width: 200px;
	border-radius: 5px;

	.gatsby-image-wrapper {
		width: 180px;
		border-radius: 5px;
		img {
			border-radius: 5px;
		}
	}
`

export default function BlogPage({ data }: BlogData) {
	const recentPosts = data.blog.edges.slice(0, 5)
	const otherPosts = data.blog.edges.slice(5, 15)

	return (
		<Layout>
			<SEO title="Blog" />
			<PostListContainer>
				<PostList>
					{recentPosts.map((post: BlogPost, index: number) => {
						const { frontmatter, excerpt } = post.node
						const { slug, title, coverImage, date } = frontmatter

						return (
							<PostListItem key={index} className="has-background-grey-dark box">
								<PostLink to={slug}>
									<PostImageWrapper>
										<Img fluid={{ ...coverImage.childImageSharp.fluid }} />
									</PostImageWrapper>
									<PostListItemContent>
										<h1 className="has-text-warning has-text-weight-semibold is-size-5">{title}</h1>
										<p className="has-text-grey-light mb-2">Published on {date}</p>
										<p className="has-text-light">{excerpt}</p>
									</PostListItemContent>
								</PostLink>
							</PostListItem>
						)

					})}
				</PostList>
				<BlogSidebar data={data} otherPosts={otherPosts} />
			</PostListContainer>
		</Layout >
	)
}

export const query = graphql`
	query {
		blog: allMarkdownRemark(
			sort: {
				order: DESC, fields: [frontmatter___date]
			}
			limit: 15
			filter: {
				fileAbsolutePath: { regex: "/blog/"
			}
		}) {
	  		edges {
				node {
					excerpt
		  			frontmatter {
						title
						date
						slug
						coverImage {
							childImageSharp {
								fluid(
									maxWidth: 400
									maxHeight: 400
									fit: COVER
									cropFocus: CENTER
								) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`