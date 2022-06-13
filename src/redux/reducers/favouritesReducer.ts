import {FAVOURITES_CHANGE} from '../constants';

const initialState = {
  favourites: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITES_CHANGE:
      return {...state, favourites: action.payload};
    default:
      return state;
  }
};

export default favouritesReducer;
