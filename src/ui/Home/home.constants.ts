import { Feeling, MoodScore } from "./home.types";
import theme from "@/ui/common/styles/theme";

export const FEELINGS: Feeling[] = ["Meh", "Content", "Happy", "Frustrated"];

export const MOOD_SCORES: MoodScore[] = [1, 2, 3, 4, 5];

export const MOOD_COLORS: Record<MoodScore, string> = {
  1: theme.colors.tulip,
  2: theme.colors.tangelo,
  3: theme.colors.sunrise,
  4: theme.colors.aquamarine,
  5: theme.colors.verdigris,
};

export const getMoodSelectionBackgroundColor = (moodScore: MoodScore, isSelected: boolean) =>
  isSelected ? `${MOOD_COLORS[moodScore]}18` : theme.colors.white;

export const getSelectedMoodHighlightColor = (selectedMood: MoodScore | null) =>
  selectedMood ? MOOD_COLORS[selectedMood] : theme.colors.black;

export const getSelectedMoodHighlightBackgroundColor = (selectedMood: MoodScore | null, isSelected: boolean) =>
  isSelected && selectedMood ? `${MOOD_COLORS[selectedMood]}18` : theme.colors.white;
