import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StarDisplay from '../StarDisplay/StarDisplay';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavouriteJoke = ({joke, removeJokeFromFavourites}) => {
  return (
    <View style={styles.container}>
      <Text>{joke.text}</Text>
      <View style={styles.rowContainer}>
        <StarDisplay rating={joke.rating} />
        <TouchableOpacity onPress={() => removeJokeFromFavourites(joke.id)}>
          <Icon name="heart" style={styles.heart} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginVertical: 5,
    width: '80%',
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    fontSize: 22,
    marginTop: 25,
  },
});

export default FavouriteJoke;
