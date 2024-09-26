import FlatListComponent from "@/components/assignment-2/FlatListComponent";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { MockUser } from "@/user-mock-data/MockData";
import { SafeAreaView } from "react-native-safe-area-context";
import { RandomAPI } from "@/RandomApiClass/RandomApi";
import { useCallback, useState } from "react";
import { User } from "@/types";

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const userData = useCallback(async () => {
    let data = await RandomAPI.fetchUsers({ fetchSampleSize: 1 });

    if (!Array.isArray(data)) data ? (data = [data]) : (data = []);

    const extractedUsers = data.map(user => ({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
    }));

  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatListComponent user={MockUser} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // marginTop: 50,
  },
});
