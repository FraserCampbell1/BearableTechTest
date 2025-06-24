import { StyleSheet } from "react-native";

import theme from "@/ui/common/styles/theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  label: {
    color: theme.colors.white,
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
