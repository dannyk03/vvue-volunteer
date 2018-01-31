<template>
  <div class="vv-gender-picker">
    <vv-simple-radio-picker v-model="model" :options="options"/>
  </div>
</template>

<script>
import VvSimpleRadioPicker from '@/shared/components/select/SimpleRadioPicker';
import vModelMixin from '@/shared/mixins/vModelMixin';
import '@/../static/icons/compiled-svg/female';
import '@/../static/icons/compiled-svg/male';

export default {
  name: 'GenderPicker',
  mixins: [vModelMixin],
  components: {
    VvSimpleRadioPicker,
  },
  data: () => ({
    options: [
      {
        label: 'female',
        value: 'female',
        icon: 'female',
      },
      {
        label: 'male',
        value: 'male',
        icon: 'male',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .vv-genders-picker {

  }
</style>
