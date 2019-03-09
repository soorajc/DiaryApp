/**
 * Login Screen Component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';

import Styles from './Styles';

const md5 = require('md5');

type Props = {};
export default class Login extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      matchPassword: '',
    };
  }

  pinConfirmInput = React.createRef();
  pinInput = React.createRef();


  handlePinSubmit(value) {
    if (this.state.password === value) {
      const hashedPin = md5(value);
      AsyncStorage.setItem('pin', hashedPin);
      this.goToHome();
    } else {
      this.pinConfirmInput.current.shake()
        .then(() => this.setState({ matchPassword: '' }));
    }
  }

  checkPin(value) {
    const { state } = this.props.navigation;
    const pin = state.params.pin;
    if (pin === md5(value)) {
      this.goToHome();
    } else {
      this.pinInput.current.shake()
        .then(() => this.setState({ password: '' }));
    }
  }

  goToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    const { state } = this.props.navigation;
    const pinSet = state.params.pinSet;
    return (
      <View style={Styles.container}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>
            {pinSet ? 'Have a nice day!!' : 'Set Up 4 Digit Pin To Continue'}
          </Text>
        </View>
        <View style={Styles.inputView}>
          <Text style={Styles.inputLabel}>Enter Pin</Text>
          <SmoothPinCodeInput
            password
            ref={this.pinInput}
            mask="﹡"
            cellSize={36}
            codeLength={4}
            value={this.state.password}
            onFulfill={pinSet ? value => this.checkPin(value) : null}
            onTextChange={password => this.setState({ password })}
          />
          {
            this.state.password.length === 4 && !pinSet
            &&
            <View style={Styles.confirmPinView}>
              <Text style={Styles.inputLabel}>Confirm Pin</Text>
              <SmoothPinCodeInput
                password
                ref={this.pinConfirmInput}
                mask="﹡"
                cellSize={36}
                codeLength={4}
                value={this.state.matchPassword}
                onFulfill={value => this.handlePinSubmit(value)}
                autoFocus
                onTextChange={password => this.setState({ matchPassword: password })}
              />
            </View>
          }
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
