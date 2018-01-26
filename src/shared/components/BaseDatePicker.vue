<template>
  <v-menu
    lazy
    :close-on-content-click="false"
    v-model="menu"
    transition="scale-transition"
    offset-y
    full-width
    :nudge-right="40"
    max-width="290px"
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      :label="label"
      v-model="model"
      readonly
    ></v-text-field>
    <v-date-picker v-model="model" no-title scrollable />
  </v-menu>
</template>

<script>
export default {
  name: 'BaseDatePicker',
  props: {
    label: String,
    value: String,
  },
  data: () => ({
    model: null,
    menu: false,
  }),
  watch: {
    model(value, oldValue) {
      if (oldValue === null && value === '') return;
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
