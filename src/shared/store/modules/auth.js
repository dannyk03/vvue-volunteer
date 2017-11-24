/* eslint-disable */
import {
  login as loginAPI,
  registerUser as registerUserAPI,
  fetchProfile as fetchProfileAPI,
} from '@/api';
import { setAuthHeader } from '@/shared/utils/http';
import * as types from '../mutationTypes';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

const getters = {
  getUser: state => state.user,
  isAuthenticated: state => state.isAuthenticated,
};

const actions = {
  login({ commit, dispatch }, credentials) {
    return loginAPI(credentials).then(
      ({ accessToken: token }) => {
        localStorage.setItem('token', token);
        setAuthHeader(token);
        commit(types.USER_LOGGED_IN, { token });
        dispatch('checkAuthentication');
      },
    );
  },
  register({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      registerUserAPI(credentials).then(
        ({ user, authenticationToken: token }) => {
          localStorage.setItem('token', token);
          localStorage.setItem('id', user.id);
          setAuthHeader(token);
          commit(types.USER_LOGGED_IN, { user, token });

          resolve();
        },
        ({ errors }) => reject(errors),
      );
    });
  },
  checkAuthentication({ commit }) {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthHeader(token);
      commit(types.USER_LOGGED_IN, { token });
      fetchProfileAPI().then(user => commit(types.PROFILE_FETCHED, user));

      return Promise.resolve();
    }

    return Promise.reject();
  },
};

const mutations = {
  [types.USER_LOGGED_IN](state, { user, token }) {
    state.user = user;
    state.token = token;
    state.isAuthenticated = true;
  },
  [types.PROFILE_FETCHED](state, user) {
    state.user = user;
  },
  [types.USER_LOGGED_OUT](state) {
    state.user = null;
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
