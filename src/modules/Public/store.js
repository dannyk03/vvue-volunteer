import { fromLocalStorage } from '@/shared/utils/localStorage';
import * as types from './mutationTypes';

const initialState = {
  onboarding: fromLocalStorage('onboarding') || {},
};

const getters = {
  getInvitationCode: state => state.onboarding.code,
  getEmail: state => state.onboarding.email,
  getNameInfo: state => ({
    firstName: state.onboarding.firstName,
    lastName: state.onboarding.lastName,
  }),
  getPersonalInfo: state => ({
    birthday: state.onboarding.birthday,
    gender: state.onboarding.gender,
    location: state.onboarding.location,
  }),
};

const actions = {

};

const mutations = {
  // [types.SET_INVITATION_CODE](state, code) {
  //   state.onboarding = Object.assign({}, state.onboarding, { code });
  // },
  // [types.SET_PROFILE](state, profile) {
  //   state.onboarding = Object.assign({}, state.onboarding, profile);
  // },
  // [types.SET_NAME](state, names) {
  //   state.onboarding = Object.assign({}, state.onboarding, profile);
  // },
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
