export default (store, next) => store.dispatch('global/auth/checkAuthentication')
  .then(next)
  .catch(() => next('/auth/login'));
