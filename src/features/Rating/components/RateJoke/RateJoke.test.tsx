import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import RateJoke from './RateJoke';


const mockCloseFn = jest.fn();

const renderComponent = (Component: any) => {
  const props = {
    close: mockCloseFn,
  };
  return render(<Component {...props} />);
};

describe('RateJoke', () => {
  it('Should render close button', () => {
    const {getByLabelText} = renderComponent(RateJoke);
    getByLabelText('RateJoke-close-button');
  });

  it('should call close function when pressing close button', () => {
    const {getByLabelText} = renderComponent(RateJoke);
    const closeButton = getByLabelText('RateJoke-close-button');
    fireEvent.press(closeButton);
    expect(mockCloseFn).toBeCalled();
  });

  it('Should render title: "How Funny?"', () => {
    const {getByText} = renderComponent(RateJoke);
    getByText('How funny?');
  });
});
