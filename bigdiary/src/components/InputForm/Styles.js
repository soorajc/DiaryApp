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
  headerView: {
    flex: 0.1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  iconContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingView: {
    width: '70%',
  },
  formContainer: {
    flex: 0.9,
  },
  datePicker: {
    height: '10%',
    width: '80%',
    alignSelf: 'center',
    margin: '3%',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  dateInput: {
    borderColor: 'transparent',
  },
  dateString: {
    color: 'black',
    fontFamily: 'TragicMarker',
  },
  titleInput: {
    height: '20%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: '3%',
    borderRadius: 5,
    fontFamily: 'TragicMarker',
    textAlignVertical: 'top',
    padding: '4%',
    lineHeight: height * 0.02,
    fontSize: height * 0.03,
  },
  descriptionInput: {
    height: '50%',
    borderColor: 'gray',
    textAlignVertical: 'top',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: '3%',
    borderRadius: 5,
    fontFamily: 'TragicMarker',
    padding: '4%',
    lineHeight: 0.04 * height,
    fontSize: height * 0.03,
  },
});

export default styles;
