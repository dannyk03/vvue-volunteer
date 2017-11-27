<template>
  <div class="base-input">
    <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
    <span v-if="error" class="error" v-text="error" />
  </div>
</template>

<script>
export default {
  name: 'BaseTextInput',
  props: {
    value: String,
    validate: String,
    error: String,
  },
  computed: {
    error() {
        // TODO: continue with form errors;
    },
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
