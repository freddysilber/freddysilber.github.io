export interface BlogPost {
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