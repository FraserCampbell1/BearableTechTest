import theme from "@/ui/common/styles/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.black,

    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  label: {
    fontSize: 15,
  },
});

export default styles;
