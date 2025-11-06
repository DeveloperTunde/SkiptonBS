import React from "react";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { usePosts } from "../hooks/usePosts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Post } from "../types/post";

import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorView from "../components/ErrorView";
import { Button, Text } from "react-native-paper";

type PostsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Posts"
>;

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<PostsScreenNavigationProp>();
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
      <FlatList
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadMoreButton: {
    margin: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  endContainer: {
    padding: 16,
    alignItems: "center",
  },
  endText: {
    color: "#666",
    fontStyle: "italic",
  },
});

export default PostsScreen;
