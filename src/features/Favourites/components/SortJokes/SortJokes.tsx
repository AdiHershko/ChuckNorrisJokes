import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SORTING_TYPE} from '../../../../actions/sortActions';
import {applyAppiumLabel} from '../../../../services/appiumService';
import styles from './style';

const SortJokes = ({close, sortJokes}) => {
  return (
    <View>
      <View style={styles.closeModalContainer}>
        <TouchableOpacity
          onPress={close}
          {...applyAppiumLabel('SortJokes-close', true)}>
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
          onPress={() => sortJokes(SORTING_TYPE.TOP_TO_BOTTOM)}
          {...applyAppiumLabel('SortJokes-sort-top', true)}>
          <Text style={styles.sortOptionText}>Funny - Top to Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortOption}
          onPress={() => sortJokes(SORTING_TYPE.BOTTOM_TO_TOP)}
          {...applyAppiumLabel('SortJokes-sort-bottom', true)}>
          <Text style={styles.sortOptionText}>Funny - Bottom to Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SortJokes;
