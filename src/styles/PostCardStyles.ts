import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    margin: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    paddingTop: 12,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1a1a1a",
    fontSize: 16,
  },
  contentText: {
    color: "#666",
    marginBottom: 8,
    lineHeight: 20,
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#999",
    fontSize: 12,
  },
});

export default styles;
