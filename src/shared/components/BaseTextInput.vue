<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: 'BaseTextInput',
  props: {
    value: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
