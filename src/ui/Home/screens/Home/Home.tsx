import React from "react";
import { ActivityIndicator, View } from "react-native";
import useHomeController from "./home.controller";

import styles from "./home.styles";
import Text from "@/ui/common/components/atoms/Text/Text";

const HomeScreen = () => {
  const { isLoading } = useHomeController();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
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
