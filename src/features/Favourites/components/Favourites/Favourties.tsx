import React, { useEffect, useState } from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IJoke} from '../../../../models/IJoke';
import {storage} from '../../../../storage';
import FavouriteJoke from '../../../components/FavouriteJoke/FavouriteJoke';

const Favourites = () => {
  const [favourites, setFavourites] = useState<IJoke[]>([]);
  useEffect(() => {
    const favouriteJokesStr: string = storage.getString('favourites') as string;
    if (favouriteJokesStr) {
      setFavourites(JSON.parse(favouriteJokesStr) as IJoke[]);
    }
  }, []);

  useEffect(() => {
    storage.set('favourites', JSON.stringify(favourites));
    console.log('favourites =>',favourites)
  }, [favourites]);

  const removeJokeFromFavourites = (id: string) => {
    const filteredFavourites = favourites.filter(joke => joke.id !== id);
    setFavourites([...filteredFavourites]);
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
    </View>
  );
};

export default Favourites;
