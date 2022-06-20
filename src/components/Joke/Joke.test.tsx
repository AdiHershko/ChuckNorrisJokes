import React from 'react';
import {render} from '@testing-library/react-native';
import Joke from './Joke';

jest.useFakeTimers();

const MOCK_JOKE_TEXT = 'Joke Test';

const renderComponent = (Component: any) => {
  const props = {text: MOCK_JOKE_TEXT, animated: false};
  return render(<Component {...props} />);
};
describe('Joke.tsx', () => {
  it('Should render the text given in props', () => {
    const {getByText} = renderComponent(Joke);
    getByText(MOCK_JOKE_TEXT);
  });
});
