import {combineReducers} from 'redux';
import favouritesState, {FavouritesState} from './favouritesReducer';
import sortingTypeState, {SortingTypeState} from './sortTypeReducer';
export interface RootState {
  favouritesState: FavouritesState;
  sortingTypeState: SortingTypeState;
}

const appReducers = combineReducers({
  favouritesState,
  sortingTypeState,
});

const rootReducer = (state: RootState, action: any) => {
  return appReducers(state, action);
};

export default rootReducer;
