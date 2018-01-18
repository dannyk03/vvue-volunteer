<template>
  <vv-base-select
    label="Month"
    :items="months"
    v-model="model"
  />
</template>

<script>
import VvBaseSelect from './BaseSelect';

export default {
  name: 'MonthSelect',
  components: {
    VvBaseSelect,
  },
  props: {
    label: String,
    items: Array,
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    model: null,
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  }),
  watch: {
    model(value) {
      this.$emit('input', value);
    },
  },
  created() {
    this.model = this.value;
  },
};
</script>
