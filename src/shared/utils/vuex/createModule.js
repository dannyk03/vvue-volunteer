import createActions from './helpers/createActions';
import createMutations from './helpers/createMutations';
import namespace from './namespace';
import { AVAILABLE_NAMESPACES } from './constants';

const getInitialState = kind => ({
  [kind]: {
    data: null,
    loading: false,
  },
});

const getGetters = (types, kind) => ({
  [types.getters[kind]]: state => state[kind].data,
  [types.getters[`${kind}Loading`]]: state => state[kind].loading,
});

export default (config) => {
  const { types: rawTypes, apis } = config;

  const useList = rawTypes.includes(AVAILABLE_NAMESPACES.LIST);
  const useOne = rawTypes.includes(AVAILABLE_NAMESPACES.ONE);

  const types = namespace({ useList, useOne });


  const initialState = {
    ...useList && getInitialState(AVAILABLE_NAMESPACES.LIST),
    ...useOne && getInitialState(AVAILABLE_NAMESPACES.ONE),
  };

  const getters = {
    ...useList && getGetters(types, AVAILABLE_NAMESPACES.LIST),
    ...useOne && getGetters(types, AVAILABLE_NAMESPACES.ONE),
  };

  const actions = {
    ...createActions(types.actions, types.mutations, apis),
  };

  const mutations = {
    ...createMutations(types.mutations),
  };

  const module = {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
  };

  return {
    module,
    types,
  };
};
