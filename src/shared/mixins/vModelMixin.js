export default {
  props: {
    value: String,
  },
  data: () => ({
    model: null,
  }),
  watch: {
    model(value, oldValue) {
      if (oldValue === null && value === '') return;
      this.$emit('input', value);
    },
    value(val) {
      this.model = val;
    },
  },
  created() {
    this.model = this.value;
  },
};
