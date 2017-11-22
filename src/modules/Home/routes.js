const HomePage = () => import(/* webpackChunkName: "home" */'./containers/HomePage');
const HomeContainer = () => import(/* webpackChunkName: "home" */'./containers/HomeContainer');
const HomeContainerSecond = () => import(/* webpackChunkName: "home" */'./containers/HomeContainerSecond');

export default {
  path: '/home',
  name: 'home',
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
  ],
};
