import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imagePlaceholder: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  imagePlaceholderText: {
    marginTop: 8,
    color: "#666",
    fontSize: 12,
  },
  text: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },
});

export default LoadingIndicator;
