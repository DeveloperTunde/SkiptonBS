import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

const POST_QUERY_KEY = 'post';

export const usePost = (id: number) => {
  return useQuery({
    queryKey: [POST_QUERY_KEY, id],
    queryFn: () => postService.getPostById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const getPostQueryKey = (id: number) => {
  const queryKeyArray = Array.isArray([POST_QUERY_KEY, id]) 
    ? [POST_QUERY_KEY, id] 
    : [[POST_QUERY_KEY, id]];
  return queryKeyArray;
};