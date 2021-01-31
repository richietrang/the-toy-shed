import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { globalStyles } from './src/styles/globalStyles';
import HomeNavigationScreen from './src/pages/HomeNavigationScreen';
import SearchNavigationScreen from './src/pages/SearchNavigationScreen';
import GalleryNavigationScreen from './src/pages/GalleryNavigationScreen';
import ProfileNavigationScreen from './src/pages/ProfileNavigationScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
      <ImageBackground source={require('./src/assets/images/nav-bar/nav-bar.png')} style={styles.bottomTabBackgroundImage}>
          </ImageBackground>
          <Tab.Navigator  tabBarOptions={{
            labelPosition: 'below-icon',
            showIcon: true,
            tabStyle: {
              height: 50
            },
            style: {
              position: 'absolute',
              bottom: 0,
              elevation: 0,
              zIndex: 10,
              height: globalStyles.bottomTabHeight.height - 10,
            }
          }}>
            <Tab.Screen 
              name="Home" 
              component={HomeNavigationScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image 
                      // The tongue graphic in the active home icon is slightly taller
                      style={{height: 36, width: 32}} 
                      source={ focused ? require('./src/assets/images/home-icon-active/home-icon-active.png') :
                        require('./src/assets/images/home-icon-inactive/home-icon-inactive.png')
                      }/>
                  );
                }
              }}
            />
            <Tab.Screen 
              name="Search" 
              component={SearchNavigationScreen} 
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image 
                      style={{height: 32, width: 32}} 
                      source={ focused ? require('./src/assets/images/search-icon-active/search-icon-active.png') :
                        require('./src/assets/images/search-icon-inactive/search-icon-inactive.png')
                      }/>
                  );
                }
              }}
            />
            <Tab.Screen 
              name="Gallery" 
              component={GalleryNavigationScreen} 
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image 
                      style={{height: 27, width: 31}} 
                      source={ focused ? require('./src/assets/images/gallery-icon-active/gallery-icon-active.png') :
                        require('./src/assets/images/gallery-icon-inactive/gallery-icon-inactive.png')
                      }/>
                  );
                }
              }}
            />
            <Tab.Screen 
              name="Profile" 
              component={ProfileNavigationScreen} 
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image 
                      style={{height: 32, width: 32}} 
                      source={ focused ? require('./src/assets/images/profile-icon-active/profile-icon-active.png') :
                        require('./src/assets/images/profile-icon-inactive/profile-icon-inactive.png')
                      }/>
                  );
                }
              }}
            />
          </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

// MyTheme is the only style property for NavigationContainer.
// The NavigationContainer is transparent to have a background image
const MyTheme = {
  dark: false,
  colors: {
    primary: globalStyles.primaryColor.color,
    background: 'rgba(0, 0, 0, 0)',
    card: 'rgba(0, 0, 0, 0)',
    text: globalStyles.primaryColor.color,
    border: 'rgba(0, 0, 0, 0)',
  },
};

const styles = StyleSheet.create({
  bottomTabBackgroundImage: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: globalStyles.bottomTabHeight.height,
    zIndex: -10,
  }
});

export default App;
