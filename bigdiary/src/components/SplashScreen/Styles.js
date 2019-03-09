import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4267B2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontFamily: 'TragicMarker',
    color: 'white',
    fontSize: height * 0.09,
  },
});

export default styles;
