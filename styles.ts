
import {  Platform, StyleSheet } from "react-native";
export const isIOS = Platform.OS === 'ios';
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
      backgroundColor: "#f9f9f9",
      borderRadius: 10,
      justifyContent: isIOS ? 'space-between' : 'flex-start',
    },
    
    // iosItem: {
    //   justifyContent: "space-between",
    // },
    // androidItem: {
    //   justifyContent: "flex-start",
    // },
    textContainer: {
      marginHorizontal: 15,
    },
    name: {
      fontSize: 16,
    },

  });
  