import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreenStNav from './src/screens/HomeScreenStNav';
import Details from './src/screens/Details';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreenStNav} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
