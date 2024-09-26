import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "@/types";
import { RandomAPI } from "@/RandomApiClass/RandomApi";
import FlatListComponent from "@/components/assignment-2/FlatListComponent";
import FabButtonComponent from "@/components/assignment-2/FabButtonComponent";
// import { MockUser } from "@/user-mock-data/MockData";
const userConfig = (user: User): User => ({
  id: user.id,
  first_name: user.first_name,
  last_name: user.last_name,
  avatar: user.avatar,
});

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);

  const userData = useCallback(async () => {
    let data = await RandomAPI.fetchUsers({ fetchSampleSize: 5 }).then(
      RandomAPI.wrapFetchedObjectInArray
    );
    const extractedUsers = data.map(userConfig);
    setUsers(extractedUsers);
  }, []);

  useEffect(() => {
    userData();
  }, [userData]);

  const addUser = useCallback(async () => {
    let data = await RandomAPI.fetchUsers({ fetchSampleSize: 1 }).then(
      RandomAPI.wrapFetchedObjectInArray
    );

    const extractedUsers = data.map(userConfig);
    setUsers((existingUserObj) => [...extractedUsers, ...existingUserObj]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatListComponent users={users} />
        <FabButtonComponent userData={addUser} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
