export type MoodScore = 1 | 2 | 3 | 4 | 5;

export type Feeling = "Meh" | "Content" | "Happy" | "Frustrated";

export type MoodEntry = {
  id: number;
  moodScore: MoodScore;
  feelings: Feeling[];
};

export type FeelingSummary = {
  feeling: Feeling;
  total: number;
  moodCounts: Record<MoodScore, number>;
};
