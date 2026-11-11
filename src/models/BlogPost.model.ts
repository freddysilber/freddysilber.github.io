import type { ImageDataLike } from 'gatsby-plugin-image'
export interface BlogPost {
	node: {
		excerpt: string;
		frontmatter: {
			coverImage: ImageDataLike;
			date: string;
			slug: string;
			title: string;
		};
	};
}