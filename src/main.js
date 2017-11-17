import Vue from 'vue';
import App from './App';
import router from './router';
import configureI18n from './i18n';

Vue.config.productionTip = false;

const i18n = configureI18n();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App),
});
