import {set, get, contains} from '../services/storageService';

const useStorage = () => {
  const saveToStorage = (key: string, val: any) => {
    set(key, val);
  };

  const getFromStorage = (key: string): any => {
    return get(key);
  };

  const containsKey = (key: string): boolean => {
    return contains(key);
  };
  return {
    saveToStorage,
    getFromStorage,
    containsKey,
  };
};

export default useStorage;
