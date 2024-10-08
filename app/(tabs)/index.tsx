import { useCallback, useEffect, useState } from "react";
import { styles } from "@/styles";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "@/types";
import { RandomAPI } from "@/RandomApiClass/RandomApi";
import FlatListComponent from "@/components/assignment-2/FlatListComponent";
import FabButtonComponent from "@/components/assignment-2/FabButtonComponent";
// import { MockUser } from "@/user-mock-data/MockData";
const userConfig = (user: User) => ({
  id: user.id,
  first_name: user.first_name,
  last_name: user.last_name,
  avatar: user.avatar ?? "https://i.pravatar.cc/150?img=70",
});

export default function HomeScreen() {
  const [users, setUsers] = useState<User[]>([]);

  const getUserData = useCallback(async () => {
    try {
      let data = await RandomAPI.fetchUsers({ fetchSampleSize: 10 }).then(
        RandomAPI.wrapFetchedObjectInArray
      );
      const extractedUsers = data.map(userConfig);
      setUsers(extractedUsers);
    } catch (error) {
      throw new Error("Error fetching in function getUserData");
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const addUser = useCallback(async () => {
    try {
      let data = await RandomAPI.fetchUsers({ fetchSampleSize: 1 }).then(
        RandomAPI.wrapFetchedObjectInArray
      );
      const extractedUsers = data.map(userConfig);
      setUsers((existingUserObj) => [...extractedUsers, ...existingUserObj]);
    } catch (error) {
      // some toast notification for the user.
        return undefined
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatListComponent users={users} getUserData={getUserData} />
        <FabButtonComponent addUser={addUser} />
      </View>
    </SafeAreaView>
  );
}
