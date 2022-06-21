import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import FavouriteJoke from './FavouriteJoke';
import {IJoke} from '../../models/IJoke';

jest.mock('react-native-vector-icons/FontAwesome', () => 'icon');
jest.mock('react-native-vector-icons/Ionicons', () => 'icon');
jest.useFakeTimers();

const mockJoke: IJoke = {
  text: 'Test_Joke',
  rating: 3,
  id: '123',
};
const mockRemoveJokeFromFavouritesFn = jest.fn();

const renderComponent = (Component: any) => {
  const props = {
    joke: mockJoke,
    removeJokeFromFavourites: mockRemoveJokeFromFavouritesFn,
  };
  return render(<Component {...props} />);
};

describe('FavouriteJoke', () => {
  it('Should invoke RemoveJokeFromFavourites when pressing remove button', () => {
    const {getByLabelText} = renderComponent(FavouriteJoke);
    const removeJokeButton = getByLabelText('FavouriteJoke-remove-button');
    fireEvent.press(removeJokeButton);
    expect(mockRemoveJokeFromFavouritesFn).toHaveBeenCalledWith(mockJoke);
  });
});
