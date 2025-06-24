import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

import styles from "./button.styles";
import Text from "../Text/Text";

type ButtonProps = {
  variant: "simple";
  color: "primary";
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const Button = ({
  variant,
  color,
  onPress,
  containerStyle,
  children,
}: ButtonProps) => (
  <Pressable
    onPress={onPress}
    style={[styles.container, styles[variant], styles[color], containerStyle]}
  >
    <Text variant="primary500" style={styles.label}>
      {children}
    </Text>
  </Pressable>
);

export default Button;
