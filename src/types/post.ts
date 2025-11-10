export interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  image?: string; // Optional field for post image URL
}

export interface PostsResponse {
  posts: Post[];
  total: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
}
