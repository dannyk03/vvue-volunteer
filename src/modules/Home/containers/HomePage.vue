<template>
  <div class="home-page">
    <div>i18n: <span v-t="'hello'" /></div>

    HomePage
    <router-link :to="{ name: 'home-one' }">One</router-link>
    <router-link :to="{ name: 'home-second' }">Second</router-link>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'HomePage',
};
</script>

<style lang="scss" scoped>
  .home-page {
    text-align: center;
  }
</style>
