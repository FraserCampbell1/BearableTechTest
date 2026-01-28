import { StyleProp, View, ViewStyle } from "react-native";
import Text from "../Text/Text";

import styles from "./pill.styles";

type PillProps = {
  children: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Pill = ({ children, containerStyle }: PillProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text variant="primary600" style={styles.label}>
        {children}
      </Text>
    </View>
  );
};

export default Pill;
