import { StyleSheet } from "react-native";

import theme from "@/ui/common/styles/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: "center",
  },
  label: {
    color: theme.colors.white,
  },

  fillContainer: {
    alignSelf: "stretch",
  },

  // -- variants --
  simple: {
    backgroundColor: theme.colors.white,
    borderRadius: 30,
    paddingHorizontal: 16,
  },

  // -- colors --
  primary: {
    backgroundColor: theme.colors.verdigris,
  },
});

export default styles;
