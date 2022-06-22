import axios from 'axios';
import {IJoke} from '../../../models/IJoke';
import {chuckNorrisApiOptions} from '../api';

export const useFetchJoke = () => {
  const controller = new AbortController();

  const fetchJoke = async (): Promise<IJoke | null> => {
    try {
      const response = await axios({
        ...chuckNorrisApiOptions,
        signal: controller.signal,
      });
      return {
        id: response.data.id,
        text: response.data.value,
        rating: 0,
      };
    } catch (err) {
      return null;
    }
  };

  const cancelJokeRequest = () => {
    controller.abort();
  };

  return {
    fetchJoke,
    cancelJokeRequest,
  };
};
