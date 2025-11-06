import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Card, Chip } from "react-native-paper";
import { Post } from "../types/post";
import { formatDateTimeSafe } from "../utils/dateUtils";

interface PostDetailContentProps {
  post: Post;
}

const PostDetailContent: React.FC<PostDetailContentProps> = ({ post }) => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        {/* Use Card.Cover for better integration with Card component */}
        {post.image && (
          <Card.Cover
            source={{ uri: post.image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        <Card.Content style={styles.cardContent}>
          <Text variant="headlineMedium" style={styles.title}>
            {post.title || "Untitled Post"}
          </Text>

          <View style={styles.metaContainer}>
            <Chip
              mode="outlined"
              style={styles.dateChip}
              textStyle={styles.dateChipText}
            >
              Published: {formatDateTimeSafe(post.published_at)}
            </Chip>
            {post.updated_at && post.updated_at !== post.published_at && (
              <Chip
                mode="outlined"
                style={styles.dateChip}
                textStyle={styles.dateChipText}
              >
                Updated: {formatDateTimeSafe(post.updated_at)}
              </Chip>
            )}
          </View>

          <Text variant="bodyLarge" style={styles.content}>
            {post.content || "No content available for this post."}
          </Text>

          {post.slug && (
            <View style={styles.slugContainer}>
              <Text variant="labelLarge" style={styles.slugLabel}>
                URL Slug:
              </Text>
              <Chip mode="flat" style={styles.slugChip}>
                {post.slug}
              </Chip>
            </View>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    margin: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
  },
  image: {
    height: 250,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1a1a1a",
    lineHeight: 32,
    fontSize: 24,
  },
  metaContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    gap: 8,
  },
  dateChip: {
    alignSelf: "flex-start",
    backgroundColor: "#f8f9fa",
  },
  dateChipText: {
    fontSize: 12,
    color: "#666",
  },
  content: {
    lineHeight: 24,
    color: "#444",
    marginBottom: 20,
    fontSize: 16,
  },
  slugContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    gap: 8,
  },
  slugLabel: {
    fontWeight: "bold",
    color: "#666",
  },
  slugChip: {
    backgroundColor: "#e3f2fd",
  },
});

export default PostDetailContent;
