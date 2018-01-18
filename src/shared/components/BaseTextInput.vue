<template>
  <v-text-field
    :label="label"
    :required="required"
    :rules="validation"
    :type="type"
    :mask="mask"

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
    validation: Array,
    required: Boolean,
    mask: String,
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
  .base-input {
    text-align: left;
    display: grid;

    .error {
      color: red;
    }
  }
</style>
