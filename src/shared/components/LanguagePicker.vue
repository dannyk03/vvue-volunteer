<template>
  <div>
    <select v-model="locale">
      <option v-for="item in locales" :value="item" v-t="`languages.${item}`"></option>
    </select>
  </div>
</template>

<script>
import { locales, setLanguage, DEFAULT_LOCALE } from '@/i18n';

export default {
  name: 'LanguagePicker',
  data() {
    return {
      locale: DEFAULT_LOCALE,
      locales,
    };
  },
  watch: {
    locale(next) {
      setLanguage(next);
    },
  },
};
</script>
