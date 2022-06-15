export const CHANGE_SORT_TYPE = 'CHNAGE_SORT_TYPE';
export const enum SORTING_TYPE {
  TOP_TO_BOTTOM,
  BOTTOM_TO_TOP,
}

export interface ChangeSortTypeAction {
  action: string;
  payload: SORTING_TYPE;
}

export const changeSortingType = (sortingType: SORTING_TYPE) => {
  return {
    type: CHANGE_SORT_TYPE,
    payload: sortingType,
  };
};
