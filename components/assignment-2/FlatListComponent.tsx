import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { User } from "@/types";
import UserAvatar from "react-native-user-avatar";
import { styles } from "@/styles";

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

const UserComponent = ({ user }: { user: User }) => {
  let isIOS = Platform.OS === "ios";
  const { first_name, last_name, avatar } = user;
isIOS = true;
  return (
    <View style={[styles.item]}>
      {!isIOS && (
        <UserAvatar
          size={50}
          name={`${first_name + last_name}`}
          src={avatar}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{first_name}</Text>
        <Text style={styles.name}>{last_name}</Text>
      </View>
      {isIOS && (
        <UserAvatar
          size={50}
          name={`${first_name +last_name}`}
          src={avatar}
        />
      )}
    </View>
  );
};
