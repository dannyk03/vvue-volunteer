<template>
  <div class="root">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style lang="scss" scoped>
  .root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
</style>
