import { styles } from "@/styles";
import { Plus } from "lucide-react-native";
import React, {  useEffect, useMemo } from "react";
import { Pressable } from "react-native";
import debounce from "lodash.debounce";
type Props = {
  addUser: () => Promise<void>;
};

const FabButtonComponent = ({ addUser }: Props) => {
  const debouncedAddUser = useMemo(
    () =>
      debounce(async() => {
        await addUser();
      }, 500),
    [addUser]
  );

  useEffect(() => {
    return () => {
      debouncedAddUser.cancel();
    };
  }, [debouncedAddUser]);
  return (
    <Pressable style={styles.fabButton} onPress={debouncedAddUser}>
      <Plus color={"#FFF"} />
    </Pressable>
  );
};

export default FabButtonComponent;
