/* eslint-disable */
import {
  login as loginAPI,
  registerUser as registerUserAPI,
} from '@/api';
import { setAuthHeader } from '@/shared/utils/http';
import * as types from '../mutationTypes';

// Initial state
const initialState = {
  isAuthenticated: false,
  token: null,
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
};

const actions = {
  async login({ commit, dispatch }, credentials) {
    const { accessToken: token } = await loginAPI(credentials);
    localStorage.setItem('token', token);
    setAuthHeader(token);
    commit(types.USER_LOGGED_IN, { token });

    return dispatch('checkAuthentication');
  },
  async register({ dispatch }, user) {
    await registerUserAPI({ ...user });
    const credentials = {
      username: user.email,
      password: user.password,
    };

    return await dispatch('login', credentials);
  },
  checkAuthentication({ commit, dispatch, rootGetters }) {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthHeader(token);
      commit(types.USER_LOGGED_IN, { token });

      if (rootGetters['global/user/getUser']) return Promise.resolve(true);

      return Promise.all([
        dispatch('global/user/fetchProfile', null, { root: true }),
        dispatch('global/user/fetchProfileFields', null, { root: true }),
      ]);
    }

    return Promise.reject();
  },
};

const mutations = {
  [types.USER_LOGGED_IN](state, { user, token }) {
    state.token = token;
    state.isAuthenticated = true;
  },
  [types.USER_LOGGED_OUT](state) {
    state.token = null;
    state.isAuthenticated = false;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
