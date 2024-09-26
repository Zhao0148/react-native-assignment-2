declare module 'react-native-user-avatar' {
    import { ComponentType } from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
  
    interface UserAvatarProps {
      name?: string;
      src?: string;
      size?: number;
      style?: ViewStyle;
      textStyle?: TextStyle;
      bgColors?: string[];
      bgColor?: string;
    }
  
    const UserAvatar: ComponentType<UserAvatarProps>;
    export default UserAvatar;
  }