<template>
  <div>
    <select v-model="locale">
      <option v-for="item in locales" :value="item" v-t="`languages.${item}`"></option>
    </select>
  </div>
</template>

<script>
import { locales } from '@/i18n';

export default {
  name: 'LanguagePicker',
  data() {
    return {
      locale: 'en', // TODO: Get current locale from api settings
      locales,
    };
  },
  watch: {
    locale(next) {
      this.$i18n.locale = next;
    },
  },
};
</script>
