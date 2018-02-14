import { createModule, AVAILABLE_NAMESPACES as T } from '@/shared/utils/vuex';
import { fetchPrograms, fetchProgram } from "@/api";

const initialState = {
  selectedUser: {
    firstName: 'Tony',
    lastName: 'Stark',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d',
  },
};

const getters = {
  getSelectedUser: state => state.selectedUser,
};

const actions = {

};

const mutations = {

};

const apis = {
  fetchList: fetchPrograms,
  fetchOne: fetchProgram,
};

const { module: programsModule, types: programs } = createModule({ types: [T.LIST, T.ONE], apis });

export { programs };

export default {
  namespaced: true,
  state: initialState,
  modules: {
    programs: programsModule,
  },
  getters,
  actions,
  mutations,
};
