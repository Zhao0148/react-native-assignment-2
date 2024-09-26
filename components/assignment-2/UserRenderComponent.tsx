import { styles } from "@/styles";
import { User } from "@/types";
import { Platform, View, Text } from "react-native";
import UserAvatar from "react-native-user-avatar";

const UserComponent = ({ user }: { user: User }) => {
  let isIOS = Platform.OS === "ios";
  const { first_name = '', last_name = '', avatar = ''} = user;
console.log(`isIOS: ${isIOS}`);
  const UserAvatarItem = () => (
    <UserAvatar  size={50} name={`${first_name} ${last_name}`} src={avatar} />
  );
//   isIOS = true
  return (
    <View style={[styles.item]}>
      {!isIOS && <UserAvatarItem />}
      <View style={styles.textContainer}>
        <Text style={[styles.name, isIOS ? { alignSelf: 'flex-start' } : {alignSelf: 'flex-end'}]}>{first_name}</Text>
        <Text style={[styles.name , isIOS ? { alignSelf: 'flex-start' } : {alignSelf: 'flex-end'}]}>{last_name}</Text>
      </View>
      {isIOS && <UserAvatarItem />}
    </View>
  );
};

export default UserComponent;
