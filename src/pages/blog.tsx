import React from 'react'
// Components
import { Layout, SEO } from '../components'
// Hooks
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

interface BlogData {
	data: {
		blog: {
			edges: any;
		};
	};
}

const PostList = styled.ol`
	list-style: none;
`

const PostListItem = styled.li`

`

const PostLink = styled(Link)`
	display: flex;
`

const PostListItemContent = styled.div`
	padding: 1rem;
`

const PostImageWrapper = styled.div`
	width: 200px;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	padding: 8px;
	background: rgba(0, 0, 0, 0.1);
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

	.gatsby-image-wrapper {
		width: 184px;
		border-radius: 4px;
		img {
			border-radius: 4px;
		}
	}
`

export default function SecondPage({ data }: BlogData) {
	console.log(data);
	const posts = data.blog.edges
	console.log(posts)

	return (
		<Layout>
			<SEO title="Blog" />
			<PostList>
				{posts.map((post: any) => {
					console.log(post);
					const { frontmatter, excerpt } = post.node
					const { slug, title, coverImage, date } = frontmatter
					return (
						<PostListItem>
							<PostLink to={slug}>
								<PostImageWrapper>
									<Img fluid={{ ...coverImage.childImageSharp.fluid }} />
								</PostImageWrapper>
								<PostListItemContent>
									<h1>{title}</h1>
									<p>{date}</p>
									<p>{excerpt}</p>
								</PostListItemContent>
							</PostLink>
						</PostListItem>
					)
				})}
			</PostList>
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