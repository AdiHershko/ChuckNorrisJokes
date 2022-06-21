import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Favourites from './Favourties';
import * as redux from 'react-redux';
import {IJoke} from '../../../../models/IJoke';
import {changeSortingType, SORTING_TYPE} from '../../../../actions/sortActions';
import {removeFromFavourites} from '../../../../actions/favouritesActions';
jest.useFakeTimers();
jest.mock('react-native-vector-icons/FontAwesome', () => 'icon');
jest.mock('react-native-vector-icons/Ionicons', () => 'icon');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'icon');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockSetSortJokesModalOpenFn = jest.fn();

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      sortJokesModalOpen: true,
      setSortJokesModalOpen: mockSetSortJokesModalOpenFn,
    }),
  };
});

const mockFavouriteJokes: IJoke[] = [
  {id: '1', text: 'favourite1', rating: 3},
  {id: '2', text: 'favourite2', rating: 1},
  {id: '3', text: 'favourite3', rating: 5},
];

const useSelectorSpy = jest.spyOn(redux, 'useSelector');
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockUseDispatchFn = jest.fn();
useDispatchSpy.mockReturnValue(mockUseDispatchFn);

const renderComponent = (Component: any) => {
  const props = {
    navigation: {
      setOptions: jest.fn(),
    },
  };
  return render(<Component {...props} />);
};

const resetMocks = (
  favourites: IJoke[] | undefined = undefined,
  sortingType: SORTING_TYPE | null = null,
) => {
  useSelectorSpy.mockReset();
  useSelectorSpy
    .mockReturnValueOnce(favourites ? favourites : mockFavouriteJokes)
    .mockReturnValueOnce(sortingType ? sortingType : SORTING_TYPE.TOP_TO_BOTTOM)
    .mockReturnValueOnce(favourites ? favourites : mockFavouriteJokes);
};

beforeEach(() => {
  resetMocks();
});

describe('Favourites', () => {
  it('Should render There are no favourites if favourites array is empty', () => {
    resetMocks([]);
    const {getByText} = renderComponent(Favourites);
    getByText('There are no favourites!');
  });

  it('Should show jokes sorted from top to bottom', () => {
    const {getByLabelText} = renderComponent(Favourites);
    const list = getByLabelText('Favourites-sorted-list');
    const favouritesClone = [...mockFavouriteJokes];
    const sortedJokes = favouritesClone.sort((a, b) => b.rating - a.rating);
    expect(list.props.data).toEqual(sortedJokes);
  });

  it('Should show jokes sorted from bottom to top', () => {
    resetMocks(undefined, SORTING_TYPE.BOTTOM_TO_TOP);
    const {getByLabelText} = renderComponent(Favourites);
    const list = getByLabelText('Favourites-sorted-list');
    const favouritesClone = [...mockFavouriteJokes];
    const sortedJokes = favouritesClone.sort((a, b) => a.rating - b.rating);
    expect(list.props.data).toEqual(sortedJokes);
  });

  it('Should dispatch removeFromFavourites when pressing remove button on a joke', () => {
    const {getAllByLabelText} = renderComponent(Favourites);
    const removeButtons = getAllByLabelText('FavouriteJoke-remove-button');
    expect(removeButtons.length).toBe(3);
    fireEvent.press(removeButtons[1]); //should remove joke favourite1 with id 1 and rating of 3
    const jokeToRemove = mockFavouriteJokes.find(joke => joke.id === '1');
    expect(mockUseDispatchFn).toBeCalledWith(
      removeFromFavourites(jokeToRemove),
    );
  });

  it('Should dispatch changeSortingType with top_to_bottom type when pressing on sort top to bottom in modal', () => {
    const {getByLabelText} = renderComponent(Favourites);
    const sortJokesTopToBottomButton = getByLabelText('SortJokes-sort-top');
    fireEvent.press(sortJokesTopToBottomButton);
    expect(mockUseDispatchFn).toBeCalledWith(
      changeSortingType(SORTING_TYPE.TOP_TO_BOTTOM),
    );
  });

  it('Should dispatch changeSortingType with bottom_to_top type when pressing on sort bottom to top in modal', () => {
    const {getByLabelText} = renderComponent(Favourites);
    const sortJokesTopToBottomButton = getByLabelText('SortJokes-sort-bottom');
    fireEvent.press(sortJokesTopToBottomButton);
    expect(mockUseDispatchFn).toBeCalledWith(
      changeSortingType(SORTING_TYPE.BOTTOM_TO_TOP),
    );
  });
});
