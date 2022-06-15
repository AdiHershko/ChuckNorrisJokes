import {combineReducers} from 'redux';
import favouritesState, {FavouritesState} from './favouritesReducer';

export interface RootState {
  favouritesState: FavouritesState;
}

const appReducers = combineReducers({
  favouritesState,
});

const rootReducer = (state: RootState, action: any) => {
  return appReducers(state, action);
};

export default rootReducer;
