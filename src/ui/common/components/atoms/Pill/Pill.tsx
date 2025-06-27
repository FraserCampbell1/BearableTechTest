import { View } from "react-native";
import Text from "../Text/Text";

import styles from "./pill.styles";

type PillProps = {
  children: string;
};

const Pill = ({ children }: PillProps) => {
  return (
    <View style={styles.container}>
      <Text variant="primary600" style={styles.label}>
        {children}
      </Text>
    </View>
  );
};

export default Pill;
