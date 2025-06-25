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
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="primary500" style={styles.title}>
        Home
      </Text>
      <Text variant="primary300" style={styles.welcomeText}>
        Welcome to the Bearable Tech test
      </Text>
    </View>
  );
};

export default HomeScreen;
