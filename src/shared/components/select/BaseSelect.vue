<template>
  <v-select
    class="vv-select"
    :items="items"
    v-model="model"
    :label="label"
    bottom
    :rules="validation"
    :autocomplete="autocomplete"
  />
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    label: String,
    items: Array,
    value: [String, Number, Object],
    validation: Array,
    autocomplete: Boolean,
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
</script>
