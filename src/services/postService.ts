import { api } from "./api";
import { Post, PostsResponse, PaginationParams } from "../types/post";

// Helper function to  handle missing images
const normalizePost = (post: any): Post => {
  return {
    ...post,
    image: post.image || null,
  };
};

export const postService = {
  async getPosts(params: PaginationParams): Promise<PostsResponse> {
    const { page, limit } = params;

    try {
      const response = await api.get("/posts");

      // Normalize all posts with proper dates
      const allPosts = response.data.map(normalizePost);

      // Simulate pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedPosts = allPosts.slice(startIndex, endIndex);

      return {
        posts: paginatedPosts,
        total: allPosts.length,
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },

  async getPostById(id: number): Promise<Post> {
    try {
      const response = await api.get(`/posts/${id}`);
      return normalizePost(response.data);
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error);
      throw error;
    }
  },
};
