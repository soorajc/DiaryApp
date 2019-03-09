/**
 * Input Form Component
 */

import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Dimensions,
  Alert,
} from 'react-native';

import Styles from './Styles';

import DiaryDatabase from '../../service/Database';

type Props = {};
let data = '';

const { width } = Dimensions.get('window');

export default class InputForm extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      entries: '',
      title: '',
      description: '',
      date: '',
    };
  }

  componentWillMount() {
    const { state } = this.props.navigation;
    data = state.params.data;
    if (data) {
      this.setState({
        title: data.title,
        date: data.date,
        description: data.description,
      });
    }
  }

  validateData() {
    if ((this.state.description === '') || (this.state.title === '') || (this.state.date === '')) {
      Alert.alert('Message', 'Fill all the fields to continue');
    } else {
      ToastAndroid.showWithGravity(
        'Refreshing List...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      if (data) {
        this.updateData(data.id);
      } else {
        this.insertData();
      }
    }
  }

  updateData(itemId) {
    const item = DiaryDatabase.DiaryEntry.get({ id: itemId });
    DiaryDatabase.DiaryEntry.update(item.id,
      { title: this.state.title,
        description: this.state.description,
      },
    );
    this.resetNavigation();
  }

  insertData() {
    const item = DiaryDatabase.DiaryEntry.get({ date: this.state.date });
    if (item) {
      Alert.alert('Message', 'An entry for this date already exists try updating it instead of adding new entry');
    } else {
      DiaryDatabase.DiaryEntry.insert({
        title: this.state.title,
        date: this.state.date,
        description: this.state.description,
      }, true);
      this.props.navigation.goBack();
    }
  }

  resetNavigation() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }


  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.headerView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={[Styles.iconContainer, { borderRightWidth: 1 }]}
          >
            <Icon size={0.05 * width} name="chevron-left" />
          </TouchableOpacity>
          <View style={Styles.paddingView} />
          <TouchableOpacity
            onPress={() => this.validateData()}
            style={[Styles.iconContainer, { borderLeftWidth: 1 }]}
          >
            <Icon size={0.05 * width} name="check-circle" />
          </TouchableOpacity>
        </View>
        <View style={Styles.formContainer}>
          <DatePicker
            style={Styles.datePicker}
            date={this.state.date}
            mode="date"
            placeholder="Select Date"
            format="DD-MM-YYYY"
            minDate="2016-05-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={date => this.setState({ date })}
            customStyles={{
              dateInput: Styles.dateInput,
              placeholderText: Styles.dateString,
              dateText: Styles.dateString,
            }}
          />
          <TextInput
            style={Styles.titleInput}
            onChangeText={title => this.setState({ title })}
            numberOfLines={10}
            multiline
            value={this.state.title}
            placeholder="Enter your title"
            placeholderTextColor="black"
          />
          <TextInput
            style={Styles.descriptionInput}
            onChangeText={description => this.setState({ description })}
            numberOfLines={20}
            multiline
            value={this.state.description}
            placeholder="Write something here..."
            placeholderTextColor="black"
          />
        </View>
      </View>
    );
  }
}

InputForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
