import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenOptionsObjectCardboardHeader } from '../utilities/StackScreenOptionsObjectCardboardHeader';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const HomeNavigationScreen = () => {
    return (
          <Stack.Navigator 
            initialRouteName="HomeScreen">
            <Stack.Screen 
                name="The Toy Shed" 
                component={HomeScreen}
                options={StackScreenOptionsObjectCardboardHeader()}
            />
          </Stack.Navigator>
      );
};

export default HomeNavigationScreen;
