import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IJoke} from '../../../../models/IJoke';
import {storage} from '../../../../storage';
import StarDisplay from '../../../../components/StarDisplay/StarDisplay';
import BottomModal from '../../../../components/BottomModal/BottomModal';
import RateJoke from '../RateJoke/RateJoke';

const Rating = ({style = null, joke}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  useEffect(() => {
    setRating(joke.rating);
  }, [joke]);

  const favourites: IJoke[] = storage.contains('favourites')
    ? JSON.parse(storage.getString('favourites') as string)
    : [];

  const handleStarPress = (num: number) => {
    setRating(num);
    joke.rating = num;
    const otherFavourites = favourites.filter(val => val.id !== joke.id);
    storage.set('favourites', JSON.stringify([...otherFavourites, joke]));
    setIsModalVisible(false);
  };

  return (
    <View style={style}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.rateButton}>
          <Icon name="heart" style={styles.heart} />
        </View>
      </TouchableOpacity>
      <BottomModal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <RateJoke
          setIsModalVisible={setIsModalVisible}
          handleStarPress={handleStarPress}
          rating={rating}
        />
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  rateButton: {
    borderWidth: 2,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaaaaa',
  },
  heart: {
    fontSize: 16,
    color: 'red',
  },
});

export default Rating;
