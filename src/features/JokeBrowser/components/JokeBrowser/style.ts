import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  jokeContainer: {
    marginTop: 40,
    width: 300,
    height: 200,
  },
  button: {
    alignItems: 'center',
    marginTop: 100,
    borderWidth: 2,
    borderRadius: 5,
    borderBottomWidth: 4,
    padding: 5,
  },
  ratingContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default styles;
