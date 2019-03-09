/**
 * Diary App V1
 */

 import {
   StackNavigator,
 } from 'react-navigation';
 import {
   Easing,
   Animated,
 } from 'react-native';

 import SplashScreen from './src/components/SplashScreen/SplashScreen';
 import Home from './src/components/Home/Home';
 import Login from './src/components/Login/Login';
 import DetailView from './src/components/DetailView/DetailView';
 import InputForm from './src/components/InputForm/InputForm';

 const transitionConfig = () => ({
   transitionSpec: {
     duration: 0,
     timing: Animated.timing,
     easing: Easing.step0,
   },
 });

 const App = StackNavigator({
   SplashScreen: { screen: SplashScreen },
   Login: { screen: Login },
   Home: { screen: Home },
   DetailView: { screen: DetailView },
   InputForm: { screen: InputForm },
 }, {
   transitionConfig,
   headerMode: 'none',
 });

 export default App;
