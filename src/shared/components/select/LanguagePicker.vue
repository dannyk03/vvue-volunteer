<template>
  <div class="vv-language-picker">
    <vv-simple-radio-picker v-model="model" :options="options"/>
  </div>
</template>

<script>
import VvSimpleRadioPicker from '@/shared/components/select/SimpleRadioPicker';
import vModelMixin from '@/shared/mixins/vModelMixin';
import { setLanguage } from '@/i18n';

export default {
  name: 'LanguagePicker',
  mixins: [vModelMixin],
  components: {
    VvSimpleRadioPicker,
  },
  props: {
    value: String,
    changeGlobal: Boolean,
  },
  data: () => ({
    options: [
      {
        label: 'en',
        value: 'en',
      },
      {
        label: 'de',
        value: 'de',
      },
    ],
  }),
  watch: {
    model(value) {
      if (this.changeGlobal && value) {
        setLanguage(value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';

  .vv-language-picker {
    display: flex;
    align-items: center;
    user-select: none;

    .splitter {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      color: $secondaryGrey;
      font-weight: bold;
    }

    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 2px solid $secondaryGrey;
      color: $secondaryGrey;
      font-weight: bold;
      cursor: pointer;

      &.checked {
        background-color: $primaryGrey;
        border-color: $primaryGrey;
        color: $white;
        pointer-events: none;
      }
    }
  }
</style>
