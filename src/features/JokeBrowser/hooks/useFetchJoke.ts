import axios from 'axios';
import {IJoke} from '../../../models/IJoke';
import {chuckNorrisApiOptions} from '../api';

export const useFetchJoke = () => {
  const fetchJoke = async (): Promise<IJoke> => {
    const response = await axios(chuckNorrisApiOptions);
    return {
      id: response.data.id,
      text: response.data.value,
      rating: 0,
    };
  };
  return {
    fetchJoke,
  };
};
