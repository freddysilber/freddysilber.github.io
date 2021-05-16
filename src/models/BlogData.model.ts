import { BlogPost } from './BlogPost.model'

export interface BlogData {
	data: {
		blog: {
			edges: BlogPost[];
		};
	};
}