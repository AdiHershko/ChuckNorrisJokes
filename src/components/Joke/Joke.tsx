import React, {useEffect, useRef} from 'react';
import {Text, Platform, Animated} from 'react-native';
import styles from './style';

const Joke = ({text, animated}) => {
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
          {fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace'},
        ]}>
        {text}
      </Text>
    </Animated.View>
  );
};

export default Joke;
