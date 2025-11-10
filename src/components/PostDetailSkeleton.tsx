import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import BreathingSkeleton from "./BreathingSkeleton";
import styles from "@styles/PostDetailsSkeleton";

const PostDetailSkeleton: React.FC = () => {
  const SkeletonElement = ({ style }: { style: any }) => (
    <BreathingSkeleton>
      <View style={style} />
    </BreathingSkeleton>
  );

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        {/* Image Skeleton */}
        <SkeletonElement style={styles.imageSkeleton} />

        <Card.Content>
          {/* Title Skeleton */}
          <SkeletonElement style={styles.titleSkeleton} />
          <SkeletonElement style={[styles.titleSkeleton, styles.shortTitle]} />

          {/* Meta Skeleton */}
          <View style={styles.metaContainer}>
            <SkeletonElement style={styles.chipSkeleton} />
            <SkeletonElement style={styles.chipSkeleton} />
          </View>

          {/* Content Skeleton */}
          <SkeletonElement style={styles.contentLine} />
          <SkeletonElement style={styles.contentLine} />
          <SkeletonElement style={styles.contentLine} />
          <SkeletonElement style={styles.contentLine} />
          <SkeletonElement style={styles.contentLine} />
          <SkeletonElement style={[styles.contentLine, styles.shortContent]} />

          {/* Slug Skeleton */}
          <View style={styles.slugContainer}>
            <SkeletonElement style={styles.slugLabelSkeleton} />
            <SkeletonElement style={styles.slugChipSkeleton} />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default PostDetailSkeleton;
