import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileAccountScreen from './ProfileAccountScreen';
import ProfileSignUpScreen from './ProfileSignUpScreen';
import ProfileLoginScreen from './ProfileLoginScreen';
import { StackScreenOptionsObjectCardboardHeader } from '../utilities/StackScreenOptionsObjectCardboardHeader';

const Stack = createStackNavigator();

const ProfileNavigationScreen = () => {
    return (
          <Stack.Navigator initialRouteName="ProfileAccountScreen">
            <Stack.Screen name="ProfileAccountScreen" component={ProfileAccountScreen} options={StackScreenOptionsObjectCardboardHeader()} />
            <Stack.Screen name="ProfileSignUpScreen" component={ProfileSignUpScreen} options={StackScreenOptionsObjectCardboardHeader()} />
            <Stack.Screen name="ProfileLoginScreen" component={ProfileLoginScreen} options={StackScreenOptionsObjectCardboardHeader()} />
          </Stack.Navigator>
      );
};

export default ProfileNavigationScreen;
