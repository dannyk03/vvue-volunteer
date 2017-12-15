<template>
  <div class="about-page">
    AboutPage
    <router-link :to="{ name: 'about-one' }">One</router-link>
    <router-link :to="{ name: 'about-second' }">Second</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
  .about-page {
    text-align: center;
  }
</style>
