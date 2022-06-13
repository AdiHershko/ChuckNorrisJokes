import {storage} from '../storage';

export const set = (key: string, val: string) => {
  const stringValue = JSON.stringify(val);
  storage.set(key, stringValue);
};

export const get = (key: string) => {
  const value = storage.getString(key);
  if (!value) {
    return null;
  }
  return JSON.parse(value);
};

export const contains = (key: string): boolean => {
  return storage.contains(key);
};
