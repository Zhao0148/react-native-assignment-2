import FlatListComponent from "@/components/assignment-2/FlatListComponent";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { MockUser } from "@/user-mock-data/MockData";
import { SafeAreaView } from "react-native-safe-area-context";
import { RandomAPI } from "@/RandomApiClass/RandomApi";
import { useCallback, useEffect, useState } from "react";
import { User } from "@/types";

const userConfig = (user: User): User => ({
  id: user.id,
  first_name: user.first_name,
  last_name: user.last_name,
  avatar: user.avatar,
});

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);

  const userData = useCallback(async () => {
    console.log("fetching data");
    let data = await RandomAPI.fetchUsers({ fetchSampleSize: 10 });
    if (!Array.isArray(data)) data ? (data = [data]) : (data = []);
    const extractedUsers = data.map(userConfig);
    console.log(extractedUsers);
    setUsers(extractedUsers);
  }, []);

  useEffect(() => {
    userData();

  }, [userData]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatListComponent users={users} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
