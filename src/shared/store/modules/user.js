import {
  fetchProfile as fetchProfileAPI,
  fetchProfileFields as fetchProfileFieldsAPI,
  updateProfile as updateProfileAPI,
  updateProfileFields as updateProfileFieldsAPI,
  uploadAvatar as uploadAvatarAPI,
} from '@/api';
import * as types from '../mutationTypes';

const initialState = {
  profile: null,
  profileFields: {},
};

const getters = {
  getUser: state => state.profile,
  getLanguages: state => state.profileFields.languages,
  getProfile: state => state.profileFields,
  getUserMenu: state => ({
    avatar: state.profile && state.profile.avatar && state.profile.avatar.small,
    name: `${state.profile.firstName} ${state.profile.lastName}`,
  }),
};

const actions = {
  async fetchProfile({ commit }) {
    const user = await fetchProfileAPI();
    commit(types.PROFILE_UPDATED, user);
  },
  async fetchProfileFields({ commit }) {
    const profileFields = await fetchProfileFieldsAPI();
    commit(types.PROFILE_FIELDS_UPDATED, profileFields);
  },
  async updateProfile({ commit }, user) {
    try {
      const updated = await updateProfileAPI(user);
      commit(types.PROFILE_UPDATED, updated);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  },
  async updateProfileFields({ commit }, profileFields) {
    try {
      const updated = await updateProfileFieldsAPI(profileFields);
      commit(types.PROFILE_FIELDS_UPDATED, updated);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  },
  async updateAvatar({ commit }, avatar) {
    try {
      const updated = await uploadAvatarAPI(avatar);
      commit(types.PROFILE_UPDATED, updated);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject();
    }
  },
};

const mutations = {
  [types.PROFILE_UPDATED](state, user) {
    state.profile = user;
  },
  [types.PROFILE_FIELDS_UPDATED](state, profileFields) {
    state.profileFields = profileFields;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
