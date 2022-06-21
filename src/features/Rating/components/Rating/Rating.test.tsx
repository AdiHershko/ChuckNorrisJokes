import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Rating from './Rating';
import {addToFavourites} from '../../../../actions/favouritesActions';

jest.mock('react-native-vector-icons/FontAwesome', () => 'icon');

const mockSetRateJokeModalOpenFn = jest.fn();

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({
      rateJokeModalOpen: true,
      setRateJokeModalOpen: mockSetRateJokeModalOpenFn,
    }),
  };
});

const mockUseDispatchFn = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => mockUseDispatchFn),
}));

const mockJoke = {id: '123', text: 'joke', rating: 0};

const renderComponent = (Component: any) => {
  const props = {joke: mockJoke};
  return render(<Component {...props} />);
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
    const stars = getAllByLabelText('star-button');
    expect(stars.length).toBe(5);
    fireEvent.press(stars[2]); //rating: 3
    expect(mockUseDispatchFn).toBeCalledWith(
      addToFavourites({...mockJoke, rating: 3}),
    );
    expect(mockSetRateJokeModalOpenFn).toBeCalledWith(false);
  });
});
