import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import { StackScreenOptionsObjectCardboardHeader } from '../utilities/StackScreenOptionsObjectCardboardHeader';


const Stack = createStackNavigator();

const SearchNavigationScreen = () => {
    return (
          <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={StackScreenOptionsObjectCardboardHeader()} />
          </Stack.Navigator>
      );
};

export default SearchNavigationScreen;
