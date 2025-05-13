import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreenStNav from './src/screens/HomeScreenStNav';
import Details from './src/screens/Details';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenStNav} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
