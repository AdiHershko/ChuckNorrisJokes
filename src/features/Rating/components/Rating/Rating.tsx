import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IJoke} from '../../../../models/IJoke';
import BottomModal from '../../../../components/BottomModal/BottomModal';
import RateJoke from '../RateJoke/RateJoke';
import styles from './style';
import useStorage from '../../../../hooks/useStorage';

const Rating = ({style = null, joke}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const {getFromStorage, saveToStorage, containsKey} = useStorage();
  useEffect(() => {
    setRating(joke.rating);
  }, [joke]);

  const favourites: IJoke[] = containsKey('favourites')
    ? (getFromStorage('favourites') as IJoke[])
    : [];

  const handleStarPress = (num: number) => {
    setRating(num);
    joke.rating = num;
    const otherFavourites = favourites.filter(val => val.id !== joke.id);
    saveToStorage('favourites', [...otherFavourites, joke]);
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

export default Rating;
