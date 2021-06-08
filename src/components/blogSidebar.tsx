import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BlogPost } from '../models';
import breakpoints from '../config/breakpoints';

const PostList = styled.ul`
	width: 30%;
	list-style: upper-roman;
	padding: 0 2rem;

	@media(max-width: ${breakpoints.breakpointMd}) {
    	width: 100%;
		margin-top: 1rem;
  	}
`

const PostListItem = styled.li``

const PostLink = styled(Link)`
	display: flex;
`

export default function BlogSidebar({ otherPosts }: any) {
	return (
		<PostList>
			<h1 className="has-text-weight-bold has-text-centered has-text-warning is-size-5 mb-4">Other Blog Posts</h1>
			<hr />
			{
				!!otherPosts.length ?
					otherPosts.map((post: BlogPost, index: number) => {
						const { slug, title } = post.node.frontmatter
						return (
							<PostListItem key={index}>
								<PostLink to={slug}>
									<h1>{title}</h1>
								</PostLink>
							</PostListItem>
						)
					}) :
					<p className="has-text-centered has-text-grey-light mt-6">More posts coming soon...</p>
			}
		</PostList>
	)
}

BlogSidebar.propTypes = {
	otherPosts: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
}