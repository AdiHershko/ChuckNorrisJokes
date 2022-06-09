import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const StarDisplay = ({onPress, rating, enabled, listContainerStyle}) => {
  const ratings = [1, 2, 3, 4, 5];

  const renderStarItem = (item: number) => {
    return (
      <TouchableOpacity disabled={!enabled} onPress={() => onPress(item)}>
        <Icon
          name={item > rating || rating === 0 ? 'star-o' : 'star'}
          style={styles.star}
          key={item}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.starsContainer}>
      <FlatList
        horizontal={true}
        data={ratings}
        renderItem={({item}) => renderStarItem(item)}
        keyExtractor={item => item.toString()}
        contentContainerStyle={listContainerStyle}
      />
    </View>
  );
};

export default StarDisplay;
