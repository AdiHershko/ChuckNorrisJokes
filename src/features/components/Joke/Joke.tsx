import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';

const Joke = ({text}) => {
  return (
    <Text
      style={[
        styles.jokeText,
        {fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace'},
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  jokeText: {
    fontSize: 20,
  },
});

export default Joke;
