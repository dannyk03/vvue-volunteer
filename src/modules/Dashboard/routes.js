import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';

import storeModule from './store';

const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */'./containers/DashboardLayout');
const DashboardPage = () => import(/* webpackChunkName: "dashboard" */'./containers/DashboardPage');
const ColleaguesPage = () => import(/* webpackChunkName: "dashboard" */'./containers/ColleaguesPage');
/* eslint-disable */
export default {
  path: '/home',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.home) {
      store.registerModule('dashboard', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardPage,
        },
        {
          path: 'colleagues',
          name: 'colleagues',
          component: ColleaguesPage,
        },
      ],
    },
  ],
};
