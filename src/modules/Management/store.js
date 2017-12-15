import { createModule, AVAILABLE_NAMESPACES as T } from '@/shared/utils/vuex/index';

/* eslint-disable */

const initialState = {

};

const getters = {

};

const actions = {

};

const mutations = {

};


const apis = {
  // fetchList: fetchUsersAPI,
  // fetchOne: fetchUserAPI,
  // delete: deleteUserAPI,
  // post: postUserAPI,
  // put: putUserAPI,
}

const { module: usersModule, types: users } = createModule({ types: [T.LIST, T.ONE], apis });

export { users };

export default {
  namespaced: true,
  modules: {
    users: usersModule,
  },
  state: initialState,
  getters,
  actions,
  mutations,
};
