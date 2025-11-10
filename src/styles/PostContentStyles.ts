import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    margin: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
  },
  image: {
    height: 250,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1a1a1a",
    lineHeight: 32,
    fontSize: 24,
  },
  metaContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    gap: 8,
  },
  dateChip: {
    alignSelf: "flex-start",
    backgroundColor: "#f8f9fa",
  },
  dateChipText: {
    fontSize: 12,
    color: "#666",
  },
  content: {
    lineHeight: 24,
    color: "#444",
    marginBottom: 20,
    fontSize: 16,
  },
  slugContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    gap: 8,
  },
  slugLabel: {
    fontWeight: "bold",
    color: "#666",
  },
  slugChip: {
    backgroundColor: "#e3f2fd",
  },
});
export default styles;
