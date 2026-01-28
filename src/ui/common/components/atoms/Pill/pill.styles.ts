import theme from "@/ui/common/styles/theme";
import { StyleSheet } from "react-native";

export const PILL_SIZE = 48;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.black,
    width: PILL_SIZE,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  label: {
    fontSize: 15,
  },
});

export default styles;
