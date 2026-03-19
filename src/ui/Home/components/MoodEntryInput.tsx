import React from "react";
import { Pressable, View } from "react-native";

import MoodFaceIcon from "./MoodFaceIcon";
import {
  FEELINGS,
  getMoodSelectionBackgroundColor,
  getSelectedMoodHighlightBackgroundColor,
  getSelectedMoodHighlightColor,
  MOOD_COLORS,
  MOOD_SCORES,
} from "../home.constants";
import { Feeling, MoodScore } from "../home.types";
import styles from "./MoodEntryInput.styles";
import Button from "@/ui/common/components/atoms/Button/Button";
import Text from "@/ui/common/components/atoms/Text/Text";
import theme from "@/ui/common/styles/theme";

type MoodEntryInputProps = {
  selectedMood: MoodScore | null;
  selectedFeelings: Feeling[];
  onMoodSelect: (moodScore: MoodScore) => void;
  onFeelingToggle: (feeling: Feeling) => void;
  onAddEntry: () => void;
  isAddEntryDisabled: boolean;
};

const MoodEntryInput = ({
  selectedMood,
  selectedFeelings,
  onMoodSelect,
  onFeelingToggle,
  onAddEntry,
  isAddEntryDisabled,
}: MoodEntryInputProps) => {
  const selectedFeelingHighlightColor = getSelectedMoodHighlightColor(selectedMood);

  return (
    <View style={styles.entryCard}>
      <View style={styles.section}>
        <Text variant="primary600" style={styles.sectionLabel}>
          What's your mood today?
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.moodButtonsRow}>
          {MOOD_SCORES.map((moodScore) => {
            const isSelected = selectedMood === moodScore;

            return (
              <Pressable
                key={moodScore}
                onPress={() => onMoodSelect(moodScore)}
                style={[
                  styles.moodButton,
                  {
                    borderColor: isSelected ? MOOD_COLORS[moodScore] : theme.colors.grey,
                    backgroundColor: getMoodSelectionBackgroundColor(moodScore, isSelected),
                  },
                ]}
              >
                <MoodFaceIcon moodScore={moodScore} color={MOOD_COLORS[moodScore]} size={18} />
                <Text variant="primary600" style={styles.moodButtonLabel}>
                  {moodScore}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="primary600" style={styles.sectionLabel}>
          Feelings
        </Text>
        <View style={styles.feelingButtonsRow}>
          {FEELINGS.map((feeling) => {
            const isSelected = selectedFeelings.includes(feeling);

            return (
              <Button
                key={feeling}
                variant="simple"
                color={getSelectedMoodHighlightBackgroundColor(selectedMood, isSelected)}
                textColor={theme.colors.black}
                borderColor={isSelected ? selectedFeelingHighlightColor : theme.colors.grey}
                borderRadius="large"
                onPress={() => onFeelingToggle(feeling)}
                containerStyle={[styles.feelingButton, isSelected && styles.feelingButtonSelected]}
              >
                {feeling}
              </Button>
            );
          })}
        </View>
      </View>

      <Button
        variant="simple"
        color={theme.colors.black}
        borderRadius="medium"
        onPress={onAddEntry}
        fillContainer
        disabled={isAddEntryDisabled}
      >
        Add entry
      </Button>
    </View>
  );
};

export default MoodEntryInput;
