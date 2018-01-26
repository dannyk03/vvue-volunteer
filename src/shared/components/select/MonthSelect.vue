<template>
  <vv-base-select
    label="Month"
    :items="months"
    v-model="model"
    :validation="validation"
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
    value: String,
    validation: Array,
  },
  data: () => ({
    model: null,
    months: [
      { value: '01', text: 'January' },
      { value: '02', text: 'February' },
      { value: '03', text: 'March' },
      { value: '04', text: 'April' },
      { value: '05', text: 'May' },
      { value: '06', text: 'June' },
      { value: '07', text: 'July' },
      { value: '08', text: 'August' },
      { value: '09', text: 'September' },
      { value: '10', text: 'October' },
      { value: '11', text: 'November' },
      { value: '12', text: 'December' },
    ],
  }),
  watch: {
    model(value, oldValue) {
      if (oldValue === null && !value) return;
      this.$emit('input', this.model);
    },
    value(val) {
      this.model = val;
    },
  },
  created() {
    this.model = this.value;
  },
};
</script>
