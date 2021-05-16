import React from 'react'
// Components
import { BlogSidebar, Layout, SEO } from '../components'
// Hooks
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

interface BlogPost {
	node: {
		excerpt: string;
		frontmatter: {
			coverImage: Record<any, any>;
			date: string;
			slug: string;
			title: string;
		};
	};
}

interface BlogData {
	data: {
		blog: {
			edges: BlogPost[];
		};
	};
}

const PostList = styled.ol`
	list-style: none;
	width: 70%;
`

const PostListItem = styled.li`
	width: 100%;
	padding: 0.5rem;

	&:not(:last-child) {
		margin-bottom: 0.5rem !important;
	}
`

const PostLink = styled(Link)`
	display: flex;
`

const PostListItemContent = styled.div`
	padding: .25rem;
`

const PostImageWrapper = styled.div`
	width: 200px;
	border-radius: 5px;
	background: rgba(0, 0, 0, 0.1);
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

	.gatsby-image-wrapper {
		width: 184px;
		border-radius: 5px;
		img {
			border-radius: 5px;
		}
	}
`

export default function SecondPage({ data }: BlogData) {
	const posts = data.blog.edges

	return (
		<Layout>
			<SEO title="Blog" />
			<div style={{ display: 'flex' }}>
			<PostList>
					{posts.map((post: BlogPost) => {
					const { frontmatter, excerpt } = post.node
					const { slug, title, coverImage, date } = frontmatter

					return (
						<PostListItem className="has-background-black box">
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
				<BlogSidebar />
			</div>
		</Layout >
	)
}

export const query = graphql`
	query {
		blog: allMarkdownRemark(
	  		sort: { order: DESC, fields: [frontmatter___date] }
	  		limit: 15
	  		filter: { fileAbsolutePath: { regex: "/blog/" } }
		) {
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