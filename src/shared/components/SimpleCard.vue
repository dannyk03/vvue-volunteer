<template>
  <div class="vv-simple-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'vv-simple-card',
};
</script>

<style lang="scss" scoped>
  .vv-simple-card {
    padding: 20px;
    border-radius: 3px;
    background-color: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.07);
  }
</style>
