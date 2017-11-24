import Vue from 'vue';
import Vuex from 'vuex';

// import { store as home } from '@/modules/Home';
import global from './modules/global';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
  },
  strict: process.env.NODE_ENV !== 'production',
  mutations: {
    REFRESH_STORE() {},
  },
});
