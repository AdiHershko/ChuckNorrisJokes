import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginVertical: 5,
    width: '80%',
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    fontSize: 22,
    marginTop: 25,
  },
});
export default styles;
