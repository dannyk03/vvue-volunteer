import AuthLayout from '@/layouts/AuthLayout';
import store from '@/shared/store';

const LoginContainer = () => import(/* webpackChunkName: "public" */'./containers/LoginContainer');

export default {
  path: '/auth',
  component: AuthLayout,
  beforeEnter(to, from, next) { // eslint-disable-line
    if (store.getters['global/auth/isAuthenticated']) {
      return next('/home');
    }

    next();
  },
  children: [
    {
      path: 'login',
      name: 'login',
      component: LoginContainer,
    },
    {
      path: 'register',
      name: 'register',
      component: LoginContainer,
    },
  ],
};
