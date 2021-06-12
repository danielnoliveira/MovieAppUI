/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import MovieScreen from './src/Screens/MovieScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const FirstStack = ({navigation}) => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Home">
        {props => <HomeScreen {...props} leftMenu={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="Movie" component={MovieScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={FirstStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
