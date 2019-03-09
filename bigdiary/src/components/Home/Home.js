/**
 * Home Screen Component
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import DiaryDatabase from '../../service/Database';
import Card from '../Card/Card';
import Styles from './Styles';

const moment = require('moment');

type Props = {};
export default class Home extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  setItems() {
    const diaryList = DiaryDatabase.DiaryEntry.data();
    const sortedDiaryList = diaryList.sort((a, b) => moment(b.date, 'DD-MM-YYYY') - moment(a.date, 'DD-MM-YYYY'));
    this.setState({ entries: sortedDiaryList });
  }

  loadData() {
    DiaryDatabase.DiaryEntry.onLoaded(() => this.setItems());
  }

  renderCard(item) {
    return (
      <Card
        item={item}
        navigation={this.props.navigation}
      />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <NavigationEvents
          onDidFocus={() => this.loadData()}
        />
        <View style={Styles.headerContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('InputForm', { data: '' })}
            style={Styles.addButton}
          >
            <Text style={Styles.addLabel}>
              Write New Story
            </Text>
            <Icon name="edit" color="black" size={20} />
          </TouchableOpacity>
        </View>
        {
          this.state.entries.length > 0
          ?
            <FlatList
              extraData={this.state}
              style={Styles.listContainer}
              contentContainerStyle={Styles.setPadding}
              removeClippedSubviews
              data={this.state.entries}
              renderItem={({ item }) => this.renderCard(item)}
            />
          :
            <View style={Styles.emptyView}>
              <Text style={Styles.emptyLabel}>
                Nothing to show...Please write something
              </Text>
            </View>
        }
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
