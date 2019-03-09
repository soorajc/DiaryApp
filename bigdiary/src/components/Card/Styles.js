import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardBackground: {
    width: width * 0.90,
    alignSelf: 'center',
    height: 0.30 * height,
    marginTop: '3%',
    marginBottom: '3%',
  },
  headerView: {
    width: '100%',
    height: 0.20 * height,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#4267B2',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: 0.10 * height,
    backgroundColor: 'white',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontFamily: 'TragicMarker',
    fontSize: height * 0.04,
    textAlign: 'center',
    width: '80%',
  },
  date: {
    color: 'white',
    fontFamily: 'TragicMarker',
    margin: '3%',
    fontSize: height * 0.03,
  },
  day: {
    color: 'white',
    fontFamily: 'TragicMarker',
    fontSize: height * 0.03,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
