<template>
  <v-select
    :items="items"
    v-model="model"
    :label="label"
    bottom
  />
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    label: String,
    items: Array,
    value: [String, Number, Object],
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
