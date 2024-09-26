import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.1,
  },
  textContainer: {
    flexDirection: "column",
    marginHorizontal: 15,
  },
  name: {
    fontSize: 16,
    alignSelf: "flex-start",
  },
  fabButton: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#26653A",
    borderRadius: 28,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
