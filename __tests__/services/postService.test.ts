import { postService } from "../../src/services/postService";
import { api } from "../../src/services/api";

jest.mock("../../src/services/api");

describe("postService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getPosts", () => {
    it("fetches posts with pagination", async () => {
      const mockPosts = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        title: `Post ${i + 1}`,
        content: `Content ${i + 1}`,
        slug: `post-${i + 1}`,
        published_at: "2023-01-01T00:00:00Z",
        updated_at: "2023-01-01T00:00:00Z",
      }));

      (api.get as jest.Mock).mockResolvedValue({ data: mockPosts });

      const result = await postService.getPosts({ page: 1, limit: 10 });

      expect(api.get).toHaveBeenCalledWith("/posts");
      expect(result.posts).toHaveLength(10);
      expect(result.total).toBe(15);
      expect(result.posts[0].id).toBe(1);
      expect(result.posts[9].id).toBe(10);
    });
  });

  describe("getPostById", () => {
    it("fetches a single post by id", async () => {
      const mockPost = {
        id: 1,
        title: "Test Post",
        content: "Test Content",
        slug: "test-post",
        published_at: "2023-01-01T00:00:00Z",
        updated_at: "2023-01-01T00:00:00Z",
      };

      (api.get as jest.Mock).mockResolvedValue({ data: mockPost });

      const result = await postService.getPostById(1);

      expect(api.get).toHaveBeenCalledWith("/posts/1");
      expect(result).toEqual(mockPost);
    });
  });
});
