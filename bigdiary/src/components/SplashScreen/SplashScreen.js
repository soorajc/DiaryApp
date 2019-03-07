/**
 * Splash Screen Component
 */

import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  AsyncStorage,
  Text,
} from 'react-native';

import Styles from './Styles';

type Props = {};
export default class SplashScreen extends Component<Props> {

  componentDidMount() {
    const interval = 2000;
    // setTimeout(() => this.launchScreen(), interval);
  }

  launchScreen() {
    AsyncStorage.getItem('loginStatus', (err, result) => {
      if (result) {
        this.transitionHandler('Home');
      } else {
        this.transitionHandler('OnBoardingV1');
      }
    });
  }

  transitionHandler(key) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: key })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.appName}>
          My Diary
        </Text>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
