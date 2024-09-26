import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.a}>
        \<Text>{"Test"} </Text>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  a: {
    flex: 1,
  },
  b: {
    flex: 1,
  },
});
