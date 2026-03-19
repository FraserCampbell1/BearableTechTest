import { useMemo, useState } from "react";
import { FEELINGS, MOOD_SCORES } from "../../home.constants";
import { Feeling, FeelingSummary, MoodEntry, MoodScore } from "../../home.types";

const createEmptyMoodCounts = (): Record<MoodScore, number> => ({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
});

const useHomeController = () => {
  const [isLoading] = useState(false);
  const [selectedMood, setSelectedMood] = useState<MoodScore | null>(null);
  const [selectedFeelings, setSelectedFeelings] = useState<Feeling[]>([]);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

  const toggleFeeling = (feeling: Feeling) => {
    setSelectedFeelings((currentFeelings) =>
      currentFeelings.includes(feeling)
        ? currentFeelings.filter((currentFeeling) => currentFeeling !== feeling)
        : [...currentFeelings, feeling],
    );
  };

  const addMoodEntry = () => {
    if (!selectedMood || selectedFeelings.length === 0) {
      return;
    }

    setMoodEntries((currentEntries) => [
      {
        id: Date.now(),
        moodScore: selectedMood,
        feelings: selectedFeelings,
      },
      ...currentEntries,
    ]);

    setSelectedMood(null);
    setSelectedFeelings([]);
  };

  const feelingSummaries = useMemo<FeelingSummary[]>(
    () =>
      FEELINGS.map((feeling) => {
        const moodCounts = createEmptyMoodCounts();

        moodEntries.forEach((entry) => {
          if (!entry.feelings.includes(feeling)) {
            return;
          }

          moodCounts[entry.moodScore] += 1;
        });

        const total = MOOD_SCORES.reduce((sum, moodScore) => sum + moodCounts[moodScore], 0);

        return {
          feeling,
          total,
          moodCounts,
        };
      }).sort((leftSummary, rightSummary) => rightSummary.total - leftSummary.total),
    [moodEntries],
  );

  const maxFeelingCount = useMemo(
    () => Math.max(...feelingSummaries.map((summary) => summary.total), 0),
    [feelingSummaries],
  );

  return {
    addMoodEntry,
    feelingSummaries,
    isLoading,
    maxFeelingCount,
    selectedFeelings,
    selectedMood,
    toggleFeeling,
    setSelectedMood,
  };
};

export default useHomeController;
