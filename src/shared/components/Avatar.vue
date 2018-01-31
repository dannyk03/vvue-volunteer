<template>
  <img class="vv-avatar" :src="src" :width="size" :height="size" />
</template>

<script>
  export default {
    name: 'Avatar',
    props: {
      src: String,
      size: [String, Number],
    },
  };
</script>

<style lang="scss" scoped>
  .vv-avatar {
    border-radius: 100%;
  }
</style>
