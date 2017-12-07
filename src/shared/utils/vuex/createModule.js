import createActions from './helpers/createActions';
import createMutations from './helpers/createMutations';

export default (config) => {
  const { types, apis } = config;
  const initialState = {
    list: {
      data: [],
      loading: false,
    },
    one: {
      data: null,
      loading: false,
    },
  };

  const getters = {
    [types.getters.all]: state => state.list.data,
    [types.getters.allLoading]: state => state.list.loading,
    [types.getters.one]: state => state.one.data,
    [types.getters.oneLoading]: state => state.one.loading,
  };

  const actions = {
    ...createActions(types.actions, types.mutations, apis, ['fetch', 'fetchOne', 'delete']),
  };

  const mutations = {
    ...createMutations(types.mutations, [
      'allRequested',
      'allFetched',
      'allErrored',
      'oneRequested',
      'oneFetched',
      'oneErrored',
      'add',
      'remove',
    ]),
  };

  return {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
  };
};
