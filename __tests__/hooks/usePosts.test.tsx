import React from "react";
import { renderHook, waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePosts } from "../../src/hooks/usePosts";
import { postService } from "../../src/services/postService";

// Mock the postService
jest.mock("../../src/services/postService");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("usePosts", () => {
  beforeEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("fetches posts successfully", async () => {
    const mockPosts = {
      posts: [
        {
          id: 1,
          title: "Test Post",
          content: "Test Content",
          slug: "test-post",
          publishedAt: "2023-01-01T00:00:00Z",
          updatedAt: "2023-01-01T00:00:00Z",
        },
      ],
      total: 1,
    };

    (postService.getPosts as jest.Mock).mockResolvedValue(mockPosts);

    const { result } = renderHook(() => usePosts(10), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.pages[0]).toEqual(mockPosts);
    expect(postService.getPosts).toHaveBeenCalledWith({ page: 1, limit: 10 });
  });

  it("handles error state", async () => {
    const errorMessage = "Network error";
    (postService.getPosts as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    const { result } = renderHook(() => usePosts(10), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
    expect(result.current.error?.message).toBe(errorMessage);
  });
});
