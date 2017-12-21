<template>
  <v-text-field
    :label="label"
    :required="required"
    :rules="validation"
    :type="type"
    v-model="model"
  ></v-text-field>
</template>

<script>
export default {
  name: 'BaseTextInput',
  props: {
    type: String,
    label: String,
    value: String,
    validation: Object,
    required: Boolean,
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
