import AuthLayout from '@/layouts/AuthLayout';
import store from '@/shared/store';
import storeModule from './store';

const LoginContainer = () => import(/* webpackChunkName: "public" */'./containers/LoginContainer');
const ForgotPasswordContainer = () => import(/* webpackChunkName: "public" */'./containers/ForgotPasswordContainer');
const OnboardingContainer = () => import(/* webpackChunkName: "onboarding" */'./containers/OnboardingContainer');
const OnboardingCode = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingCode');
const OnboardingProfile = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingProfile');
const OnboardingName = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingName');
const OnboardingPersonalInfo = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingPersonalInfo');
const PersonalLocation = () => import(/* webpackChunkName: "onboarding" */'./components/PersonalLocation');
const PersonalInfo = () => import(/* webpackChunkName: "onboarding" */'./components/PersonalInfo');
const PersonalAvatar = () => import(/* webpackChunkName: "onboarding" */'./components/PersonalAvatar');

const OnboardingFinal = () => import(/* webpackChunkName: "onboarding" */'./components/OnboardingFinal');

const waitUser = async (to, from, next) => {
  try {
    await store.dispatch('global/auth/checkAuthentication');
    next();
  } catch (e) {
    next('/auth/login');
  }
};

const passRegisteredUser = async (to, from, next) => {
  try {
    await store.dispatch('global/auth/checkAuthentication');
    next('/auth/onboarding/3');
  } catch (e) {
    next();
  }
};

export default {
  path: '/auth',
  component: AuthLayout,
  beforeEnter(to, from, next) { // eslint-disable-line
    store.registerModule('public', storeModule);
    store.commit('REFRESH_STORE');

    next();
  },
  children: [
    {
      path: 'login',
      name: 'login',
      component: LoginContainer,
      beforeEnter(to, from, next) {
        if (store.getters['global/auth/isAuthenticated']) {
          return next('/home');
        }
        return next();
      },
    },
    {
      path: 'forgot',
      name: 'forgot',
      component: ForgotPasswordContainer,
      beforeEnter(to, from, next) {
        if (store.getters['global/auth/isAuthenticated']) {
          return next('/home');
        }
        return next();
      },
    },
    {
      path: 'onboarding',
      component: OnboardingContainer,
      children: [
        {
          path: '1',
          name: 'onboarding',
          component: OnboardingCode,
          beforeEnter: passRegisteredUser,
        },
        {
          path: '2',
          name: 'onboardingProfile',
          component: OnboardingProfile,
          beforeEnter: passRegisteredUser,
        },
        {
          path: '3',
          component: OnboardingName,
          beforeEnter: waitUser,
        },
        {
          path: '4',
          component: OnboardingPersonalInfo,
          beforeEnter: waitUser,
          children: [
            {
              path: '1',
              component: PersonalInfo,
            },
            {
              path: '2',
              component: PersonalLocation,
            },
            {
              path: '3',
              component: PersonalAvatar,
            },
            { path: '', redirect: '1' },
          ],
        },
        {
          path: '5',
          name: 'onboardFinal',
          component: OnboardingFinal,
        },
        { path: '', redirect: '1' },
      ],
    },
  ],
};
