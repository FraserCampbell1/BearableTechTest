import { StyleSheet } from "react-native";

import theme from "@/ui/common/styles/theme";

const styles = StyleSheet.create({
  entryCard: {
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 16,
    padding: 16,
    gap: 16,
    backgroundColor: theme.colors.greyLight,
  },
  section: {
    gap: 10,
  },
  sectionLabel: {
    fontSize: 14,
  },
  moodButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  moodButton: {
    flex: 1,
    minHeight: 64,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 8,
    backgroundColor: theme.colors.white,
  },
  moodButtonLabel: {
    fontSize: 14,
    color: theme.colors.black,
  },
  feelingButtonsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  feelingButton: {
    minWidth: 0,
  },
  feelingButtonSelected: {
    borderWidth: 2,
  },
});

export default styles;
