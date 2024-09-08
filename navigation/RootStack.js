import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CharactersScreen from '../screens/CharactersScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import ShipsScreen from '../screens/ShipsScreen';
import MoviesScreen from '../screens/MoviesScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailScreen} />
        <Stack.Screen name="Ships" component={ShipsScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
