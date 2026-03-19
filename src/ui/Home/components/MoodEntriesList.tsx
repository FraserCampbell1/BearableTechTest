import React from "react";
import { View } from "react-native";

import { MOOD_COLORS, MOOD_SCORES } from "../home.constants";
import { FeelingSummary } from "../home.types";
import styles from "./MoodEntriesList.styles";
import Text from "@/ui/common/components/atoms/Text/Text";

type MoodEntriesListProps = {
  feelingSummaries: FeelingSummary[];
  maxFeelingCount: number;
};

const MoodEntriesList = ({
  feelingSummaries,
  maxFeelingCount,
}: MoodEntriesListProps) => {

  return (
      <View style={styles.chartSection}>
        {feelingSummaries.filter((summary) => summary.total > 0).map((summary) => {
          const widthPercentage = maxFeelingCount === 0 ? 0 : (summary.total / maxFeelingCount) * 100;
          const visibleMoodScores = MOOD_SCORES.filter((moodScore) => summary.moodCounts[moodScore] > 0);

          return (
            <View key={summary.feeling}>
              <Text variant="primary700" style={styles.chartLabel}>
                {summary.feeling}
              </Text>

                <View style={[styles.chartBarGroup, { width: `${widthPercentage}%` }]}>
                  <View style={styles.chartBar}>
                    {visibleMoodScores.map((moodScore, index) => {
                      const isFirst = index === 0;
                      const isLast = index === visibleMoodScores.length - 1;

                      return (
                        <View
                          key={`${summary.feeling}-${moodScore}`}
                          style={[
                            {
                              flex: summary.moodCounts[moodScore],
                              backgroundColor: MOOD_COLORS[moodScore],
                              borderTopLeftRadius: isFirst ? 12 : 0,
                              borderBottomLeftRadius: isFirst ? 12 : 0,
                              borderTopRightRadius: isLast ? 12 : 0,
                              borderBottomRightRadius: isLast ? 12 : 0,
                            },
                          ]}
                        />
                      );
                    })}
                  </View>

                  <View style={styles.chartCountBubble}>
                    <Text variant="primary700" style={styles.chartCountText}>
                      {summary.total}
                    </Text>
                  </View>
                </View>
            </View>
          );
        })}
      </View>
  );
};

export default MoodEntriesList;
