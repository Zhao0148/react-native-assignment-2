import FlatListComponent from "@/components/assignment-2/FlatListComponent";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
type User = {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const user: User[] = [
  {
    id: "1",
    first_name: "Alice",
    last_name: "Johnson",
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    id: "2",
    first_name: "Michael",
    last_name: "Smith",
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    id: "3",
    first_name: "Sofia",
    last_name: "Garcia",
    avatar: "https://example.com/avatar3.jpg",
  },
];
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
       <FlatListComponent user={user}/> 
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
