import React from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import useHomeController from "./home.controller";

import styles from "./home.styles";
import Text from "@/ui/common/components/atoms/Text/Text";
import Button from "@/ui/common/components/atoms/Button/Button";

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
        <Text variant="primary300" style={styles.welcomeText}>
          Welcome to the Bearable Tech test
        </Text>

        <Button variant="simple" color="primary" onPress={() => {}}>
          Test press
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
