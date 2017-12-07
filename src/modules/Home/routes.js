import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';

import storeModule from './store';

const HomePage = () => import(/* webpackChunkName: "home" */'./containers/HomePage');
const HomeContainer = () => import(/* webpackChunkName: "home" */'./containers/HomeContainer');
const HomeContainerSecond = () => import(/* webpackChunkName: "home" */'./containers/HomeContainerSecond');
/* eslint-disable */
export default {
  path: '/home',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.home) {
      store.registerModule('home', storeModule);
      store.commit('REFRESH_STORE');
    }

    next();
  },
  children: [
    {
      path: '',
      component: HomePage,
      children: [
        {
          path: 'one',
          name: 'home-one',
          component: HomeContainer,
        },
        {
          path: 'second',
          name: 'home-second',
          component: HomeContainerSecond,
        },
        {
          path: '',
          name: 'home',
          redirect: 'one',
        },
      ],
    },
  ],
};
