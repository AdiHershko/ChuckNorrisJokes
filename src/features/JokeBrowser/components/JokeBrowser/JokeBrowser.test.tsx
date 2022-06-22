import React from 'react';
import * as redux from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';
import JokeBrowser from './JokeBrowser';


jest.mock('../../hooks/useFetchJoke', () => ({
  useFetchJoke: () => ({
    fetchJoke: jest
      .fn()
      .mockReturnValueOnce(
        Promise.resolve({id: '123', text: 'joke_test', rating: 0}),
      )
      .mockReturnValueOnce(
        Promise.resolve({id: '333', text: 'second_joke', rating: 0}),
      ),
    cancelJokeRequest: jest.fn(),
  }),
}));

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockUseDispatchFn = jest.fn();
useDispatchSpy.mockReturnValue(mockUseDispatchFn);

const renderComponent = (Component: any) => {
  const props = {};
  return render(<Component {...props} />);
};

describe('JokeBrowser', () => {
  it('Should render a joke text when component is loaded', async () => {
    const {findByText} = renderComponent(JokeBrowser);
    await findByText('joke_test');
  });

  it('Should render next joke button', async () => {
    const {findByLabelText} = renderComponent(JokeBrowser);
    await findByLabelText('JokeBrowser-next-joke-button');
  });

  it('Should render a new joke after pressing next joke button', async () => {
    const {getByLabelText, findByText} = renderComponent(JokeBrowser);
    const nextJokeButton = getByLabelText('JokeBrowser-next-joke-button');
    fireEvent.press(nextJokeButton);
    await findByText('second_joke');
  });
});
