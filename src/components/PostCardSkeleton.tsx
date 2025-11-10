import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import BreathingSkeleton from "./BreathingSkeleton";
import styles from "@styles/PostSkeletonStyles";

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

export default PostCardSkeleton;
