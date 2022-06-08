import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IJoke} from '../../../../models/IJoke';
import {storage} from '../../../../storage';
import StarDisplay from '../../../../components/StarDisplay/StarDisplay';

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => setIsModalVisible(false)}>
            <Icon name="close" style={styles.close} />
          </TouchableOpacity>
          <Text style={styles.modalText}>How funny?</Text>
          <StarDisplay
            onPress={handleStarPress}
            rating={rating}
            enabled={true}
          />
        </View>
      </Modal>
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
  modalContainer: {
    height: '30%',
    marginTop: 'auto',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
  },
  closeModal: {
    alignSelf: 'flex-end',
  },
  heart: {
    fontSize: 16,
    color: 'red',
  },
  close: {
    marginHorizontal: 15,
    fontSize: 15,
  },
});

export default Rating;
