<template>
  <img :src="getPath(color)" alt="logo" />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    color: String, // [white|grey]
  },
  methods: {
    getPath(color) {
      return `/static/images/logo-${color}@2x.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
  img {
    width: 131px;
    height: 50px;
  }
</style>
