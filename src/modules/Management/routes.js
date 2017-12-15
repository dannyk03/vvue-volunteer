import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';

import storeModule from './store';

const ManagementPage = () => import(/* webpackChunkName: "management" */'./containers/ManagementPage');
const UsersContainer = () => import(/* webpackChunkName: "management" */'./containers/UsersContainer');

/* eslint-disable */
export default {
  path: '/management',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.management) {
      store.registerModule('management', storeModule);
      store.commit('REFRESH_STORE');
    }

    next();
  },
  children: [
    {
      path: '',
      component: ManagementPage,
      children: [
        {
          path: 'users',
          name: 'home-one',
          component: UsersContainer,
        },
        {
          path: '',
          name: 'management',
          redirect: 'users',
        },
      ],
    },
  ],
};
