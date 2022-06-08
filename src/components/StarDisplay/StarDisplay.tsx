import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

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

export default StarDisplay;
