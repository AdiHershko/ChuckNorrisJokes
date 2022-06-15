import {IJoke} from '../models/IJoke';
import {
  ADD_TO_FAVOURITES,
  FavouriteJokeAction,
  REMOVE_FROM_FAVOURITES,
} from '../actions/favouritesActions';

export interface FavouritesState {
  favourites: IJoke[];
}

const initialState: FavouritesState = {
  favourites: [],
};

const favouritesReducer = (
  state: FavouritesState = initialState,
  action: FavouriteJokeAction,
) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      const favourites = state.favourites.filter(
        joke => joke.id !== action.payload.id,
      );
      return {
        ...state,
        favourites,
      };
    default:
      return state;
  }
};

export default favouritesReducer;
