import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, useTheme, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import styles from "@styles/InfoCardStyles";

interface InfoCardProps {
  type: "error" | "warning" | "info" | "success";
  message: string;
  onAction?: () => void;
  actionText?: string;
  showIcon?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  type,
  message,
  onAction,
  actionText,
  showIcon = true,
}) => {
  const theme = useTheme();

  const getCardStyle = () => {
    switch (type) {
      case "error":
        return { backgroundColor: "#ffebee", borderColor: "#f44336" };
      case "warning":
        return { backgroundColor: "#fff3e0", borderColor: "#ff9800" };
      case "info":
        return { backgroundColor: "#e3f2fd", borderColor: "#2196f3" };
      case "success":
        return { backgroundColor: "#e8f5e8", borderColor: "#4caf50" };
      default:
        return { backgroundColor: "#f5f5f5", borderColor: "#9e9e9e" };
    }
  };

  const getIcon = () => {
    switch (type) {
      case "error":
        return "warning-outline";
      case "warning":
        return "warning-outline";
      case "info":
        return "information-circle-outline";
      case "success":
        return "checkmark-circle-outline";
      default:
        return "information-circle-outline";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "error":
        return "#d32f2f";
      case "warning":
        return "#ed6c02";
      case "info":
        return "#0288d1";
      case "success":
        return "#2e7d32";
      default:
        return "#757575";
    }
  };

  return (
    <Card style={[styles.card, getCardStyle()]} mode="contained">
      <Card.Content style={styles.content}>
        <View style={styles.messageContainer}>
          {showIcon && (
            <Ionicons
              name={getIcon()}
              size={20}
              color={getIconColor()}
              style={styles.icon}
            />
          )}
          <Text variant="bodyMedium" style={styles.message}>
            {message}
          </Text>
        </View>
        {onAction && actionText && (
          <Button
            mode="text"
            onPress={onAction}
            compact
            style={styles.actionButton}
            textColor={getIconColor()}
          >
            {actionText}
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};
