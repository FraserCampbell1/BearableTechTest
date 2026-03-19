import { StyleSheet } from "react-native";

import theme from "@/ui/common/styles/theme";

const styles = StyleSheet.create({
  chartSection: {
    paddingTop: 8,
  },
  chartLabel: {
    fontSize: 13,
    color: theme.colors.black,
  },
  chartBarGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  chartBar: {
    flex: 1,
    minWidth: 0,
    height: 16,
    flexDirection: "row",
    overflow: "hidden",
  },
  chartCountBubble: {
    minWidth: 48,
    height: 30,
    marginLeft: -10,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: theme.colors.black,
    borderRadius: 13,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  chartCountText: {
    fontSize: 15,
    color: theme.colors.black,
  },
});

export default styles;
