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
  imageSkeleton: {
    height: 300,
    backgroundColor: "#e0e0e0",
  },
  titleSkeleton: {
    height: 28,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 8,
    width: "90%",
    marginTop: 16,
  },
  shortTitle: {
    width: "60%",
    marginBottom: 16,
  },
  metaContainer: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    gap: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chipSkeleton: {
    height: 32,
    width: 150,
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
  },
  contentLine: {
    height: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 8,
    width: "100%",
  },
  shortContent: {
    width: "70%",
    marginBottom: 16,
  },
  slugContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    gap: 8,
  },
  slugLabelSkeleton: {
    height: 20,
    width: 80,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
  slugChipSkeleton: {
    height: 32,
    width: 120,
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
  },
});

export default styles;
