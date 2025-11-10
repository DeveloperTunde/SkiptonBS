import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import styles from "@styles/ErrorViewStyle";

interface ErrorViewProps {
  message: string;
  onRetry?: () => void;
}

const ErrorView: React.FC<ErrorViewProps> = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="warning-outline" size={64} color="#d32f2f" />
      <Text variant="titleMedium" style={styles.errorText}>
        {message}
      </Text>
      {onRetry && (
        <Button
          mode="contained"
          onPress={onRetry}
          style={styles.retryButton}
          icon="refresh"
        >
          Try Again
        </Button>
      )}
    </View>
  );
};

export default ErrorView;
