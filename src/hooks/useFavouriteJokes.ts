import {useEffect, useState} from 'react';
import useStorage from './useStorage';
import {IJoke} from '../models/IJoke';

const useFavouriteJokes = () => {
  const {saveToStorage, getFromStorage, containsKey} = useStorage();

  const [favouriteJokes, setFavouriteJokes] = useState<IJoke[]>([]);

  useEffect(() => {
    const favourites: IJoke[] = containsKey('favourites')
      ? (getFromStorage('favourites') as IJoke[])
      : [];
    setFavouriteJokes([...favourites]);
  }, []);

  useEffect(() => {
    saveToStorage('favourites', favouriteJokes);
  }, [favouriteJokes]);

  const saveFavouriteJoke = (joke: IJoke, rating: number) => {
    const otherFavourites: IJoke[] = favouriteJokes.filter(
      val => val.id !== joke.id,
    );
    const favourites = [...otherFavourites, {...joke, rating}];
    setFavouriteJokes([...favourites]);
  };

  const removeFavouriteJoke = (joke: IJoke) => {
    const favourites = favouriteJokes.filter(val => val.id !== joke.id);
    setFavouriteJokes([...favourites]);
  };

  return {
    favouriteJokes,
    saveFavouriteJoke,
    removeFavouriteJoke,
  };
};

export default useFavouriteJokes;
