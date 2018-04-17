import { warn } from './logger';

export const fromLocalStorage = target => { // eslint-disable-line
  const value = localStorage.getItem(target);
  try {
    return JSON.parse(value);
  } catch (error) {
    warn(`Error on parsing localStorage by key "${target}" (not an object)`);
    return value;
  }
};
