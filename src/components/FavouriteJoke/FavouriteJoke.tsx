import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import StarDisplay from '../StarDisplay';
import Icon from 'react-native-vector-icons/Ionicons';
import Joke from '../Joke';
import styles from './style';
import { applyAppiumLabel } from '../../services/appiumService';

const FavouriteJoke = ({joke, removeJokeFromFavourites}) => {
  return (
    <View style={styles.container}>
      <Joke text={joke.text} />
      <View style={styles.rowContainer}>
        <StarDisplay rating={joke.rating} />
        <TouchableOpacity
          onPress={() => removeJokeFromFavourites(joke)}
          {...applyAppiumLabel('FavouriteJoke-remove-button')}>
          <Icon name="ios-heart-dislike" style={styles.heart} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavouriteJoke;
