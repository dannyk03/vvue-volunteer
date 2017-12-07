import { createModule } from '@/shared/utils/vuex/index';
import { users } from './mutationTypes';

/* eslint-disable */

const initialState = {

};

const getters = {

};

const actions = {

};

const mutations = {

};

// TEMP - DEMO
const usersFixture = [
  {
    id: 1,
    name: 'John Doe',
    age: 19,
  },
  {
    id: 2,
    name: 'Mark Brot',
    age: 34,
  },
];
const usersDetailsFixture = [
  {
    id: 1,
    name: 'John Doe',
    age: 19,
    phone: '2334924234',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    name: 'Mark Brot',
    age: 34,
    phone: '3433333333',
    email: 'mark@example.com',
  },
];

const fetchUsersAPI = () => new Promise(resolve => {
  window.setTimeout(function () {
    resolve([...usersFixture]);
  }, 1000);
});
const fetchUserAPI = id => new Promise(resolve => {
  window.setTimeout(function () {
    resolve(
      usersDetailsFixture.find(item => item.id === id)
    );
  }, 1000);
});
const deleteUserAPI = id => new Promise(resolve => {
  window.setTimeout(function () {
    resolve();
  }, 1000);
})

const apis = {
  fetch: fetchUsersAPI,
  fetchOne: fetchUserAPI,
  delete: deleteUserAPI,
}
// /TEMP


export default {
  namespaced: true,
  modules: {
    users: createModule({ types: users, apis }),
  },
  state: initialState,
  getters,
  actions,
  mutations,
};
