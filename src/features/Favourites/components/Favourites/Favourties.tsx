import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import FavouriteJoke from '../../../../components/FavouriteJoke';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomModal from '../../../../components/BottomModal';
import SortJokes from '../SortJokes';
import styles from './style';
import useStorage from '../../../../hooks/useStorage';

const Favourites = ({navigation}) => {
  const [favourites, setFavourites] = useState<IJoke[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {saveToStorage, getFromStorage} = useStorage();

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
    const favouriteJokes: IJoke[] = getFromStorage('favourites') as IJoke[];
    setFavourites(favouriteJokes ? favouriteJokes : []);
  }, []);

  useEffect(() => {
    saveToStorage('favourites', favourites);
  }, [favourites]);

  const removeJokeFromFavourites = (id: string) => {
    const filteredFavourites = favourites.filter(joke => joke.id !== id);
    setFavourites([...filteredFavourites]);
  };

  const sortJokes = (method: string) => {
    switch (method) {
      case 'topFirst':
        setFavourites([...favourites.sort((a, b) => b.rating - a.rating)]);
        break;
      case 'bottomFirst':
        setFavourites([...favourites.sort((a, b) => a.rating - b.rating)]);
        break;
      default:
        break;
    }
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
        data={favourites}
        renderItem={({item}) => renderFavouriteJokeItem(item)}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyFavourites}
      />
      <BottomModal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <SortJokes
          setIsModalVisible={setIsModalVisible}
          sortJokes={sortJokes}
        />
      </BottomModal>
    </View>
  );
};

export default Favourites;
