import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

const CommunityPage = () => import(/* webpackChunkName: "community" */'./containers/CommunityPage');

export default {
  path: '/community',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.home) {
      store.registerModule('community', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: '',
      name: 'community',
      component: CommunityPage,
    },
  ],
};
