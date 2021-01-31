import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryToyScreen from './GalleryToyScreen';
import GalleryScreen from './GalleryScreen';
import { StackScreenOptionsObjectCardboardHeader } from '../utilities/StackScreenOptionsObjectCardboardHeader';


const Stack = createStackNavigator();

const GalleryNavigationScreen = () => {
    return (
          <Stack.Navigator initialRouteName="GalleryScreen">
            <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={StackScreenOptionsObjectCardboardHeader()} />
            <Stack.Screen name="GalleryToyScreen" component={GalleryToyScreen} options={StackScreenOptionsObjectCardboardHeader()} />
          </Stack.Navigator>
      );
};

export default GalleryNavigationScreen;
