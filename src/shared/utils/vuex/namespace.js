import { AVAILABLE_NAMESPACES } from './constants';

const mapValues = (obj, f) => Object.keys(obj).reduce((res, key) => {
  res[key] = f(obj[key], key);

  return res;
}, {});
/* eslint-disable */
const createConstants = types => mapValues(types, (names, type) => mapValues(names, name => `${type}:${name}`));

const getGetters = kind => ({
  [kind]: kind.toUpperCase(),
  [`${kind}Loading`]: `${kind.toUpperCase()}_LOADING`,
});

const getMutations = kind => ({
  [`${kind}Requested`]: `${kind.toUpperCase()}_REQUESTED`,
  [`${kind}Errored`]: `${kind.toUpperCase()}_ERRORED`,
  [`${kind}Fetched`]: `${kind.toUpperCase()}_FETCHED`,
});

export default (namespaces) => {
  const { useList, useOne } = namespaces;

  return createConstants({
    getters: {
      ...useList && getGetters(AVAILABLE_NAMESPACES.LIST),
      ...useOne && getGetters(AVAILABLE_NAMESPACES.ONE),
    },
    actions: {
      ...useList && { fetchList: 'FETCH_LIST' },
      ...useOne && { fetchOne: 'FETCH_ONE' },
      delete: 'DELETE',
      post: 'POST',
      // put: 'PUT',
    },
    mutations: {
      add: 'ADD',
      remove: 'REMOVE',
      // put: 'PUT',
      // filter: 'FILTER',
      // sort: 'SORT',

      ...useList && getMutations(AVAILABLE_NAMESPACES.LIST),
      ...useOne && getMutations(AVAILABLE_NAMESPACES.ONE),
    },
  });
}
