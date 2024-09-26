import React, { useState, useEffect, useCallback } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
type Props = {
  user?: User[];
  // MockUser?: User[];
};

const FlatListComponent = ({ user }: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    //refreshing used in <ScrollView> refreshControl attr
    //which loads the <RefreshControl> with the refreshing attr
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={user}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.first_name}</Text>
        </View>
      )}
    />
  );
};

export default FlatListComponent;
