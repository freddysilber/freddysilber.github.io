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
	align-items: center;
	padding: 0 15%;
`

const PostListItem = styled.li`
	width: 100%;
	padding: 0.5rem;
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
						<PostListItem className="has-background-black box">
							<PostLink to={slug}>
								<PostImageWrapper>
									<Img fluid={{ ...coverImage.childImageSharp.fluid }} />
								</PostImageWrapper>
								<PostListItemContent>
									<h1 className="has-text-warning">{title}</h1>
									<p className="has-text-grey-light mb-2">Published on {date}</p>
									<p className="has-text-light">{excerpt}</p>
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