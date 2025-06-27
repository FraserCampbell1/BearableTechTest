import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import styles from "./text.styles";

type TextProps = {
  variant:
    | "primary800"
    | "primary700"
    | "primary600"
    | "primary500"
    | "primary400"
    | "primary300";
  style?: StyleProp<TextStyle>;
} & RNTextProps;

const Text = ({ variant, style, children, ...textProps }: TextProps) => {
  return (
    <RNText style={[styles[variant], style]} {...textProps}>
      {children}
    </RNText>
  );
};

export default Text;
