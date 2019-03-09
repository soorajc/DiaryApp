import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  titleContainer: {
    flex: 0.30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    flex: 0.70,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputLabel: {
    fontFamily: 'TragicMarker',
    color: '#E91E63',
    fontSize: 0.04 * height,
    textAlign: 'center',
    width: '80%',
    margin: '3%',
  },
  title: {
    fontFamily: 'TragicMarker',
    color: '#4267B2',
    fontSize: 0.05 * height,
    textAlign: 'center',
    width: '80%',
  },
  confirmPinView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
