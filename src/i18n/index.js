import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './locales/en.json';
import de from './locales/de.json';

Vue.use(VueI18n);

export const locales = [
  'en',
  'de',
];

export default () => new VueI18n({
  locale: 'en',
  messages: {
    en,
    de,
  },
});
