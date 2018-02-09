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

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
