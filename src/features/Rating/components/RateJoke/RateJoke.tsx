import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarDisplay from '../../../../components/StarDisplay/StarDisplay';
import styles from './style';

const RateJoke = ({setIsModalVisible, handleStarPress, rating}) => {
  return (
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
        listContainerStyle={{flex: 1, justifyContent: 'center'}}
      />
    </View>
  );
};

export default RateJoke;
