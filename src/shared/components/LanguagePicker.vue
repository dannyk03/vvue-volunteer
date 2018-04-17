<template>
  <div class="language-picker">
    <v-select
      :items="items"
      v-model="locale"
      label="Language"
      single-line
      bottom
      hide-details
    />
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

      items: locales.map(item => ({
        text: this.$t(`languages.${item}`),
        value: item,
      })),
    };
  },
  watch: {
    locale(next) {
      setLanguage(next);
    },
  },
};
</script>

<style lang="scss" scoped>
  .language-picker {
    width: 100px;
  }
</style>
