import React from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import useHomeController from "./home.controller";

import styles from "./home.styles";
import Text from "@/ui/common/components/atoms/Text/Text";

const HomeScreen = () => {
  const { isLoading } = useHomeController();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator style={styles.activityIndicator} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text variant="primary500" style={styles.title}>
          Home
        </Text>
        <Text variant="primary300" style={styles.welcomeText}>
          Welcome to the Bearable Tech test
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
