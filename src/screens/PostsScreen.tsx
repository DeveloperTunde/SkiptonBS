import React from "react";
import { View, FlatList, ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PostCardSkeleton from "../components/PostCardSkeleton";
import { Button, Text } from "react-native-paper";
import { usePosts } from "@hooks/usePosts";
import PostCard from "@components/PostCard";
import ErrorView from "@components/ErrorView";
import { RootStackParamList } from "../types/navigation";
import { Post } from "../types/post";
import styles from "@styles/PostScreenStyles";
import { useNetworkStatus } from "@hooks/useNetworkStatus";
import { InfoCard } from "@components/InfoCard";

type PostsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Posts"
>;

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<PostsScreenNavigationProp>();
  const isConnected = useNetworkStatus();

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
  } = usePosts(10);

  const handlePostPress = (postId: number) => {
    navigation.navigate("PostDetail", { postId });
  };

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRetryConnection = () => {
    refetch();
  };

  const renderPost: ListRenderItem<Post> = ({ item }) => (
    <PostCard post={item} onPress={handlePostPress} />
  );

  // Render skeleton items during initial load
  const renderSkeletonItem = () => <PostCardSkeleton />;

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  // Show skeletons for initial loading
  if (isLoading && allPosts.length === 0) {
    return (
      <View style={styles.container}>
        <FlatList
          data={Array.from({ length: 6 })}
          renderItem={renderSkeletonItem}
          keyExtractor={(_, index) => `skeleton-${index}`}
        />
      </View>
    );
  }

  if (isError) {
    return (
      <ErrorView
        message={error?.message || "Failed to load posts"}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <View style={styles.container}>
      {isConnected === false && (
        <View style={styles.stickyHeader}>
          <InfoCard
            type="error"
            message="You are currently offline. Some features may not be available."
            onAction={handleRetryConnection}
            actionText="Retry"
            showIcon={true}
          />
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={allPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshing={isRefetching}
        onRefresh={refetch}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text variant="titleMedium">No posts found</Text>
          </View>
        }
        ListFooterComponent={
          isFetchingNextPage ? (
            <View>
              {/* Show skeletons for loading more */}
              {Array.from({ length: 3 }).map((_, index) => (
                <PostCardSkeleton key={`footer-skeleton-${index}`} />
              ))}
            </View>
          ) : hasNextPage ? (
            <Button
              textColor="#0062a8"
              mode="outlined"
              onPress={loadMore}
              style={styles.loadMoreButton}
              loading={isFetchingNextPage}
            >
              Load More Posts
            </Button>
          ) : allPosts.length > 0 ? (
            <View style={styles.endContainer}>
              <Text variant="bodyMedium" style={styles.endText}>
                All posts loaded
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default PostsScreen;
