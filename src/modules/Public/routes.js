import AuthLayout from '@/layouts/AuthLayout';
import store from '@/shared/store';
import storeModule from './store';

const LoginContainer = () => import(/* webpackChunkName: "public" */'./containers/LoginContainer');
const OnboardingContainer = () => import(/* webpackChunkName: "onboarding" */'./containers/OnboardingContainer');
const OnboardingCode = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingCode');
const OnboardingProfile = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingProfile');
const OnboardingName = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingName');
const OnboardingPersonalInfo = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingPersonalInfo');
const OnboardingFinal = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingFinal');

export default {
  path: '/auth',
  component: AuthLayout,
  beforeEnter(to, from, next) { // eslint-disable-line
    if (store.getters['global/auth/isAuthenticated']) {
      return next('/home');
    }
    store.registerModule('public', storeModule);
    store.commit('REFRESH_STORE');

    next();
  },
  children: [
    {
      path: 'login',
      name: 'login',
      component: LoginContainer,
    },
    {
      path: 'onboarding',
      name: 'onboarding',
      component: OnboardingContainer,
      children: [
        {
          path: '1',
          component: OnboardingCode,
        },
        {
          path: '2',
          component: OnboardingProfile,
        },
        {
          path: '3',
          component: OnboardingName,
        },
        {
          path: '4',
          component: OnboardingPersonalInfo,
        },
        {
          path: '5',
          component: OnboardingFinal,
        },
        { path: '', redirect: '1' },
      ],
    },
  ],
};
