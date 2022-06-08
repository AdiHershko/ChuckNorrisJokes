import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Joke = ({text}) => {
  return <Text style={styles.jokeText}>{text}</Text>;
};

const styles = StyleSheet.create({
  jokeText: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
});

export default Joke;
