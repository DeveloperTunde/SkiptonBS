import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderLeftWidth: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  message: {
    flex: 1,
    flexWrap: "wrap",
  },
  actionButton: {
    marginLeft: 8,
    minWidth: 0,
  },
});

export default styles;
