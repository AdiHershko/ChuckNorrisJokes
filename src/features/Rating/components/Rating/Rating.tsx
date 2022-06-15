import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomModal from '../../../../components/BottomModal';
import RateJoke from '../RateJoke';
import styles from './style';
import {useDispatch} from 'react-redux';
import {addToFavourites} from '../../../../actions/favouritesActions';

const Rating = ({containerStyle = null, joke}) => {
  //TODO: extract all favourites actions into outside service/custom hook to keep component clear.
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setRating(joke.rating);
  }, [joke]);

  const handleStarPress = (num: number) => {
    setRating(num);
    dispatch(addToFavourites({...joke, rating: num}));
    setIsModalVisible(false);
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.rateButton}>
          <Icon name="heart" style={styles.heart} />
        </View>
      </TouchableOpacity>
      <BottomModal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <RateJoke
          close={() => setIsModalVisible(false)}
          handleStarPress={handleStarPress}
          rating={rating}
        />
      </BottomModal>
    </View>
  );
};

export default Rating;
