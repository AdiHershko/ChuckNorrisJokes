import {useFetchJoke} from './useFetchJoke';
import {act, renderHook} from '@testing-library/react-hooks';
import axios from 'axios';

jest.mock('axios');

describe('useFetchJoke', () => {
  describe('when API call is successful', () => {
    it('should return joke object', async () => {
      const {result} = renderHook(() => useFetchJoke());
      const mockApiResponse = {data: {id: '123', value: 'test'}};
      axios.mockResolvedValue(mockApiResponse);
      const response = await result.current.fetchJoke();
      const mockJoke = {id: '123', text: 'test', rating: 0};
      expect(response).toEqual(mockJoke);
    });
  });

  describe('when API call fails', () => {
    it('should return null', async () => {
      const {result} = renderHook(() => useFetchJoke());
      const message = 'Network Error';
      axios.mockRejectedValueOnce(new Error(message));
      const response = await result.current.fetchJoke();
      expect(response).toBeNull();
    });
  });
});
