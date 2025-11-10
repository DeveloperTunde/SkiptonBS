import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styles from "@styles/LoadingIndicatorStyles";

interface LoadingIndicatorProps {
  message?: string;
  size?: "small" | "large";
  forImage?: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  message = "Loading...",
  size = "large",
  forImage = false,
}) => {
  if (forImage) {
    return (
      <View style={styles.imagePlaceholder}>
        <ActivityIndicator size="small" color="#6200ee" />
        <Text style={styles.imagePlaceholderText}>Loading image...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#6200ee" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default LoadingIndicator;
