/**
 * Diary App V1
 */

 import React from 'react';
 import {
   StackNavigator,
 } from 'react-navigation';
 import {
   Easing,
   Animated,
 } from 'react-native';

import SplashScreen from './src/components/SplashScreen/SplashScreen';

const transitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const App = StackNavigator({
  SplashScreen: { screen: SplashScreen },
}, {
  transitionConfig,
  headerMode: 'none',
});

export default App;
