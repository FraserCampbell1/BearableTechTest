import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import Impacts from "../legacy/screens/Impacts";
import { HomeIcon } from "./Home/components/HomeIcon";
import { ImpactsIcon } from "./Impacts/components/ImpactsIcon";
import HomeScreen from "./Home/screens/Home/Home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Montserrat-Black": require("@/assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("@/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("@/assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Light": require("@/assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("@/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("@/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("@/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#C0BFC5",
          tabBarLabelStyle: {
            fontFamily: "Montserrat-Regular",
            width: "100%",
          },
          headerTitleStyle: {
            fontFamily: "Montserrat-SemiBold",
            width: Dimensions.get("window").width,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <HomeIcon fillColor={color} />,
          }}
        />
        <Tab.Screen
          name="Impacts"
          component={Impacts}
          options={{
            headerShown: true,
            tabBarIcon: ({ color }) => <ImpactsIcon strokeColor={color} />,
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
