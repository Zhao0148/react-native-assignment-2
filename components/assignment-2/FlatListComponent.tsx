import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { User } from "@/types";
import UserComponent from "./UserRenderComponent";

type Props = {
  users?: User[];
  // MockUser?: User[];
};

const FlatListComponent = ({ users }: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => UserComponent({ user: item })}
    />
  );
};

export default FlatListComponent;

