import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  loadMoreButton: {
    margin: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  endContainer: {
    padding: 16,
    alignItems: "center",
  },
  endText: {
    color: "#666",
    fontStyle: "italic",
  },
});

export default styles;
