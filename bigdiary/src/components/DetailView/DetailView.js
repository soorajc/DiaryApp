/**
 * Details View Component
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';

import Styles from './Styles';
import CardBackgrounds from '../../config/CardBackground';

const moment = require('moment');

const { width } = Dimensions.get('window');

type Props = {};
export default class DetailView extends Component<Props> {

  render() {
    const { state } = this.props.navigation;
    const data = state.params.data;
    const day = moment(data.date, 'DD-MM-YYYY').format('dddd');
    const date = moment(data.date, 'DD-MM-YYYY').format('LL');

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
            onPress={() => this.props.navigation.navigate('InputForm', { data: data })}
            style={[Styles.iconContainer, { borderLeftWidth: 1 }]}
          >
            <Icon size={0.05 * width} name="edit" />
          </TouchableOpacity>
        </View>
        <View style={Styles.contentView}>
          <ScrollView>
            <ImageBackground
              source={CardBackgrounds[day]}
              style={Styles.dateView}
              resizeMode="stretch"
            >
              <View style={Styles.overlay}>
                <Text style={Styles.date}>
                  {
                    day
                    +
                    ' '
                    +
                    date
                  }
                </Text>
              </View>
            </ImageBackground>
            <View style={Styles.titleView}>
              <Text style={Styles.title}>
                {data.title}
              </Text>
            </View>
            <View style={Styles.descriptionView}>
              <Text style={Styles.description}>
                {data.description}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

DetailView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
