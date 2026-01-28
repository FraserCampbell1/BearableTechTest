import { StyleSheet } from "react-native";

import theme from "@/ui/common/styles/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: "center",
    borderWidth: 1,
  },

  fillContainer: {
    alignSelf: "stretch",
  },

  disabled: {
    opacity: 0.5,
  },

  // -- variants --//
  simple: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 12,
  },
  square: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  // -- border radii --//
  smallBorderRadius: {
    borderRadius: 10,
  },
  mediumBorderRadius: {
    borderRadius: 15,
  },
  largeBorderRadius: {
    borderRadius: 30,
  },
});

export default styles;
