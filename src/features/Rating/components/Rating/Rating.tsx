import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomModal from '../../../../components/BottomModal';
import RateJoke from '../RateJoke';
import styles from './style';
import {useDispatch} from 'react-redux';
import {addToFavourites} from '../../../../actions/favouritesActions';
import {ModalContext} from '../../../../context/ModalContext';
import {IJoke} from '../../../../models/IJoke';
import { applyAppiumLabel } from '../../../../services/appiumService';

export interface Rating_I {
  containerStyle: any;
  joke: IJoke;
}

const Rating = ({containerStyle, joke}: Rating_I) => {
  const [rating, setRating] = useState<number>(0);
  const dispatch = useDispatch();

  const {rateJokeModalOpen, setRateJokeModalOpen} = useContext(ModalContext);

  useEffect(() => {
    setRating(joke.rating);
  }, [joke]);

  const handleStarPress = (num: number) => {
    setRating(num);
    dispatch(addToFavourites({...joke, rating: num}));
    setRateJokeModalOpen(false);
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={() => setRateJokeModalOpen(true)}
        {...applyAppiumLabel('Rating-rate-button', true)}>
        <View style={styles.rateButton}>
          <Icon name="heart" style={styles.heart} />
        </View>
      </TouchableOpacity>
      <BottomModal
        visible={rateJokeModalOpen}
        onRequestClose={() => setRateJokeModalOpen(false)}>
        <RateJoke
          close={() => setRateJokeModalOpen(false)}
          handleStarPress={handleStarPress}
          rating={rating}
        />
      </BottomModal>
    </View>
  );
};

export default Rating;
