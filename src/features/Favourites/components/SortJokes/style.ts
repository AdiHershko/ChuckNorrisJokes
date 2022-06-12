import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    height: '30%',
    marginTop: 'auto',
    backgroundColor: '#ffffff',
  },
  closeModalContainer: {
    alignItems: 'flex-end',
    margin: 3,
  },
  header: {
    alignItems: 'center',
    padding: 5,
  },
  headerText: {
    fontSize: 20,
  },
  close: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  sortOption: {
    borderBottomWidth: 1,
    padding: 10,
  },
  sortOptionText: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default styles;
