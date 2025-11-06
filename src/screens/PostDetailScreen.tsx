import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { usePost } from "../hooks/usePost";

import PostDetailSkeleton from "../components/PostDetailSkeleton";
import ErrorView from "../components/ErrorView";
import PostDetailContent from "../components/PostDetailContent";

type PostDetailScreenRouteProp = RouteProp<RootStackParamList, "PostDetail">;

const PostDetailScreen: React.FC = () => {
  const route = useRoute<PostDetailScreenRouteProp>();
  const { postId } = route.params;
  const { data: post, isLoading, isError, error, refetch } = usePost(postId);

  // Show skeleton for initial loading
  if (isLoading) {
    return <PostDetailSkeleton />;
  }

  if (isError || !post) {
    return (
      <ErrorView
        message={error?.message || "Failed to load post details"}
        onRetry={() => refetch()}
      />
    );
  }

  return <PostDetailContent post={post} />;
};

export default PostDetailScreen;
