<template>
  <v-checkbox
    :label="label"
    v-model="model"
    color="blue accent-1"
  />
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    label: String,
    value: [Boolean],
  },
  data: () => ({
    model: null,
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

<style lang="scss" scoped>
</style>
