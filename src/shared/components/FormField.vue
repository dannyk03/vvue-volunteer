<template>
  <label>
    <span v-if="label" v-text="label" />
    <slot v-else name="label"></slot>

    <slot name="control"></slot>
  </label>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
