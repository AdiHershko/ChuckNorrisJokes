import React from 'react';
import * as redux from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';
import Rating from './Rating';
import {addToFavourites} from '../../../../actions/favouritesActions';
import {ModalContext} from '../../../../context/ModalContext';

jest.mock('react-native-vector-icons/FontAwesome', () => 'icon');

const mockSetRateJokeModalOpenFn = jest.fn();

const mockContextValue = {
  rateJokeModalOpen: true,
  setRateJokeModalOpen: mockSetRateJokeModalOpenFn,
  sortJokesModalOpen: false,
  setSortJokesModalOpen: jest.fn(),
};

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockUseDispatchFn = jest.fn();
useDispatchSpy.mockReturnValue(mockUseDispatchFn);

const mockJoke = {id: '123', text: 'joke', rating: 0};

const renderComponent = (Component: any) => {
  const props = {joke: mockJoke};
  return render(
    <ModalContext.Provider value={mockContextValue}>
      <Component {...props} />
    </ModalContext.Provider>,
  );
};

describe('Rating', () => {
  it('Should render rate joke button', () => {
    const {getByLabelText} = renderComponent(Rating);
    getByLabelText('Rating-rate-button');
  });

  it('Should invoke setRateJokeModalOpen(true) when pressing on rate joke button', () => {
    const {getByLabelText} = renderComponent(Rating);
    const rateJokeButton = getByLabelText('Rating-rate-button');
    fireEvent.press(rateJokeButton);
    expect(mockSetRateJokeModalOpenFn).toBeCalledWith(true);
  });

  it('Should invoke setRateJokeModalOpen(false) when pressing on rate joke button', () => {
    const {getByLabelText} = renderComponent(Rating);
    const closeRateJokeButton = getByLabelText('RateJoke-close-button');
    fireEvent.press(closeRateJokeButton);
    expect(mockSetRateJokeModalOpenFn).toBeCalledWith(false);
  });

  it('Should dispatch addToFavourites and invokesetRateJokeModalOpen(false) when pressing a star', () => {
    const {getAllByLabelText} = renderComponent(Rating);
    const stars = getAllByLabelText('StarDisplay-star-button');
    expect(stars.length).toBe(5);
    fireEvent.press(stars[2]); //rating: 3
    expect(mockUseDispatchFn).toBeCalledWith(
      addToFavourites({...mockJoke, rating: 3}),
    );
    expect(mockSetRateJokeModalOpenFn).toBeCalledWith(false);
  });
});
