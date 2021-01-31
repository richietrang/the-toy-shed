// Stack Navigator Screens have a prop named options.
// This function returns options to show a cardboard header background
import { ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import React from 'react';

export function StackScreenOptionsObjectCardboardHeader() {
    return ({
        headerBackground: () => {
            return (
                <ImageBackground
                    source={require('../assets/images/ripped-brown-paper-header/ripped-brown-paper-header.png')}
                    style={{ width: '100%', height: 100 }}
                />
            );
        }, 
        headerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0);',
        },
        headerTitleStyle: {
          fontFamily: globalStyles.titleFont.fontFamily,
          fontSize: 28,
        }
    });
}
