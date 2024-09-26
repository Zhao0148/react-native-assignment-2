import React from "react";
import { FlatList, Text, View } from "react-native";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
type Props = {
  user: User[];
};

const data: User[] = [
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
const FlatListComponent = ({ user }: Props) => {
  return (
    <div>
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <View>
            <Text>{item.first_name}</Text>
          </View>
        )}
      />
    </div>
  );
};

export default FlatListComponent;
