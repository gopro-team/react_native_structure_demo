import { AsyncStorage } from 'react-native';

const STORE_PREFIX = 'photohub-store-';

export const KEYS = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

export const setItem = async (key, item) => {
  let stringItem = item;
  if ((typeof item) !== 'string') {
    stringItem = item.toString();
  }
  await AsyncStorage.setItem(`${STORE_PREFIX}${key}`, stringItem);
};

export const getItem = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return value;
};
