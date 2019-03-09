import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
    flex: 1,
  },
  headerView: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  paddingView: {
    width: '70%',
  },
  contentView: {
    flex: 0.9,
  },
  dateView: {
    height: height * 0.30,
    width: width,
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: '#4267B2',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    textAlign: 'center',
    fontFamily: 'TragicMarker',
    fontSize: height * 0.06,
    width: '80%',
    color: 'white',
  },
  titleView: {
    padding: '3%',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'TragicMarker',
    fontSize: height * 0.04,
    lineHeight: height * 0.042,
    color: '#4267B2',
  },
  descriptionView: {
    padding: '3.5%',
    width: '100%',
    backgroundColor: 'white',
  },
  description: {
    textAlign: 'justify',
    fontFamily: 'TragicMarker',
    fontSize: height * 0.03,
    lineHeight: height * 0.042,
    color: 'black',
  },
});

export default styles;
