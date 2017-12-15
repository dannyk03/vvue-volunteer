import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import storeModule from './store';

const ManagementPage = () => import(/* webpackChunkName: "management" */'./containers/ManagementPage');
const UsersContainer = () => import(/* webpackChunkName: "management" */'./containers/UsersContainer');
const UserContainer = () => import(/* webpackChunkName: "management" */'./containers/UserContainer');

/* eslint-disable */
export default {
  path: '/management',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.management) {
      store.registerModule('management', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: '',
      component: ManagementPage,
      children: [
        {
          path: 'users',
          name: 'users',
          component: UsersContainer,
        },
        {
          path: 'users/:id',
          name: 'userDetails',
          props: true,
          component: UserContainer,
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
