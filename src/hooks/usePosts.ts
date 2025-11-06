import { useInfiniteQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';
import { Post } from '../types/post';

const POSTS_QUERY_KEY = 'posts';

export const usePosts = (limit: number = 10) => {
  return useInfiniteQuery({
    queryKey: [POSTS_QUERY_KEY, limit],
    queryFn: ({ pageParam = 1 }) => 
      postService.getPosts({ page: pageParam, limit }),
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.total / limit);
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Helper function for consistent query key management
export const getPostsQueryKey = (page: number, limit: number) => {
  const queryKeyArray = Array.isArray([POSTS_QUERY_KEY, limit, page]) 
    ? [POSTS_QUERY_KEY, limit, page] 
    : [[POSTS_QUERY_KEY, limit, page]];
  return queryKeyArray;
};