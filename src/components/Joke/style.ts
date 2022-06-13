import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  jokeText: {
    fontSize: 20,
    ...Platform.select({
      ios: {
        fontFamily: 'Courier New',
      },
      android: {
        fontFamily: 'monospace',
      },
    }),
  },
});
export default styles;
