
import {  StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      // justifyContent: "space-between",
      
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
      marginHorizontal: 15,
    },
    name: {
      fontSize: 16,
    },

  });
  