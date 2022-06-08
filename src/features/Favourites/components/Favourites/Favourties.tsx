import React, {useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import {storage} from '../../../../storage';
import FavouriteJoke from '../../../../components/FavouriteJoke/FavouriteJoke';
import {default as FAIcon} from 'react-native-vector-icons/FontAwesome';
import {default as MCIcon} from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomModal from '../../../../components/BottomModal/BottomModal';

const Favourites = ({navigation}) => {
  const [favourites, setFavourites] = useState<IJoke[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <MCIcon name="sort" style={styles.sort} />
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
        <View style={styles.modalContainer}>
          <View style={styles.closeModalContainer}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <FAIcon name="close" style={styles.close} />
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
      </BottomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: '30%',
    marginTop: 'auto',
    backgroundColor: '#ffffff',
  },
  closeModalContainer: {
    alignItems: 'flex-end',
    margin: 3,
  },
  header: {
    alignItems: 'center',
    padding: 5,
  },
  headerText: {
    fontSize: 20,
  },
  sortOption: {
    borderBottomWidth: 1,
    padding: 10,
  },
  sortOptionText: {
    fontSize: 20,
    marginLeft: 20,
  },
  close: {
    fontSize: 20,
  },
  sort: {
    fontSize: 25,
  }
});

export default Favourites;
