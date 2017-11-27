<template>
  <form @submit.prevent="submit" class="base-form">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'BaseForm',
  data: () => ({

  }),
  methods: {
    submit() {
      this.$parent.$validator.validateAll().then((result) => {
        if (result) return this.$emit('submit');
        return false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .base-form {

  }
</style>
