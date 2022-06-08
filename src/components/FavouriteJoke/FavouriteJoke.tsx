import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import StarDisplay from '../StarDisplay/StarDisplay';
import Icon from 'react-native-vector-icons/Ionicons';
import Joke from '../Joke/Joke';
import styles from './style';

const FavouriteJoke = ({joke, removeJokeFromFavourites}) => {
  return (
    <View style={styles.container}>
      <Joke text={joke.text} />
      <View style={styles.rowContainer}>
        <StarDisplay rating={joke.rating} />
        <TouchableOpacity onPress={() => removeJokeFromFavourites(joke.id)}>
          <Icon name="ios-heart-dislike" style={styles.heart} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavouriteJoke;
