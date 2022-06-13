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

  const saveFavouriteJoke = (joke: IJoke, rating: number) => {
    const otherFavourites: IJoke[] = favouriteJokes.filter(
      val => val.id !== joke.id,
    );
    const favourites = [...otherFavourites, {...joke, rating}];
    saveToStorage('favourites', favourites);
    setFavouriteJokes([...favourites]);
  };

  return {
    favouriteJokes,
    saveFavouriteJoke,
  };
};

export default useFavouriteJokes;
