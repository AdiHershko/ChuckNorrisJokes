import axios from 'axios';
import {useFetchJoke} from './useFetchJoke';
import {act, renderHook} from '@testing-library/react-hooks';

jest.mock('axios', () => ({
  text: 'test',
  rating: 0,
  id: '123',
}));

describe('useFetchJoke', () => {
  describe('when API call is successful', () => {
    it('should return joke object', () => {
      const {result} = renderHook(() => useFetchJoke());
    });
  });

  describe('when API call fails', () => {
    it('should return null', () => {});
  });
});
