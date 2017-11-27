export const fromLocalStorage = target => { // eslint-disable-line
  try {
    return JSON.parse(localStorage.getItem(target));
  } catch (error) {
    console.warn(`Error on parsing localStorage by key "${target}"`);
    return null;
  }
};
