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

const Favourites = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const favourites = useSelector(state => state.favouritesState.favourites);
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

  const removeJokeFromFavourites = (joke: IJoke) => {
    dispatch(removeFromFavourites(joke));
  };

  // const sortJokes = (method: string) => {
  //   switch (method) {
  //     //TODO: this triggers unnecessary saves to storage, maybe add sotredJokes property
  //     case 'topFirst':
  //       setFavourites([...favourites.sort((a, b) => b.rating - a.rating)]);
  //       break;
  //     case 'bottomFirst':
  //       setFavourites([...favourites.sort((a, b) => a.rating - b.rating)]);
  //       break;
  //     default:
  //       break;
  //   }
  // };

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
        data={favourites}
        renderItem={({item}) => renderFavouriteJokeItem(item)}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyFavourites}
      />
      <BottomModal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <SortJokes
          close={() => setIsModalVisible(false)}
          sortJokes={() => {}}
        />
      </BottomModal>
    </View>
  );
};

export default Favourites;
