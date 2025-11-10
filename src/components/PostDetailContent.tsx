import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Card, Chip } from "react-native-paper";
import { Post } from "../types/post";
import { formatDateTimeSafe } from "@utils/dateUtils";
import styles from "@styles/PostContentStyles";

interface PostDetailContentProps {
  post: Post;
}

const PostDetailContent: React.FC<PostDetailContentProps> = ({ post }) => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        {/* Use Card.Cover for better integration with Card component */}
        {post.image ? (
          <Card.Cover
            source={{ uri: post.image }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "#f0f0f0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 20 }}>No Image</Text>
          </View>
        )}

        <Card.Content style={styles.cardContent}>
          <Text variant="headlineMedium" style={styles.title}>
            {post.title || "Post Title Unavailable"}
          </Text>

          <View style={styles.metaContainer}>
            <Chip
              mode="outlined"
              style={styles.dateChip}
              textStyle={styles.dateChipText}
            >
              Published: {formatDateTimeSafe(post.publishedAt)}
            </Chip>
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <Chip
                mode="outlined"
                style={styles.dateChip}
                textStyle={styles.dateChipText}
              >
                Updated: {formatDateTimeSafe(post.updatedAt)}
              </Chip>
            )}
          </View>

          <Text variant="bodyLarge" style={styles.content}>
            {post.content || "No content available for this post."}
          </Text>

          {post.slug && (
            <View style={styles.slugContainer}>
              <Text variant="labelLarge" style={styles.slugLabel}>
                Category:
              </Text>
              <Chip mode="flat" style={styles.slugChip}>
                {post.category}
              </Chip>
            </View>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default PostDetailContent;
