import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Home } from './Home/screens/Home';
import Impacts from '../legacy/screens/Impacts';
import { HomeIcon } from './Home/components/HomeIcon';
import { ImpactsIcon } from './Impacts/components/ImpactsIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#C0BFC5',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
