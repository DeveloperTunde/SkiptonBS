import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { Post } from "../types/post";
import { formatDateSafe } from "../utils/dateUtils";

interface PostCardProps {
  post: Post;
  onPress: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onPress }) => {
  return (
    <Card style={styles.card} onPress={() => onPress(post.id)}>
      {post.image && (
        <Card.Cover
          source={{ uri: post.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Card.Content style={styles.content}>
        <Text variant="titleMedium" style={styles.title}>
          {post.title || "Untitled Post"}
        </Text>
        <Text variant="bodyMedium" numberOfLines={2} style={styles.contentText}>
          {post.content || "No content available"}
        </Text>
        <View style={styles.footer}>
          <Text variant="bodySmall" style={styles.date}>
            Published: {formatDateSafe(post.published_at)}
          </Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="text"
          textColor="#0062a8"
          onPress={() => onPress(post.id)}
        >
          Read More
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    paddingTop: 12,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1a1a1a",
    fontSize: 16,
  },
  contentText: {
    color: "#666",
    marginBottom: 8,
    lineHeight: 20,
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#999",
    fontSize: 12,
  },
});

export default PostCard;
