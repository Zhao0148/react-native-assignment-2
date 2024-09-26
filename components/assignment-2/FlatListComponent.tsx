import React, { useState, useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";
import { User } from "@/types";
import UserComponent from "./UserRenderComponent";

type Props = {
  users?: User[];
  getUserData: () => Promise<void>;
  // MockUser?: User[];
};

const FlatListComponent = ({ users, getUserData }: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getUserData();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [getUserData]);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserComponent user={item} />}
    />
  );
};

export default FlatListComponent;
