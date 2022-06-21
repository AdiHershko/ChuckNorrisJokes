import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import JokeBrowser from './JokeBrowser';
import {IJoke} from '../../../../models/IJoke';

jest.mock('react-native-vector-icons/FontAwesome', () => 'icon');

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

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

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
    await act(() => fireEvent.press(nextJokeButton));
    await findByText('second_joke');
  });
});
