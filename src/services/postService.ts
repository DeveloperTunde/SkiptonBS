import { api } from "./api";
import { Post, PostsResponse, PaginationParams } from "../types/post";

// Generate random image URL using Picsum
const generateRandomImage = (postId: number) => {
  const width = 400;
  const height = 300;
  return `https://picsum.photos/id/${postId + 10}/${width}/${height}`;
};

// Helper function to normalize posts with images
const normalizePostDates = (post: any): Post => {
  return {
    ...post,
    published_at:
      post.published_at || post.createdAt || new Date().toISOString(),
    updated_at:
      post.updated_at ||
      post.updatedAt ||
      post.published_at ||
      new Date().toISOString(),
    image: post.image || generateRandomImage(post.id),
  };
};

export const postService = {
  async getPosts(params: PaginationParams): Promise<PostsResponse> {
    const { page, limit } = params;

    try {
      const response = await api.get("/posts");

      // Normalize all posts with proper dates and images
      const allPosts = response.data.map(normalizePostDates);

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
      return normalizePostDates(response.data);
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error);
      throw error;
    }
  },
};
