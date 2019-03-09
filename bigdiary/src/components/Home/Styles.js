import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
    flex: 1,
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 0.9,
  },
  addButton: {
    padding: '2%',
    backgroundColor: '#DFDFDF',
    borderRadius: 5,
    flexDirection: 'row',
  },
  addLabel: {
    color: 'black',
    fontFamily: 'TragicMarker',
    marginRight: '3%',
  },
  setPadding: {
    paddingBottom: height * 0.03,
    paddingTop: height * 0.03,
  },
  emptyView: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyLabel: {
    color: 'black',
    fontFamily: 'TragicMarker',
    fontSize: height * 0.04,
    width: '80%',
    textAlign: 'center',
  },
});

export default styles;
