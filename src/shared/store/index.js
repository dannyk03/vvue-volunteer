import Vue from 'vue';
import Vuex from 'vuex';

import global from './modules/global';

Vue.use(Vuex);

console.log('process env', process.env);

export default new Vuex.Store({
  modules: {
    global,
  },
  strict: process.env.NODE_ENV !== 'production',
  mutations: {
    REFRESH_STORE() {},
  },
});
