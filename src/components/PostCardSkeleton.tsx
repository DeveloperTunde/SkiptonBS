import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import BreathingSkeleton from "./BreathingSkeleton";

const PostCardSkeleton: React.FC = () => {
  const SkeletonElement = ({ style }: { style: any }) => (
    <BreathingSkeleton>
      <View style={style} />
    </BreathingSkeleton>
  );

  return (
    <Card style={styles.card}>
      {/* Image Skeleton */}
      <SkeletonElement style={styles.imageSkeleton} />

      <Card.Content style={styles.content}>
        {/* Title Skeleton */}
        <SkeletonElement style={styles.titleSkeleton} />

        {/* Content Skeleton */}
        <SkeletonElement style={styles.contentSkeleton} />
        <SkeletonElement
          style={[styles.contentSkeleton, styles.shortContent]}
        />

        {/* Date Skeleton */}
        <SkeletonElement style={styles.dateSkeleton} />
      </Card.Content>

      <Card.Actions>
        {/* Button Skeleton */}
        <SkeletonElement style={styles.buttonSkeleton} />
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
    backgroundColor: "#fff",
  },
  imageSkeleton: {
    height: 200,
    backgroundColor: "#d0cdcdff",
  },
  content: {
    paddingTop: 12,
  },
  titleSkeleton: {
    height: 20,
    backgroundColor: "#d0cdcdff",
    borderRadius: 4,
    marginBottom: 12,
    width: "80%",
  },
  contentSkeleton: {
    height: 16,
    backgroundColor: "#d0cdcdff",
    borderRadius: 4,
    marginBottom: 6,
    width: "100%",
  },
  shortContent: {
    width: "70%",
    marginBottom: 12,
  },
  dateSkeleton: {
    height: 14,
    backgroundColor: "#d0cdcdff",
    borderRadius: 4,
    width: "40%",
  },
  buttonSkeleton: {
    height: 36,
    width: 100,
    backgroundColor: "#d0cdcdff",
    borderRadius: 4,
  },
});

export default PostCardSkeleton;
