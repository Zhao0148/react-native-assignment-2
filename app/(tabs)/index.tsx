import FlatListComponent from "@/components/assignment-2/FlatListComponent";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { MockUser } from "@/user-mock-data/MockData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View >
       <FlatListComponent user={MockUser}/> 
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginTop: 50,
  },
});
