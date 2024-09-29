import { styles } from "@/styles";
import { User } from "@/types";
import { Platform, View, Text } from "react-native";
import UserAvatarWrapper from "./UserAvatarWrap";

const UserComponent = ({ user }: { user: User }) => {
  const isIOS = Platform.OS === "ios";
  const { first_name = '', last_name = '', avatar = ''} = user;

  return (
    <View style={[styles.item]}>
      {!isIOS &&  <UserAvatarWrapper  size={50} name={`${first_name} ${last_name}`} src={avatar} />}
      <View style={styles.textContainer}>
        <Text style={[styles.name, isIOS ? { alignSelf: 'flex-start' } : {alignSelf: 'flex-end'}]}>{first_name}</Text>
        <Text style={[styles.name , isIOS ? { alignSelf: 'flex-start' } : {alignSelf: 'flex-end'}]}>{last_name}</Text>
      </View>
      {isIOS &&  <UserAvatarWrapper  size={50} name={`${first_name} ${last_name}`} src={avatar} />}
    </View>
  );
};

export default UserComponent;

