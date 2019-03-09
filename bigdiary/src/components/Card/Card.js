/**
 * Card Component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import CardBackgrounds from '../../config/CardBackground';
import Styles from './Styles';

const moment = require('moment');

type Props = {};
export default class Card extends Component<Props> {

  showDetails(item) {
    this.props.navigation.navigate('DetailView', { data: item });
  }

  render() {
    const item = this.props.item;
    const day = moment(item.date, 'DD-MM-YYYY').format('dddd');
    const date = moment(item.date, 'DD-MM-YYYY').format('LL');
    return (
      <TouchableOpacity
        onPress={() => this.showDetails(item)}
        style={Styles.cardBackground}
      >
        <ImageBackground
          source={CardBackgrounds[day]}
          resizeMode="stretch"
          borderRadius={5}
          style={Styles.headerView}
        >
          <View style={Styles.overlay}>
            <Text style={Styles.date}>{date}</Text>
            <Text style={Styles.day}>{day}</Text>
          </View>
        </ImageBackground>
        <View style={Styles.titleContainer}>
          <Text
            numberOfLines={2}
            style={Styles.title}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Card.defaultProps = {
  item: '',
};
