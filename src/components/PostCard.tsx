import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { Post } from "../types/post";
import { formatDateSafe } from "@utils/dateUtils";
import styles from "@styles/PostCardStyles";

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
            Published: {formatDateSafe(post.publishedAt)}
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

export default PostCard;
