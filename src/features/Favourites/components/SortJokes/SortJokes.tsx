import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const SortJokes = ({close, sortJokes}) => {
  return (
    <View>
      <View style={styles.closeModalContainer}>
        <TouchableOpacity onPress={() => close()}>
          <Icon name="close" style={styles.close} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sort Jokes</Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <View style={{borderBottomWidth: 1}}></View>
        <TouchableOpacity
          style={styles.sortOption}
          onPress={() => sortJokes('topFirst')}>
          <Text style={styles.sortOptionText}>Funny - Top to Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortOption}
          onPress={() => sortJokes('bottomFirst')}>
          <Text style={styles.sortOptionText}>Funny - Bottom to Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SortJokes;
