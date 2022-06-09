import {storage} from '../storage';

const useStorage = () => {
  const saveToStorage = (key: string, val: any) => {
    const stringValue = JSON.stringify(val);
    storage.set(key, stringValue);
  };

  const getFromStorage = (key: string): any => {
    const value = storage.getString(key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  };

  const containsKey = (key: string): boolean => {
    return storage.contains(key);
  };
  return {
    saveToStorage,
    getFromStorage,
    containsKey,
  };
};

export default useStorage;
