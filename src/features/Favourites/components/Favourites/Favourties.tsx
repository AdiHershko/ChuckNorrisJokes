import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import {storage} from '../../../../storage';
import FavouriteJoke from '../../../../components/FavouriteJoke/FavouriteJoke';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomModal from '../../../../components/BottomModal/BottomModal';
import SortJokes from '../SortJokes/SortJokes';
import styles from './style';

const Favourites = ({navigation}) => {
  const [favourites, setFavourites] = useState<IJoke[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Icon name="sort" style={styles.sort} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const favouriteJokesStr: string = storage.getString('favourites') as string;
    if (favouriteJokesStr) {
      setFavourites(JSON.parse(favouriteJokesStr) as IJoke[]);
    }
  }, []);

  useEffect(() => {
    storage.set('favourites', JSON.stringify(favourites));
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

  return (
    <View>
      <ScrollView>
        {favourites.length > 0 ? (
          favourites.map(val => (
            <FavouriteJoke
              joke={val}
              removeJokeFromFavourites={removeJokeFromFavourites}
            />
          ))
        ) : (
          <Text>There are no favourites!</Text>
        )}
      </ScrollView>
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
