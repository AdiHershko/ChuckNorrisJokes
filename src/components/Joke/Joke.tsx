import React, {useEffect, useRef} from 'react';
import {Text, Platform, Animated} from 'react-native';
import styles from './style';

interface Joke_I {
  text: string;
  animated: boolean;
}

const Joke = ({text, animated}: Joke_I) => {
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animValue.setValue(0);
    Animated.timing(animValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  });

  return (
    <Animated.View style={animated && {transform: [{scale: animValue}]}}>
      <Text
        style={[
          styles.jokeText,
          //TODO: use platform.select in styles file
          {fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace'},
        ]}>
        {text}
      </Text>
    </Animated.View>
  );
};

export default Joke;
