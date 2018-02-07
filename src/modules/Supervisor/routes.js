import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

const SupervisorPage = () => import(/* webpackChunkName: "supervisor" */'./containers/SupervisorPage');

export default {
  path: '/supervisor',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.home) {
      store.registerModule('supervisor', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: '',
      name: 'supervisor',
      component: SupervisorPage,
    },
  ],
};
