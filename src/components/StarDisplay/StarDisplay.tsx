import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarDisplay = ({onPress, rating, enabled}) => {
  return (
    <View style={{marginTop: 20, flexDirection: 'row'}}>
      {[1, 2, 3, 4, 5].map(num => (
        <TouchableOpacity disabled={!enabled} onPress={() => onPress(num)}>
          <Icon
            name={num > rating || rating === 0 ? 'star-o' : 'star'}
            style={styles.star}
            key={num}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    fontSize: 24,
    padding: 5,
  },
});

export default StarDisplay;
