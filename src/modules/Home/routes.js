import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';

import storeModule from './store';

const HomePage = () => import(/* webpackChunkName: "home" */'./containers/HomePage');
/* eslint-disable */
export default {
  path: '/home',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.home) {
      store.registerModule('home', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomePage,
    },
    {
      path: '/mentoring',
      name: 'mentoring',
      component: HomePage,
    },
  ],
};
