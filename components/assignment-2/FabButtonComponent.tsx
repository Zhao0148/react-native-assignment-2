import { styles } from "@/styles";
import { Plus } from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";

type Props = {
    userData: () => void;
};

const FabButtonComponent = ({userData}: Props) => {
  return (
    <Pressable style={styles.fabButton} onPress={userData}>
      <Plus color={"#FFF"} />
    </Pressable>
  );
};

export default FabButtonComponent;
