import {IJoke} from '../models/IJoke';

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export interface FavouriteJokeAction {
  type: string;
  payload: IJoke;
}

export const addToFavourites = (joke: IJoke) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: joke,
  };
};

export const removeFromFavourites = (joke: IJoke) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: joke,
  };
};
