import React from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, View } from "react-native";
import useHomeController from "./home.controller";

import styles from "./home.styles";
import MoodEntryInput from "../../components/MoodEntryInput";
import MoodEntriesList from "../../components/MoodEntriesList";

const HomeScreen = () => {
  const {
    addMoodEntry,
    feelingSummaries,
    isLoading,
    maxFeelingCount,
    selectedFeelings,
    selectedMood,
    setSelectedMood,
    toggleFeeling,
  } = useHomeController();

  const isAddEntryDisabled = !selectedMood || selectedFeelings.length === 0;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <MoodEntryInput
          selectedMood={selectedMood}
          selectedFeelings={selectedFeelings}
          onMoodSelect={setSelectedMood}
          onFeelingToggle={toggleFeeling}
          onAddEntry={addMoodEntry}
          isAddEntryDisabled={isAddEntryDisabled}
        />
        <MoodEntriesList
          feelingSummaries={feelingSummaries}
          maxFeelingCount={maxFeelingCount}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
