// UserAvatarWrapper.tsx
import React from "react";
import UserAvatar from "react-native-user-avatar";

interface UserAvatarWrapperProps {
  size: number;
  name: string;
  src: string;
}

const UserAvatarWrapper = ({ size, name, src }: UserAvatarWrapperProps) => {
  const originalConsoleError = console.error;

  console.error = (...args: any[]) => {
    if (/defaultProps/.test(args[0])) return;
    originalConsoleError(...args);
  };

  return <UserAvatar size={size} name={name} src={src} />;
};

export default UserAvatarWrapper;
