import {ChangeSortTypeAction} from '../actions/sortActions';
import {SORTING_TYPE} from '../actions/sortActions';

export interface SortingTypeState {
  sortingType: SORTING_TYPE;
}

const initialState: SortingTypeState = {
  sortingType: SORTING_TYPE.TOP_TO_BOTTOM,
};

const sortTypeReducer = (
  state: SortingTypeState = initialState,
  action: ChangeSortTypeAction,
) => {
  return {...state, sortingType: action.payload};
};

export default sortTypeReducer;
