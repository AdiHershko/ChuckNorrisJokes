import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import FavouriteJoke from '../../../../components/FavouriteJoke';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomModal from '../../../../components/BottomModal';
import SortJokes from '../SortJokes';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromFavourites} from '../../../../actions/favouritesActions';
import {RootState} from '../../../../reducers/rootReducer';
import {changeSortingType, SORTING_TYPE} from '../../../../actions/sortActions';

const Favourites = ({navigation}) => {
  const [sortedJokes, setSortedJokes] = useState<IJoke[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const favourites = useSelector<RootState, IJoke[]>(
    state => state.favouritesState.favourites,
  );
  const sortingType = useSelector<RootState, SORTING_TYPE>(
    state => state.sortingTypeState.sortingType,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: '',
      headerRight: () => (
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Icon name="sort" style={styles.sort} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setSortedJokes([...favourites]);
  }, [favourites]);

  useEffect(() => {
    sortJokes(sortingType);
  }, [sortingType]);

  const removeJokeFromFavourites = (joke: IJoke) => {
    dispatch(removeFromFavourites(joke));
  };

  const sortJokes = (method: SORTING_TYPE) => {
    switch (method) {
      case SORTING_TYPE.TOP_TO_BOTTOM:
        setSortedJokes([...favourites.sort((a, b) => b.rating - a.rating)]);
        break;
      case SORTING_TYPE.BOTTOM_TO_TOP:
        setSortedJokes([...favourites.sort((a, b) => a.rating - b.rating)]);
        break;
      default:
        break;
    }
  };

  const sortFavourites = (method: SORTING_TYPE) => {
    dispatch(changeSortingType(method));
  };

  const renderFavouriteJokeItem = (item: IJoke) => {
    return (
      <FavouriteJoke
        joke={item}
        removeJokeFromFavourites={removeJokeFromFavourites}
      />
    );
  };

  const renderEmptyFavourites = () => {
    return <Text>There are no favourites!</Text>;
  };

  return (
    <View>
      <FlatList
        data={sortedJokes}
        renderItem={({item}) => renderFavouriteJokeItem(item)}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyFavourites}
      />
      <BottomModal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <SortJokes
          close={() => setIsModalVisible(false)}
          sortJokes={sortFavourites}
        />
      </BottomModal>
    </View>
  );
};

export default Favourites;
