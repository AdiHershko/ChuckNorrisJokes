import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import StarDisplay from './StarDisplay';

jest.mock('react-native-vector-icons/FontAwesome', () => 'star');

const mockOnPressFn = jest.fn();
const MOCK_RATING = 3;
const MOCK_ENABLED = true;

const renderComponent = (Component: any) => {
  const props = {
    onPress: mockOnPressFn,
    rating: MOCK_RATING,
    enabled: MOCK_ENABLED,
  };
  return render(<Component {...props} />);
};

describe('StarDisplay', () => {
  it('Should render 5 stars', () => {
    const {getAllByLabelText} = renderComponent(StarDisplay);
    const stars = getAllByLabelText('star-button');

    expect(stars.length).toBe(5);
  });

  it('Should invoke onPress with rating when pressing a star', () => {
    const {getAllByLabelText} = renderComponent(StarDisplay);
    const stars = getAllByLabelText('star-button');
    fireEvent.press(stars[1]);

    expect(mockOnPressFn).toHaveBeenCalledWith(2);

    mockOnPressFn.mockReset();
  });

  it('Should render 3 stars and 2 empty stars when rating is 3', () => {
    const {getAllByLabelText} = renderComponent(StarDisplay);
    const stars = getAllByLabelText('star-icon');
    stars.forEach((star, index) =>
      expect(star.props.name).toBe(index < MOCK_RATING ? 'star' : 'star-o'),
    );
  });
});
