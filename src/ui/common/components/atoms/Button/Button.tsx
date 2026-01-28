import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

import styles from "./button.styles";
import Text from "../Text/Text";
import theme from "@/ui/common/styles/theme";

type ButtonProps = {
  variant: "simple" | "square";
  color: string;
  textColor?: string;
  textSize?: number;
  borderColor?: string;
  borderRadius?: "small" | "medium" | "large";
  onPress: () => void;
  fillContainer?: boolean;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const Button = ({
  variant,
  color,
  textColor,
  textSize,
  borderColor,
  borderRadius,
  onPress,
  fillContainer,
  disabled,
  containerStyle,
  children,
}: ButtonProps) => (
  <Pressable
    onPress={disabled ? undefined : onPress}
    disabled={disabled}
    style={[
      styles.container,
      styles[variant],
      borderRadius && styles[`${borderRadius}BorderRadius`],
      { backgroundColor: color, borderColor: borderColor || color },
      fillContainer && styles.fillContainer,
      containerStyle,
      disabled && styles.disabled,
    ]}
  >
    <Text variant="primary500" style={{ color: textColor || theme.colors.white, fontSize: textSize }}>
      {children}
    </Text>
  </Pressable>
);

export default Button;
