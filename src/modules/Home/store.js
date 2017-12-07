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
  window.setTimeout(() => {
    resolve();
  }, 1000);
})
const postUserAPI = user => new Promise(resolve => {
  window.setTimeout(() => {
    user.id = usersFixture.length + 1;
    usersFixture.push(user);
    resolve(user);
  })
});

const apis = {
  fetchList: fetchUsersAPI,
  fetchOne: fetchUserAPI,
  delete: deleteUserAPI,
  post: postUserAPI,
}
// /TEMP

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
