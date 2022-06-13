import {FAVOURITES_CHANGE} from '../constants';

export const changeFavourites = favourites => {
  return {
    type: FAVOURITES_CHANGE,
    payload: favourites,
  };
};
