import { fromLocalStorage } from '@/shared/utils/localStorage';
import {
  checkInviteCode as checkInviteCodeAPI,
} from '@/api';
import * as types from './mutationTypes';

const initialState = {
  onboarding: fromLocalStorage('onboarding') || {},
  user: {},
  invitationCode: fromLocalStorage('invitationCode') || null,
};

const getters = {

};

const actions = {
  checkInviteCode({ commit, state }, code) {
    return checkInviteCodeAPI(code).then(() => {
      commit(types.SET_INVITATION_CODE, code);
      localStorage.setItem('invitationCode', code);
    });
  },
  registerUser({ commit, dispatch, state }, credentials) {
    const user = Object.assign({}, credentials, {
      code: state.invitationCode,
    });

    return dispatch('global/auth/register', user, { root: true }).then(() => {
      localStorage.removeItem('invitationCode');
    });
  },
};

const mutations = {
  [types.SET_INVITATION_CODE](state, code) {
    state.invitationCode = code;
  },
  [types.UPDATE_ONBOARDING_INFO](state, data) {
    state.onboarding = Object.assign({}, state.onboarding, data);
    localStorage.setItem('onboarding', JSON.stringify(state.onboarding));
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
