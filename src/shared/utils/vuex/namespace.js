const mapValues = (obj, f) => Object.keys(obj).reduce((res, key) => {
  res[key] = f(obj[key], key);

  return res;
}, {});
/* eslint-disable */
const createConstants = types => mapValues(types, (names, type) => mapValues(names, name => `${type}:${name}`));

export default () => createConstants({
  getters: {
    all: 'ALL', // list
    allLoading: 'ALL_LOADING',
    one: 'ONE', // one
    oneLoading: 'ONE_LOADING',
  },
  actions: {
    fetch: 'FETCH',
    fetchOne: 'FETCH_ONE',
    delete: 'DELETE',
    // put: 'PUT',
  },
  mutations: {
    add: 'ADD',
    remove: 'REMOVE',
    // put: 'PUT',
    // filter: 'FILTER',
    // sort: 'SORT',

    allRequested: 'ALL_REQUESTED',
    allErrored: 'ALL_ERRORED',
    allFetched: 'ALL_FETCHED',

    oneRequested: 'ONE_REQUESTED',
    oneErrored: 'ONE_ERRORED',
    oneFetched: 'ONE_FETCHED',
  },
});
