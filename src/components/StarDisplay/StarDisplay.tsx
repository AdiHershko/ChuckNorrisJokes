import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import starRatings from '../../constants/starRatings';
import {applyAppiumLabel} from '../../services/appiumService';

const StarDisplay = ({onPress, rating, enabled, listContainerStyle}) => {
  const renderStarItem = (item: number) => {
    return (
      <TouchableOpacity
        disabled={!enabled}
        onPress={() => onPress(item)}
        {...applyAppiumLabel('StarDisplay-star-button', true)}>
        <Icon
          name={item > rating || rating === 0 ? 'star-o' : 'star'}
          style={styles.star}
          key={item}
          {...applyAppiumLabel('StarDisplay-star-icon', false)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.starsContainer}>
      <FlatList
        horizontal={true}
        data={starRatings}
        renderItem={({item}) => renderStarItem(item)}
        keyExtractor={item => item.toString()}
        contentContainerStyle={listContainerStyle}
      />
    </View>
  );
};

export default StarDisplay;
