import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BlogPost } from '../models';
import breakpoints from '../config/breakpoints';

const BlogSideBarContainer = styled.div`
	width: 30%;
	padding: 0 1rem;
`;

const PostList = styled.ul`
	list-style: disc;
	padding: 0 1rem;

	@media(max-width: ${breakpoints.breakpointMd}) {
		width: 100%;
		margin-top: 1rem;
	}
`;

const PostListItem = styled.li``;

const PostLink = styled(Link)`
	display: flex;
`;

export default function BlogSidebar({ otherPosts }: { otherPosts: BlogPost[] }) {
	const renderPostListItems = (otherPosts: BlogPost[]) => {
		if (otherPosts.length) {
			return otherPosts.map((post: BlogPost, index: number) => {
				return (
					<PostListItem key={index}>
						<PostLink to={post.node.frontmatter.slug}>
							<h1>{post.node.frontmatter.title}</h1>
						</PostLink>
					</PostListItem>
				)
			});
		} else {
			return <p className="has-text-centered has-text-grey-light">More posts coming soon...</p>;
		}
	}

	return (
		<BlogSideBarContainer>
			<h1 className="has-text-weight-bold has-text-centered has-text-warning is-size-5">Other Blog Posts</h1>
			<hr className="m-0 mb-2" />
			<PostList>{renderPostListItems(otherPosts)}</PostList>
		</BlogSideBarContainer>
	)
}

BlogSidebar.propTypes = {
	otherPosts: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
}