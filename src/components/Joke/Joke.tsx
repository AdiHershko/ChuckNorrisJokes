import React from 'react';
import {Text, Platform} from 'react-native';
import styles from './style';

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

export default Joke;
